"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const diagnosticFactories = require("./diagnostics");
const LuaPrinter_1 = require("./LuaPrinter");
const LuaTransformer_1 = require("./LuaTransformer");
const TranspileError_1 = require("./TranspileError");
const TSTransformers_1 = require("./TSTransformers");
function transpile({ program, sourceFiles: targetSourceFiles, customTransformers = {}, emitHost = ts.sys, transformer = new LuaTransformer_1.LuaTransformer(program), printer = new LuaPrinter_1.LuaPrinter(program.getCompilerOptions(), emitHost), }) {
    const options = program.getCompilerOptions();
    const diagnostics = [];
    let transpiledFiles = [];
    const updateTranspiledFile = (fileName, update) => {
        const file = transpiledFiles.find(f => f.fileName === fileName);
        if (file) {
            Object.assign(file, update);
        }
        else {
            transpiledFiles.push(Object.assign({ fileName }, update));
        }
    };
    if (options.noEmitOnError) {
        const preEmitDiagnostics = [...program.getOptionsDiagnostics(), ...program.getGlobalDiagnostics()];
        if (targetSourceFiles) {
            for (const sourceFile of targetSourceFiles) {
                preEmitDiagnostics.push(...program.getSyntacticDiagnostics(sourceFile));
                preEmitDiagnostics.push(...program.getSemanticDiagnostics(sourceFile));
            }
        }
        else {
            preEmitDiagnostics.push(...program.getSyntacticDiagnostics());
            preEmitDiagnostics.push(...program.getSemanticDiagnostics());
        }
        if (preEmitDiagnostics.length === 0 && (options.declaration || options.composite)) {
            preEmitDiagnostics.push(...program.getDeclarationDiagnostics());
        }
        if (preEmitDiagnostics.length > 0) {
            return { diagnostics: preEmitDiagnostics, transpiledFiles };
        }
    }
    const processSourceFile = (sourceFile) => {
        try {
            const [luaAst, lualibFeatureSet] = transformer.transform(sourceFile);
            if (!options.noEmit && !options.emitDeclarationOnly) {
                const [lua, sourceMap] = printer.print(luaAst, lualibFeatureSet, sourceFile.fileName);
                updateTranspiledFile(sourceFile.fileName, { luaAst, lua, sourceMap });
            }
        }
        catch (err) {
            if (!(err instanceof TranspileError_1.TranspileError))
                throw err;
            diagnostics.push(diagnosticFactories.transpileError(err));
            updateTranspiledFile(sourceFile.fileName, {
                lua: `error(${JSON.stringify(err.message)})\n`,
                sourceMap: "",
            });
        }
    };
    const transformers = TSTransformers_1.getCustomTransformers(program, diagnostics, customTransformers, processSourceFile);
    const writeFile = (fileName, data, _bom, _onError, sourceFiles = []) => {
        for (const sourceFile of sourceFiles) {
            const isDeclaration = fileName.endsWith(".d.ts");
            const isDeclarationMap = fileName.endsWith(".d.ts.map");
            if (isDeclaration) {
                updateTranspiledFile(sourceFile.fileName, { declaration: data });
            }
            else if (isDeclarationMap) {
                updateTranspiledFile(sourceFile.fileName, { declarationMap: data });
            }
        }
    };
    const isEmittableJsonFile = (sourceFile) => sourceFile.flags & ts.NodeFlags.JsonFile &&
        !options.emitDeclarationOnly &&
        !program.isSourceFileFromExternalLibrary(sourceFile);
    // We always have to emit to get transformer diagnostics
    const oldNoEmit = options.noEmit;
    options.noEmit = false;
    if (targetSourceFiles) {
        for (const file of targetSourceFiles) {
            if (isEmittableJsonFile(file)) {
                processSourceFile(file);
            }
            else {
                diagnostics.push(...program.emit(file, writeFile, undefined, false, transformers).diagnostics);
            }
        }
    }
    else {
        diagnostics.push(...program.emit(undefined, writeFile, undefined, false, transformers).diagnostics);
        // JSON files don't get through transformers and aren't written when outDir is the same as rootDir
        program
            .getSourceFiles()
            .filter(isEmittableJsonFile)
            .forEach(processSourceFile);
    }
    options.noEmit = oldNoEmit;
    if (options.noEmit || (options.noEmitOnError && diagnostics.length > 0)) {
        transpiledFiles = [];
    }
    return { diagnostics, transpiledFiles };
}
exports.transpile = transpile;
//# sourceMappingURL=Transpile.js.map