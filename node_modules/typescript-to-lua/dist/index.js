"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const CommandLineParser_1 = require("./CommandLineParser");
const Emit_1 = require("./Emit");
const Transpile_1 = require("./Transpile");
var CommandLineParser_2 = require("./CommandLineParser");
exports.parseCommandLine = CommandLineParser_2.parseCommandLine;
exports.updateParsedConfigFile = CommandLineParser_2.updateParsedConfigFile;
exports.createDiagnosticReporter = CommandLineParser_2.createDiagnosticReporter;
__export(require("./CompilerOptions"));
__export(require("./Emit"));
__export(require("./LuaAST"));
var LuaLib_1 = require("./LuaLib");
exports.LuaLibFeature = LuaLib_1.LuaLibFeature;
__export(require("./LuaPrinter"));
__export(require("./LuaTransformer"));
__export(require("./Transpile"));
__export(require("./TranspileError"));
function transpileFiles(rootNames, options = {}) {
    const program = ts.createProgram(rootNames, options);
    const { transpiledFiles, diagnostics: transpileDiagnostics } = Transpile_1.transpile({ program });
    const emitResult = Emit_1.emitTranspiledFiles(program.getCompilerOptions(), transpiledFiles);
    const diagnostics = ts.sortAndDeduplicateDiagnostics([
        ...ts.getPreEmitDiagnostics(program),
        ...transpileDiagnostics,
    ]);
    return { diagnostics: [...diagnostics], emitResult };
}
exports.transpileFiles = transpileFiles;
function transpileProject(configFileName, optionsToExtend) {
    const parseResult = CommandLineParser_1.parseConfigFileWithSystem(configFileName, optionsToExtend);
    if (parseResult.errors.length > 0) {
        return { diagnostics: parseResult.errors, emitResult: [] };
    }
    return transpileFiles(parseResult.fileNames, parseResult.options);
}
exports.transpileProject = transpileProject;
const libCache = {};
/** @internal */
function createVirtualProgram(input, options = {}) {
    const compilerHost = {
        fileExists: () => true,
        getCanonicalFileName: fileName => fileName,
        getCurrentDirectory: () => "",
        getDefaultLibFileName: ts.getDefaultLibFileName,
        readFile: () => "",
        getNewLine: () => "\n",
        useCaseSensitiveFileNames: () => false,
        writeFile: () => { },
        getSourceFile: filename => {
            if (filename in input) {
                return ts.createSourceFile(filename, input[filename], ts.ScriptTarget.Latest, false);
            }
            if (filename.startsWith("lib.")) {
                if (libCache[filename])
                    return libCache[filename];
                const typeScriptDir = path.dirname(require.resolve("typescript"));
                const filePath = path.join(typeScriptDir, filename);
                const content = fs.readFileSync(filePath, "utf8");
                libCache[filename] = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, false);
                return libCache[filename];
            }
        },
    };
    return ts.createProgram(Object.keys(input), options, compilerHost);
}
exports.createVirtualProgram = createVirtualProgram;
function transpileVirtualProject(files, options = {}) {
    const program = createVirtualProgram(files, options);
    const result = Transpile_1.transpile({ program });
    const diagnostics = ts.sortAndDeduplicateDiagnostics([...ts.getPreEmitDiagnostics(program), ...result.diagnostics]);
    return Object.assign({}, result, { diagnostics: [...diagnostics] });
}
exports.transpileVirtualProject = transpileVirtualProject;
function transpileString(main, options = {}) {
    const { diagnostics, transpiledFiles } = transpileVirtualProject({ "main.ts": main }, options);
    return { diagnostics, file: transpiledFiles.find(({ fileName }) => fileName === "main.ts") };
}
exports.transpileString = transpileString;
//# sourceMappingURL=index.js.map