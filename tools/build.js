const exec = require('child_process').exec;
const fs = require('fs');
const luamin = require('luamin');
let minify = false;
if(process.argv.length===3){
    minify = process.argv[2]==='prod';
}
let blacklist = [];
if(!minify){
    blacklist.push([/--\[\[[A-Za-z0-9 :/.]*\]\]/gm,'']);
    blacklist.push([/--[A-Za-z0-9 ]*[\n]/gm,'']);
    blacklist.push([/^\s*$(?:\r\n?|\n)/gm,'']);
}
function minimize(code){
    for(let item of blacklist){
        code = code.replace(item[0], item[1]!==undefined?item[1]:'');
    }
    if(minify){
        code = luamin.minify(code);
    }
    return code;
}
const build = (callback) => exec('npx tstl -p tsconfig.json',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
             console.log(error);
        }
        callback();
    }
);
function combineFiles(input) {
    let result = '';
    for(let fn of input){
        result += fs.readFileSync(fn, 'utf8') + "\n";
    }
    return result;
}
function deleteFiles(input) {
    for(let fn of input){
        fs.unlinkSync(fn);
    }
}
function deleteFile(file) {
    if(!fs.existsSync(file)){
        return;
    }
    if(fs.lstatSync(file).isDirectory()){
        for(let sub of fs.readdirSync(file)){
            deleteFile(file + '/' + sub);
        }
        fs.rmdirSync(file);
    }else{
        fs.unlinkSync(file);
    }
}
function findLuaFiles(file, files = []){
    if(!fs.existsSync(file)){
        return files;
    }
    if(fs.lstatSync(file).isDirectory()){
        for(let sub of fs.readdirSync(file)){
            files = findLuaFiles(file + '/' + sub, files);
        }
    }else{
        if(file.endsWith('.lua')){
            files.push(file);
        }
    }
    return files;
}

function combineSubModule(moduleFolder){
    let isLib = true;
    let moduleFiles = findLuaFiles(moduleFolder).filter(value => {
        if(value === moduleFolder + '/init.lua'){
            isLib = false;
            return false;
        }
        return true;
    });
    if(!isLib){
        moduleFiles.push(moduleFolder + '/init.lua');
    }
    let result = combineFiles(moduleFiles);
    deleteFiles(moduleFiles);
    return result;
}

function combineSub(sourceFolder){
    let result = {};
    if(!fs.existsSync(sourceFolder)){
        return result;
    }
    if(fs.existsSync(sourceFolder + '/client')){
        result['client'] = combineSubModule(sourceFolder + '/client');
    }
    if(fs.existsSync(sourceFolder + '/server')){
        result['server'] = combineSubModule(sourceFolder + '/server');
    }
    if(fs.existsSync(sourceFolder + '/common')){
        result['common'] = combineSubModule(sourceFolder + '/common');
    }
    return result;
}

function combineBuild(subs, targetFolder){
    if(!fs.existsSync(targetFolder)){
        fs.mkdirSync(targetFolder);
    }
    let results = {client: '', server: '', common: ''};
    for(let sub of subs){
        let subResult = combineSub(sub);
        for(let module of Object.keys(results)){
            if(subResult.hasOwnProperty(module)){
                results[module] += subResult[module] + "\n";
            }
        }
    }
    //Minimize the code
    for(let module of Object.keys(results)){
        results[module] = minimize(results[module]);
    }
    if(!fs.existsSync(targetFolder + '/client')){
        fs.mkdirSync(targetFolder + '/client');
    }
    if(!fs.existsSync(targetFolder + '/server')){
        fs.mkdirSync(targetFolder + '/server');
    }
    fs.writeFileSync(targetFolder + '/client/client.lua', results.common + results.client, 'utf8');
    fs.writeFileSync(targetFolder + '/server/server.lua', results.common + results.server, 'utf8');
}

build(() => {
    let subs = ['api'];
    if(fs.existsSync('lib')){
        for(let fn of fs.readdirSync('lib')){
            subs.push('lib/'+fn);
        }
    }
    subs.push('src');
    combineBuild(subs, 'target');
});