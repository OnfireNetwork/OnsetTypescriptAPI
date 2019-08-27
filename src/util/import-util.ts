/** @noSelfInFile */

declare type LuaEnv = {[key: string]: any};

declare const _ENV: LuaEnv;

function importClass<T extends any>(t: T&Function): () => T {
    return () => _ENV[t] as T;
}

AddFunctionExport("importClass", importClass);

const gettedPlayer = importClass(Player)();
const instance: Player = new gettedPlayer(20);
print(instance.getHealth());