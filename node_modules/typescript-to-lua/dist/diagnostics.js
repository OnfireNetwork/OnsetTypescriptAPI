"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
exports.transpileError = (error) => ({
    file: error.node.getSourceFile(),
    start: error.node.getStart(),
    length: error.node.getWidth(),
    category: ts.DiagnosticCategory.Error,
    code: 0,
    source: "typescript-to-lua",
    messageText: error.message,
});
exports.tstlOptionsAreMovingToTheTstlObject = (tstl) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Warning,
    code: 0,
    source: "typescript-to-lua",
    messageText: 'TSTL options are moving to the "tstl" object. Adjust your tsconfig to look like\n' +
        `"tstl": ${JSON.stringify(tstl, undefined, 4)}`,
});
exports.toLoadTransformerItShouldBeTranspiled = (transform) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Error,
    code: 0,
    source: "typescript-to-lua",
    messageText: `To load "${transform}" transformer it should be transpiled or "ts-node" should be installed`,
});
exports.couldNotResolveTransformerFrom = (transform, base) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Error,
    code: 0,
    source: "typescript-to-lua",
    messageText: `Could not resolve "${transform}" transformer from "${base}".`,
});
exports.transformerShouldHaveAExport = (transform, importName) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Error,
    code: 0,
    source: "typescript-to-lua",
    messageText: `"${transform}" transformer should have a "${importName}" export`,
});
exports.transformerShouldBeATsTransformerFactory = (transform) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Error,
    code: 0,
    source: "typescript-to-lua",
    messageText: `"${transform}" transformer should be a ts.TransformerFactory or an object with ts.TransformerFactory values`,
});
exports.watchErrorSummary = (errorCount) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Message,
    code: errorCount === 1 ? 6193 : 6194,
    messageText: errorCount === 1
        ? "Found 1 error. Watching for file changes."
        : `Found ${errorCount} errors. Watching for file changes.`,
});
const createCommandLineError = (code, getMessage) => (...args) => ({
    file: undefined,
    start: undefined,
    length: undefined,
    category: ts.DiagnosticCategory.Error,
    code,
    messageText: getMessage(...args),
});
exports.unknownCompilerOption = createCommandLineError(5023, (name) => `Unknown compiler option '${name}'.`);
exports.compilerOptionRequiresAValueOfType = createCommandLineError(5024, (name, type) => `Compiler option '${name}' requires a value of type ${type}.`);
exports.optionProjectCannotBeMixedWithSourceFilesOnACommandLine = createCommandLineError(5042, () => "Option 'project' cannot be mixed with source files on a command line.");
exports.cannotFindATsconfigJsonAtTheSpecifiedDirectory = createCommandLineError(5057, (dir) => `Cannot find a tsconfig.json file at the specified directory: '${dir}'.`);
exports.theSpecifiedPathDoesNotExist = createCommandLineError(5058, (dir) => `The specified path does not exist: '${dir}'.`);
exports.compilerOptionExpectsAnArgument = createCommandLineError(6044, (name) => `Compiler option '${name}' expects an argument.`);
exports.argumentForOptionMustBe = createCommandLineError(6046, (name, values) => `Argument for '${name}' option must be: ${values}.`);
exports.optionCanOnlyBeSpecifiedInTsconfigJsonFile = createCommandLineError(6064, (name) => `Option '${name}' can only be specified in 'tsconfig.json' file.`);
exports.optionBuildMustBeFirstCommandLineArgument = createCommandLineError(6369, () => "Option '--build' must be the first command line argument.");
//# sourceMappingURL=diagnostics.js.map