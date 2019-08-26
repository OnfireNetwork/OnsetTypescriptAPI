"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const source_map_1 = require("source-map");
const CompilerOptions_1 = require("./CompilerOptions");
const tstl = require("./LuaAST");
const LuaKeywords_1 = require("./LuaKeywords");
const LuaLib_1 = require("./LuaLib");
const tsHelper = require("./TSHelper");
class LuaPrinter {
    constructor(options, emitHost) {
        this.options = options;
        this.emitHost = emitHost;
        this.currentIndent = "";
        this.sourceFile = "";
    }
    print(block, luaLibFeatures, sourceFile = "") {
        // Add traceback lualib if sourcemap traceback option is enabled
        if (this.options.sourceMapTraceback) {
            if (luaLibFeatures === undefined) {
                luaLibFeatures = new Set();
            }
            luaLibFeatures.add(LuaLib_1.LuaLibFeature.SourceMapTraceBack);
        }
        const rootSourceNode = this.printImplementation(block, luaLibFeatures, sourceFile);
        const sourceRoot = this.options.sourceRoot ||
            (this.options.outDir ? path.relative(this.options.outDir, this.options.rootDir || process.cwd()) : ".");
        const sourceMap = this.buildSourceMap(sourceFile, sourceRoot, rootSourceNode);
        let codeResult = rootSourceNode.toString();
        if (this.options.inlineSourceMap) {
            codeResult += "\n" + this.printInlineSourceMap(sourceMap);
        }
        if (this.options.sourceMapTraceback) {
            const stackTraceOverride = this.printStackTraceOverride(rootSourceNode);
            codeResult = codeResult.replace("{#SourceMapTraceback}", stackTraceOverride);
        }
        return [codeResult, sourceMap.toString()];
    }
    printInlineSourceMap(sourceMap) {
        const map = sourceMap.toString();
        const base64Map = Buffer.from(map).toString("base64");
        return `--# sourceMappingURL=data:application/json;base64,${base64Map}\n`;
    }
    printStackTraceOverride(rootNode) {
        let line = 1;
        const map = {};
        rootNode.walk((chunk, mappedPosition) => {
            if (mappedPosition.line !== undefined && mappedPosition.line > 0) {
                if (map[line] === undefined) {
                    map[line] = mappedPosition.line;
                }
                else {
                    map[line] = Math.min(map[line], mappedPosition.line);
                }
            }
            line += chunk.split("\n").length - 1;
        });
        const mapItems = [];
        for (const lineNr in map) {
            mapItems.push(`["${lineNr}"] = ${map[lineNr]}`);
        }
        const mapString = "{" + mapItems.join(",") + "}";
        return `__TS__SourceMapTraceBack(debug.getinfo(1).short_src, ${mapString});`;
    }
    printImplementation(block, luaLibFeatures, sourceFile = "") {
        let header = "";
        if (!this.options.noHeader) {
            header += `--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]\n`;
        }
        if (luaLibFeatures) {
            const luaLibImport = this.options.luaLibImport || CompilerOptions_1.LuaLibImportKind.Inline;
            // Require lualib bundle
            if ((luaLibImport === CompilerOptions_1.LuaLibImportKind.Require && luaLibFeatures.size > 0) ||
                luaLibImport === CompilerOptions_1.LuaLibImportKind.Always) {
                header += `require("lualib_bundle");\n`;
            }
            // Inline lualib features
            else if (luaLibImport === CompilerOptions_1.LuaLibImportKind.Inline && luaLibFeatures.size > 0) {
                header += "-- Lua Library inline imports\n";
                header += LuaLib_1.loadLuaLibFeatures(luaLibFeatures, this.emitHost);
            }
        }
        this.sourceFile = path.basename(sourceFile);
        if (this.options.sourceMapTraceback) {
            header += "{#SourceMapTraceback}\n";
        }
        const fileBlockNode = this.printBlock(block);
        return this.concatNodes(header, fileBlockNode);
    }
    pushIndent() {
        this.currentIndent = this.currentIndent + "    ";
    }
    popIndent() {
        this.currentIndent = this.currentIndent.slice(4);
    }
    indent(input = "") {
        return this.concatNodes(this.currentIndent, input);
    }
    createSourceNode(node, chunks, name) {
        const originalPos = tstl.getOriginalPos(node);
        return originalPos !== undefined && originalPos.line !== undefined && originalPos.column !== undefined
            ? new source_map_1.SourceNode(originalPos.line + 1, originalPos.column, this.sourceFile, chunks, name)
            : new source_map_1.SourceNode(null, null, this.sourceFile, chunks, name); // tslint:disable-line:no-null-keyword
    }
    concatNodes(...chunks) {
        // tslint:disable-next-line:no-null-keyword
        return new source_map_1.SourceNode(null, null, this.sourceFile, chunks);
    }
    printBlock(block) {
        return this.concatNodes(...this.printStatementArray(block.statements));
    }
    statementMayRequireSemiColon(statement) {
        // Types of statements that could create ambiguous syntax if followed by parenthesis
        return (tstl.isVariableDeclarationStatement(statement) ||
            tstl.isAssignmentStatement(statement) ||
            tstl.isExpressionStatement(statement));
    }
    nodeStartsWithParenthesis(sourceNode) {
        let result;
        sourceNode.walk(chunk => {
            if (result === undefined) {
                chunk = chunk.trimLeft(); // Ignore leading whitespace
                if (chunk.length > 0) {
                    result = chunk.startsWith("(");
                }
            }
        });
        return result || false;
    }
    printStatementArray(statements) {
        const statementNodes = [];
        statements = this.removeDeadAndEmptyStatements(statements);
        statements.forEach((s, i) => {
            const node = this.printStatement(s);
            if (i > 0 && this.statementMayRequireSemiColon(statements[i - 1]) && this.nodeStartsWithParenthesis(node)) {
                statementNodes[i - 1].add(";");
            }
            statementNodes.push(node);
        });
        return statementNodes.length > 0 ? [...this.joinChunks("\n", statementNodes), "\n"] : [];
    }
    printStatement(statement) {
        switch (statement.kind) {
            case tstl.SyntaxKind.DoStatement:
                return this.printDoStatement(statement);
            case tstl.SyntaxKind.VariableDeclarationStatement:
                return this.printVariableDeclarationStatement(statement);
            case tstl.SyntaxKind.AssignmentStatement:
                return this.printVariableAssignmentStatement(statement);
            case tstl.SyntaxKind.IfStatement:
                return this.printIfStatement(statement);
            case tstl.SyntaxKind.WhileStatement:
                return this.printWhileStatement(statement);
            case tstl.SyntaxKind.RepeatStatement:
                return this.printRepeatStatement(statement);
            case tstl.SyntaxKind.ForStatement:
                return this.printForStatement(statement);
            case tstl.SyntaxKind.ForInStatement:
                return this.printForInStatement(statement);
            case tstl.SyntaxKind.GotoStatement:
                return this.printGotoStatement(statement);
            case tstl.SyntaxKind.LabelStatement:
                return this.printLabelStatement(statement);
            case tstl.SyntaxKind.ReturnStatement:
                return this.printReturnStatement(statement);
            case tstl.SyntaxKind.BreakStatement:
                return this.printBreakStatement(statement);
            case tstl.SyntaxKind.ExpressionStatement:
                return this.printExpressionStatement(statement);
            default:
                throw new Error(`Tried to print unknown statement kind: ${tstl.SyntaxKind[statement.kind]}`);
        }
    }
    printDoStatement(statement) {
        const chunks = [];
        chunks.push(this.indent("do\n"));
        this.pushIndent();
        chunks.push(...this.printStatementArray(statement.statements));
        this.popIndent();
        chunks.push(this.indent("end"));
        return this.concatNodes(...chunks);
    }
    printVariableDeclarationStatement(statement) {
        const chunks = [];
        chunks.push(this.indent("local "));
        if (tstl.isFunctionDefinition(statement)) {
            // Print all local functions as `local function foo()` instead of `local foo = function` to allow recursion
            chunks.push(this.printFunctionDefinition(statement));
        }
        else {
            chunks.push(...this.joinChunks(", ", statement.left.map(e => this.printExpression(e))));
            if (statement.right) {
                chunks.push(" = ");
                chunks.push(...this.joinChunks(", ", statement.right.map(e => this.printExpression(e))));
            }
        }
        return this.createSourceNode(statement, chunks);
    }
    printVariableAssignmentStatement(statement) {
        const chunks = [];
        chunks.push(this.indent());
        if (tstl.isFunctionDefinition(statement) &&
            (statement.right[0].flags & tstl.FunctionExpressionFlags.Declaration) !== 0) {
            // Use `function foo()` instead of `foo = function()`
            const name = this.printExpression(statement.left[0]);
            if (tsHelper.isValidLuaFunctionDeclarationName(name.toString())) {
                chunks.push(this.printFunctionDefinition(statement));
                return this.createSourceNode(statement, chunks);
            }
        }
        chunks.push(...this.joinChunks(", ", statement.left.map(e => this.printExpression(e))));
        chunks.push(" = ");
        chunks.push(...this.joinChunks(", ", statement.right.map(e => this.printExpression(e))));
        return this.createSourceNode(statement, chunks);
    }
    printIfStatement(statement) {
        const chunks = [];
        const isElseIf = statement.parent !== undefined && tstl.isIfStatement(statement.parent);
        const prefix = isElseIf ? "elseif" : "if";
        chunks.push(this.indent(prefix + " "), this.printExpression(statement.condition), " then\n");
        this.pushIndent();
        chunks.push(this.printBlock(statement.ifBlock));
        this.popIndent();
        if (statement.elseBlock) {
            if (tstl.isIfStatement(statement.elseBlock)) {
                chunks.push(this.printIfStatement(statement.elseBlock));
            }
            else {
                chunks.push(this.indent("else\n"));
                this.pushIndent();
                chunks.push(this.printBlock(statement.elseBlock));
                this.popIndent();
                chunks.push(this.indent("end"));
            }
        }
        else {
            chunks.push(this.indent("end"));
        }
        return this.concatNodes(...chunks);
    }
    printWhileStatement(statement) {
        const chunks = [];
        chunks.push(this.indent("while "), this.printExpression(statement.condition), " do\n");
        this.pushIndent();
        chunks.push(this.printBlock(statement.body));
        this.popIndent();
        chunks.push(this.indent("end"));
        return this.concatNodes(...chunks);
    }
    printRepeatStatement(statement) {
        const chunks = [];
        chunks.push(this.indent(`repeat\n`));
        this.pushIndent();
        chunks.push(this.printBlock(statement.body));
        this.popIndent();
        chunks.push(this.indent("until "), this.printExpression(statement.condition));
        return this.concatNodes(...chunks);
    }
    printForStatement(statement) {
        const ctrlVar = this.printExpression(statement.controlVariable);
        const ctrlVarInit = this.printExpression(statement.controlVariableInitializer);
        const limit = this.printExpression(statement.limitExpression);
        const chunks = [];
        chunks.push(this.indent("for "), ctrlVar, " = ", ctrlVarInit, ", ", limit);
        if (statement.stepExpression) {
            chunks.push(", ", this.printExpression(statement.stepExpression));
        }
        chunks.push(" do\n");
        this.pushIndent();
        chunks.push(this.printBlock(statement.body));
        this.popIndent();
        chunks.push(this.indent("end"));
        return this.concatNodes(...chunks);
    }
    printForInStatement(statement) {
        const names = this.joinChunks(", ", statement.names.map(i => this.printIdentifier(i)));
        const expressions = this.joinChunks(", ", statement.expressions.map(e => this.printExpression(e)));
        const chunks = [];
        chunks.push(this.indent("for "), ...names, " in ", ...expressions, " do\n");
        this.pushIndent();
        chunks.push(this.printBlock(statement.body));
        this.popIndent();
        chunks.push(this.indent("end"));
        return this.createSourceNode(statement, chunks);
    }
    printGotoStatement(statement) {
        return this.createSourceNode(statement, [this.indent("goto "), statement.label]);
    }
    printLabelStatement(statement) {
        return this.createSourceNode(statement, [this.indent("::"), statement.name, "::"]);
    }
    printReturnStatement(statement) {
        if (!statement.expressions || statement.expressions.length === 0) {
            return this.createSourceNode(statement, this.indent("return"));
        }
        const chunks = [];
        chunks.push(...this.joinChunks(", ", statement.expressions.map(e => this.printExpression(e))));
        return this.createSourceNode(statement, [this.indent(), "return ", ...chunks]);
    }
    printBreakStatement(statement) {
        return this.createSourceNode(statement, this.indent("break"));
    }
    printExpressionStatement(statement) {
        return this.createSourceNode(statement, [this.indent(), this.printExpression(statement.expression)]);
    }
    // Expressions
    printExpression(expression) {
        switch (expression.kind) {
            case tstl.SyntaxKind.StringLiteral:
                return this.printStringLiteral(expression);
            case tstl.SyntaxKind.NumericLiteral:
                return this.printNumericLiteral(expression);
            case tstl.SyntaxKind.NilKeyword:
                return this.printNilLiteral(expression);
            case tstl.SyntaxKind.DotsKeyword:
                return this.printDotsLiteral(expression);
            case tstl.SyntaxKind.TrueKeyword:
            case tstl.SyntaxKind.FalseKeyword:
                return this.printBooleanLiteral(expression);
            case tstl.SyntaxKind.FunctionExpression:
                return this.printFunctionExpression(expression);
            case tstl.SyntaxKind.TableFieldExpression:
                return this.printTableFieldExpression(expression);
            case tstl.SyntaxKind.TableExpression:
                return this.printTableExpression(expression);
            case tstl.SyntaxKind.UnaryExpression:
                return this.printUnaryExpression(expression);
            case tstl.SyntaxKind.BinaryExpression:
                return this.printBinaryExpression(expression);
            case tstl.SyntaxKind.ParenthesizedExpression:
                return this.printParenthesizedExpression(expression);
            case tstl.SyntaxKind.CallExpression:
                return this.printCallExpression(expression);
            case tstl.SyntaxKind.MethodCallExpression:
                return this.printMethodCallExpression(expression);
            case tstl.SyntaxKind.Identifier:
                return this.printIdentifier(expression);
            case tstl.SyntaxKind.TableIndexExpression:
                return this.printTableIndexExpression(expression);
            default:
                throw new Error(`Tried to print unknown statement kind: ${tstl.SyntaxKind[expression.kind]}`);
        }
    }
    printStringLiteral(expression) {
        return this.createSourceNode(expression, `"${expression.value}"`);
    }
    printNumericLiteral(expression) {
        return this.createSourceNode(expression, String(expression.value));
    }
    printNilLiteral(expression) {
        return this.createSourceNode(expression, "nil");
    }
    printDotsLiteral(expression) {
        return this.createSourceNode(expression, "...");
    }
    printBooleanLiteral(expression) {
        if (expression.kind === tstl.SyntaxKind.TrueKeyword) {
            return this.createSourceNode(expression, "true");
        }
        else {
            return this.createSourceNode(expression, "false");
        }
    }
    printFunctionParameters(expression) {
        const parameterChunks = expression.params
            ? expression.params.map(i => this.printIdentifier(i))
            : [];
        if (expression.dots) {
            parameterChunks.push(this.printDotsLiteral(expression.dots));
        }
        return this.joinChunks(", ", parameterChunks);
    }
    printFunctionExpression(expression) {
        const chunks = [];
        chunks.push("function(");
        chunks.push(...this.printFunctionParameters(expression));
        chunks.push(")");
        if (tstl.isInlineFunctionExpression(expression)) {
            const returnStatement = expression.body.statements[0];
            chunks.push(" ");
            const returnNode = [
                "return ",
                ...this.joinChunks(", ", returnStatement.expressions.map(e => this.printExpression(e))),
            ];
            chunks.push(this.createSourceNode(returnStatement, returnNode));
            chunks.push(this.createSourceNode(expression, " end"));
        }
        else {
            chunks.push("\n");
            this.pushIndent();
            chunks.push(this.printBlock(expression.body));
            this.popIndent();
            chunks.push(this.indent(this.createSourceNode(expression, "end")));
        }
        return this.createSourceNode(expression, chunks);
    }
    printFunctionDefinition(statement) {
        const expression = statement.right[0];
        const chunks = [];
        chunks.push("function ");
        chunks.push(this.printExpression(statement.left[0]));
        chunks.push("(");
        chunks.push(...this.printFunctionParameters(expression));
        chunks.push(")\n");
        this.pushIndent();
        chunks.push(this.printBlock(expression.body));
        this.popIndent();
        chunks.push(this.indent(this.createSourceNode(statement, "end")));
        return this.createSourceNode(expression, chunks);
    }
    printTableFieldExpression(expression) {
        const chunks = [];
        const value = this.printExpression(expression.value);
        if (expression.key) {
            if (tstl.isStringLiteral(expression.key) &&
                tsHelper.isValidLuaIdentifier(expression.key.value) &&
                !LuaKeywords_1.luaKeywords.has(expression.key.value)) {
                chunks.push(expression.key.value, " = ", value);
            }
            else {
                chunks.push("[", this.printExpression(expression.key), "] = ", value);
            }
        }
        else {
            chunks.push(value);
        }
        return this.createSourceNode(expression, chunks);
    }
    printTableExpression(expression) {
        return this.createSourceNode(expression, ["{", ...this.printExpressionList(expression.fields), "}"]);
    }
    printUnaryExpression(expression) {
        const chunks = [];
        chunks.push(this.printOperator(expression.operator));
        chunks.push(this.printExpression(expression.operand));
        return this.createSourceNode(expression, chunks);
    }
    printBinaryExpression(expression) {
        const chunks = [];
        chunks.push(this.printExpression(expression.left));
        chunks.push(" ", this.printOperator(expression.operator), " ");
        chunks.push(this.printExpression(expression.right));
        return this.createSourceNode(expression, chunks);
    }
    canStripParenthesis(expression) {
        return (tstl.isParenthesizedExpression(expression) ||
            tstl.isTableIndexExpression(expression) ||
            tstl.isCallExpression(expression) ||
            tstl.isMethodCallExpression(expression) ||
            tstl.isIdentifier(expression) ||
            tstl.isNilLiteral(expression) ||
            tstl.isNumericLiteral(expression) ||
            tstl.isBooleanLiteral(expression));
    }
    printParenthesizedExpression(expression) {
        const innerExpression = this.printExpression(expression.innerExpression);
        if (this.canStripParenthesis(expression.innerExpression)) {
            return this.createSourceNode(expression, innerExpression);
        }
        return this.createSourceNode(expression, ["(", innerExpression, ")"]);
    }
    printCallExpression(expression) {
        const chunks = [];
        chunks.push(this.printExpression(expression.expression), "(");
        if (expression.params) {
            chunks.push(...this.printExpressionList(expression.params));
        }
        chunks.push(")");
        return this.createSourceNode(expression, chunks);
    }
    printMethodCallExpression(expression) {
        const chunks = [];
        const prefix = this.printExpression(expression.prefixExpression);
        const name = this.printIdentifier(expression.name);
        chunks.push(prefix, ":", name, "(");
        if (expression.params) {
            chunks.push(...this.printExpressionList(expression.params));
        }
        chunks.push(")");
        return this.createSourceNode(expression, chunks);
    }
    printIdentifier(expression) {
        return this.createSourceNode(expression, expression.text, expression.originalName !== expression.text ? expression.originalName : undefined);
    }
    printTableIndexExpression(expression) {
        const chunks = [];
        chunks.push(this.printExpression(expression.table));
        if (tstl.isStringLiteral(expression.index) &&
            tsHelper.isValidLuaIdentifier(expression.index.value) &&
            !LuaKeywords_1.luaKeywords.has(expression.index.value)) {
            chunks.push(".", this.createSourceNode(expression.index, expression.index.value));
        }
        else {
            chunks.push("[", this.printExpression(expression.index), "]");
        }
        return this.createSourceNode(expression, chunks);
    }
    printOperator(kind) {
        // tslint:disable-next-line:no-null-keyword
        return new source_map_1.SourceNode(null, null, this.sourceFile, LuaPrinter.operatorMap[kind]);
    }
    removeDeadAndEmptyStatements(statements) {
        const aliveStatements = [];
        for (const statement of statements) {
            if (!this.isStatementEmpty(statement)) {
                aliveStatements.push(statement);
            }
            if (tstl.isReturnStatement(statement)) {
                break;
            }
        }
        return aliveStatements;
    }
    isStatementEmpty(statement) {
        return tstl.isDoStatement(statement) && (!statement.statements || statement.statements.length === 0);
    }
    joinChunks(separator, chunks) {
        const result = [];
        for (let i = 0; i < chunks.length; i++) {
            result.push(chunks[i]);
            if (i < chunks.length - 1) {
                result.push(separator);
            }
        }
        return result;
    }
    printExpressionList(expressions) {
        const chunks = [];
        if (expressions.every(e => tsHelper.isSimpleExpression(e))) {
            chunks.push(...this.joinChunks(", ", expressions.map(e => this.printExpression(e))));
        }
        else {
            chunks.push("\n");
            this.pushIndent();
            expressions.forEach((p, i) => {
                const tail = i < expressions.length - 1 ? ",\n" : "\n";
                chunks.push(this.indent(), this.printExpression(p), tail);
            });
            this.popIndent();
            chunks.push(this.indent());
        }
        return chunks;
    }
    // The key difference between this and SourceNode.toStringWithSourceMap() is that SourceNodes with null line/column
    // will not generate 'empty' mappings in the source map that point to nothing in the original TS.
    buildSourceMap(sourceFile, sourceRoot, rootSourceNode) {
        const map = new source_map_1.SourceMapGenerator({
            file: path.basename(sourceFile, path.extname(sourceFile)) + ".lua",
            sourceRoot,
        });
        let generatedLine = 1;
        let generatedColumn = 0;
        let currentMapping;
        const isNewMapping = (sourceNode) => {
            if (sourceNode.line === null) {
                return false;
            }
            if (currentMapping === undefined) {
                return true;
            }
            if (currentMapping.generated.line === generatedLine &&
                currentMapping.generated.column === generatedColumn &&
                currentMapping.name === sourceNode.name) {
                return false;
            }
            return (currentMapping.original.line !== sourceNode.line ||
                currentMapping.original.column !== sourceNode.column ||
                currentMapping.name !== sourceNode.name);
        };
        const build = (sourceNode) => {
            if (isNewMapping(sourceNode)) {
                currentMapping = {
                    source: sourceNode.source,
                    original: { line: sourceNode.line, column: sourceNode.column },
                    generated: { line: generatedLine, column: generatedColumn },
                    name: sourceNode.name,
                };
                map.addMapping(currentMapping);
            }
            for (const chunk of sourceNode.children) {
                if (typeof chunk === "string") {
                    const lines = chunk.split("\n");
                    if (lines.length > 1) {
                        generatedLine += lines.length - 1;
                        generatedColumn = 0;
                        currentMapping = undefined; // Mappings end at newlines
                    }
                    generatedColumn += lines[lines.length - 1].length;
                }
                else {
                    build(chunk);
                }
            }
        };
        build(rootSourceNode);
        return map;
    }
}
LuaPrinter.operatorMap = {
    [tstl.SyntaxKind.AdditionOperator]: "+",
    [tstl.SyntaxKind.SubtractionOperator]: "-",
    [tstl.SyntaxKind.MultiplicationOperator]: "*",
    [tstl.SyntaxKind.DivisionOperator]: "/",
    [tstl.SyntaxKind.FloorDivisionOperator]: "//",
    [tstl.SyntaxKind.ModuloOperator]: "%",
    [tstl.SyntaxKind.PowerOperator]: "^",
    [tstl.SyntaxKind.NegationOperator]: "-",
    [tstl.SyntaxKind.ConcatOperator]: "..",
    [tstl.SyntaxKind.LengthOperator]: "#",
    [tstl.SyntaxKind.EqualityOperator]: "==",
    [tstl.SyntaxKind.InequalityOperator]: "~=",
    [tstl.SyntaxKind.LessThanOperator]: "<",
    [tstl.SyntaxKind.LessEqualOperator]: "<=",
    [tstl.SyntaxKind.GreaterThanOperator]: ">",
    [tstl.SyntaxKind.GreaterEqualOperator]: ">=",
    [tstl.SyntaxKind.AndOperator]: "and",
    [tstl.SyntaxKind.OrOperator]: "or",
    [tstl.SyntaxKind.NotOperator]: "not ",
    [tstl.SyntaxKind.BitwiseAndOperator]: "&",
    [tstl.SyntaxKind.BitwiseOrOperator]: "|",
    [tstl.SyntaxKind.BitwiseExclusiveOrOperator]: "~",
    [tstl.SyntaxKind.BitwiseRightShiftOperator]: ">>",
    [tstl.SyntaxKind.BitwiseLeftShiftOperator]: "<<",
    [tstl.SyntaxKind.BitwiseNotOperator]: "~",
};
exports.LuaPrinter = LuaPrinter;
//# sourceMappingURL=LuaPrinter.js.map