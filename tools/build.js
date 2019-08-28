const exec = require('child_process').exec;
const fs = require('fs');

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

function combineFiles(output, input) {
    let result = '';
    for(let fn of input){
        result += fs.readFileSync(fn, 'utf8').replace('--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]','') + "\n";
    }
    fs.writeFileSync(output, result, 'utf8');
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

function combineSubModule(moduleFolder, targetFile){
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
    combineFiles(targetFile, moduleFiles);
    deleteFiles(moduleFiles);
}

function combineSub(sourceFolder, targetFolder){
    if(!fs.existsSync(sourceFolder)){
        return;
    }
    if(!fs.existsSync(targetFolder)){
        fs.mkdirSync(targetFolder);
    }
    if(fs.existsSync(sourceFolder + '/client')){
        combineSubModule(sourceFolder + '/client', targetFolder + '/client.lua');
    }
    if(fs.existsSync(sourceFolder + '/server')){
        combineSubModule(sourceFolder + '/server', targetFolder + '/server.lua');
    }
    if(fs.existsSync(sourceFolder + '/common')){
        combineSubModule(sourceFolder + '/common', targetFolder + '/common.lua');
    }
}

function combineBuild(buildFolder, subs, targetFolder){
    if(!fs.existsSync(buildFolder)){
        return;
    }
    if(!fs.existsSync(targetFolder)){
        fs.mkdirSync(targetFolder);
    }
    let results = {client: '', server: '', common: ''};
    for(let sub of subs){
        for(let module of Object.keys(results)){
            let fn = buildFolder + '/' + sub + '/' + module + '.lua';
            if(fs.existsSync(fn)){
                results[module] += fs.readFileSync(fn) + "\n";
            }
        }
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
    deleteFile('build');
    fs.mkdirSync('build');
    let subs = ['api', 'lib', 'src'];
    for(let sub of subs){
        combineSub(sub, 'build/'+sub);
    }
    combineBuild('build', subs, 'target');
    deleteFile('build');
});