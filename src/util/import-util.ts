/** @noSelfInFile */

declare type LuaEnv = {[key: string]: any};

declare const _ENV: LuaEnv;

function importClass<T extends any>(name: string): () => T {
    return () => _ENV[name] as T;
}

AddFunctionExport("importClass", importClass);

const gettedPlayer = importClass("Player")();
const instance: Player = new gettedPlayer();