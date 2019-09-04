/** @noSelfInFile */

namespace Client {
    /*
    Unimplemented due to missing docs:
    GetNetworkStats
    */
    export function getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    export function getTickCount(): number {
        return GetTickCount();
    }
    export function getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    export function getGameVersion(): number {
        return GetGameVersion();
    }
    export function print(message: string): void {
        AddPlayerChat(message);
    }
    export function connect(address: string, port: number, password?: string): void {
        ConnectToServer(address, port, password);
    }
    export function getPing(): number {
        return GetPing();
    }
    export function getTimerManager(): TimerManager {
        return new TimerManager();
    }
    export function getSoundManager(): ClientSoundManager {
        return new ClientSoundManager();
    }
    export function getInputManager(): ClientInputManager {
        return new ClientInputManager();
    }
    export function getWorld(): ClientWorldManager {
        return new ClientWorldManager();
    }
    export function getGraphics(): ClientGraphicsManager {
        return new ClientGraphicsManager();
    }
    export function doesPakExist(fileName: string): boolean {
        return DoesPakExist(fileName);
    }
    export function loadPak(fileName: string, rootPath: string, contentPath: string): boolean {
        return LoadPak(fileName, rootPath, contentPath);
    }
    export function replaceModelMesh(modelId: number, path: string): boolean {
        return ReplaceObjectModelMesh(modelId, path);
    }
    export function listen(event: string, handler: Function): void {
        AddEvent(event, handler);
    }
    export function listenRemote(event: string, handler: Function): void {
        AddRemoteEvent(event, handler);
    }
    export function call(event: string, ...args: any[]): void {
        CallEvent(event, args);
    }
    export function callRemote(event: string, ...args: any[]): void {
        CallRemoteEvent(event, args);
    }
    export function exportFunction(name: string, exportFunction: Function): void {
        AddFunctionExport(name, exportFunction);
    }
    export function importPackage<T>(name: string): T {
        return ImportPackage(name);
    }
    export function getPackageName(): string {
        return GetPackageName();
    }
    export function setEditorSpeed(speed: number): void {
        SetObjectEditorSpeed(speed);
    }
    export function isInMenu(): boolean {
        return IsPlayerInMainMenu();
    }
    export function getHelper(): ClientHelper {
        return new ClientHelper();
    }
}