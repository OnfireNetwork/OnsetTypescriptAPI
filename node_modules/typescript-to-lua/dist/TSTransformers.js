"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const resolve = require("resolve");
const ts = require("typescript");
const diagnosticFactories = require("./diagnostics");
function getCustomTransformers(program, diagnostics, customTransformers, onSourceFile) {
    const luaTransformer = () => sourceFile => {
        onSourceFile(sourceFile);
        return ts.createSourceFile(sourceFile.fileName, "", ts.ScriptTarget.ESNext);
    };
    const transformersFromOptions = loadTransformersFromOptions(program, diagnostics);
    return {
        afterDeclarations: [
            ...(transformersFromOptions.afterDeclarations || []),
            ...(customTransformers.afterDeclarations || []),
        ],
        before: [
            ...(customTransformers.before || []),
            ...(transformersFromOptions.before || []),
            ...(transformersFromOptions.after || []),
            ...(customTransformers.after || []),
            luaTransformer,
        ],
    };
}
exports.getCustomTransformers = getCustomTransformers;
function loadTransformersFromOptions(program, allDiagnostics) {
    const customTransformers = {
        before: [],
        after: [],
        afterDeclarations: [],
    };
    const options = program.getCompilerOptions();
    if (!options.plugins)
        return customTransformers;
    const configFileName = options.configFilePath;
    const basedir = configFileName ? path.dirname(configFileName) : process.cwd();
    for (const [index, transformerImport] of options.plugins.entries()) {
        if (!("transform" in transformerImport))
            continue;
        const optionName = `compilerOptions.plugins[${index}]`;
        const { error: resolveError, factory } = resolveTransformerFactory(basedir, optionName, transformerImport);
        if (resolveError)
            allDiagnostics.push(resolveError);
        if (factory === undefined)
            continue;
        const { error: loadError, transformer } = loadTransformer(optionName, program, factory, transformerImport);
        if (loadError)
            allDiagnostics.push(loadError);
        if (transformer === undefined)
            continue;
        if (transformer.before) {
            customTransformers.before.push(transformer.before);
        }
        if (transformer.after) {
            customTransformers.after.push(transformer.after);
        }
        if (transformer.afterDeclarations) {
            customTransformers.afterDeclarations.push(transformer.afterDeclarations);
        }
    }
    return customTransformers;
}
function resolveTransformerFactory(basedir, transformerOptionPath, { transform, import: importName = "default" }) {
    if (typeof transform !== "string") {
        const optionName = `${transformerOptionPath}.transform`;
        return { error: diagnosticFactories.compilerOptionRequiresAValueOfType(optionName, "string") };
    }
    let resolved;
    try {
        resolved = resolve.sync(transform, { basedir, extensions: [".js", ".ts", ".tsx"] });
    }
    catch (err) {
        if (err.code !== "MODULE_NOT_FOUND")
            throw err;
        return { error: diagnosticFactories.couldNotResolveTransformerFrom(transform, basedir) };
    }
    // tslint:disable-next-line: deprecation
    const hasNoRequireHook = require.extensions[".ts"] === undefined;
    if (hasNoRequireHook && (resolved.endsWith(".ts") || resolved.endsWith(".tsx"))) {
        try {
            const tsNode = require("ts-node");
            tsNode.register({ transpileOnly: true });
        }
        catch (err) {
            if (err.code !== "MODULE_NOT_FOUND")
                throw err;
            return { error: diagnosticFactories.toLoadTransformerItShouldBeTranspiled(transform) };
        }
    }
    const factory = require(resolved)[importName];
    if (factory === undefined) {
        return { error: diagnosticFactories.transformerShouldHaveAExport(transform, importName) };
    }
    return { factory };
}
function loadTransformer(transformerOptionPath, program, factory, _a) {
    var { transform, after = false, afterDeclarations = false, type = "program" } = _a, extraOptions = __rest(_a, ["transform", "after", "afterDeclarations", "type"]);
    let transformer;
    switch (type) {
        case "program":
            transformer = factory(program, extraOptions);
            break;
        case "config":
            transformer = factory(extraOptions);
            break;
        case "checker":
            transformer = factory(program.getTypeChecker(), extraOptions);
            break;
        case "raw":
            transformer = factory;
            break;
        case "compilerOptions":
            transformer = factory(program.getCompilerOptions(), extraOptions);
            break;
        default: {
            const optionName = `--${transformerOptionPath}.type`;
            return { error: diagnosticFactories.argumentForOptionMustBe(optionName, "program") };
        }
    }
    if (typeof after !== "boolean") {
        const optionName = `${transformerOptionPath}.after`;
        return { error: diagnosticFactories.compilerOptionRequiresAValueOfType(optionName, "boolean") };
    }
    if (typeof afterDeclarations !== "boolean") {
        const optionName = `${transformerOptionPath}.afterDeclarations`;
        return { error: diagnosticFactories.compilerOptionRequiresAValueOfType(optionName, "boolean") };
    }
    if (typeof transformer === "function") {
        let wrappedTransformer;
        if (after) {
            wrappedTransformer = { after: transformer };
        }
        else if (afterDeclarations) {
            wrappedTransformer = { afterDeclarations: transformer };
        }
        else {
            wrappedTransformer = { before: transformer };
        }
        return { transformer: wrappedTransformer };
    }
    else {
        const isValidGroupTransformer = typeof transformer === "object" &&
            (transformer.before || transformer.after || transformer.afterDeclarations);
        if (!isValidGroupTransformer) {
            return { error: diagnosticFactories.transformerShouldBeATsTransformerFactory(transform) };
        }
    }
    return { transformer };
}
//# sourceMappingURL=TSTransformers.js.map