"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const ts = require("typescript");
const CompilerOptions_1 = require("./CompilerOptions");
const trimExt = (filePath) => filePath.slice(0, -path.extname(filePath).length);
const normalizeSlashes = (filePath) => filePath.replace(/\\/g, "/");
let lualibContent;
function emitTranspiledFiles(options, transpiledFiles, emitHost = ts.sys) {
    let { rootDir, outDir, outFile, luaLibImport } = options;
    const configFileName = options.configFilePath;
    // TODO: Use getCommonSourceDirectory
    const baseDir = configFileName ? path.dirname(configFileName) : process.cwd();
    rootDir = rootDir || baseDir;
    outDir = outDir ? path.resolve(baseDir, outDir) : rootDir;
    const files = [];
    for (const { fileName, lua, sourceMap, declaration, declarationMap } of transpiledFiles) {
        let outPath = fileName;
        if (outDir !== rootDir) {
            outPath = path.resolve(outDir, path.relative(rootDir, fileName));
        }
        // change extension or rename to outFile
        if (outFile) {
            outPath = path.isAbsolute(outFile) ? outFile : path.resolve(baseDir, outFile);
        }
        else {
            outPath = trimExt(outPath) + ".lua";
        }
        outPath = normalizeSlashes(outPath);
        if (lua !== undefined) {
            files.push({ name: outPath, text: lua });
        }
        if (sourceMap !== undefined && options.sourceMap) {
            files.push({ name: outPath + ".map", text: sourceMap });
        }
        if (declaration !== undefined) {
            files.push({ name: trimExt(outPath) + ".d.ts", text: declaration });
        }
        if (declarationMap !== undefined) {
            files.push({ name: trimExt(outPath) + ".d.ts.map", text: declarationMap });
        }
    }
    if (luaLibImport === CompilerOptions_1.LuaLibImportKind.Require || luaLibImport === CompilerOptions_1.LuaLibImportKind.Always) {
        if (lualibContent === undefined) {
            const lualibBundle = emitHost.readFile(path.resolve(__dirname, "../dist/lualib/lualib_bundle.lua"));
            if (lualibBundle !== undefined) {
                lualibContent = lualibBundle;
            }
            else {
                throw new Error("Could not load lualib bundle from ./dist/lualib/lualib_bundle.lua");
            }
        }
        let outPath = path.resolve(rootDir, "lualib_bundle.lua");
        if (outDir !== rootDir) {
            outPath = path.join(outDir, path.relative(rootDir, outPath));
        }
        files.push({ name: normalizeSlashes(outPath), text: lualibContent });
    }
    return files;
}
exports.emitTranspiledFiles = emitTranspiledFiles;
//# sourceMappingURL=Emit.js.map