/** @noSelfInFile */

namespace Client {
    /*
    Unimplemented due to missing docs:
    GetNetworkStats
    */
    export var event: EventBus|undefined;
    export function init(){
        event = new EventBus();
        event.addBridge(new DefaultClientEventBridge());
    }
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
    export function call(event: string, ...values: any[]): void {
        switch(values.length){
            case 0:
                CallEvent(event);
                break;
            case 1:
                CallEvent(event, values[0]);
                break;
            case 2:
                CallEvent(event, values[0], values[1]);
                break;
            case 3:
                CallEvent(event, values[0], values[1], values[2]);
                break;
            case 4:
                CallEvent(event, values[0], values[1], values[2], values[3]);
                break;
            case 5:
                CallEvent(event, values[0], values[1], values[2], values[3], values[4]);
                break;
            case 6:
                CallEvent(event, values[0], values[1], values[2], values[3], values[4], values[5]);
                break;
            case 7:
                CallEvent(event, values[0], values[1], values[2], values[3], values[4], values[5], values[6]);
                break;
            default:
                CallEvent(event, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7]);
                break;
        }
    }
    export function callRemote(event: string, ...values: any[]): void {
        switch(values.length){
            case 0:
                CallRemoteEvent(event);
                break;
            case 1:
                CallRemoteEvent(event, values[0]);
                break;
            case 2:
                CallRemoteEvent(event, values[0], values[1]);
                break;
            case 3:
                CallRemoteEvent(event, values[0], values[1], values[2]);
                break;
            case 4:
                CallRemoteEvent(event, values[0], values[1], values[2], values[3]);
                break;
            case 5:
                CallRemoteEvent(event, values[0], values[1], values[2], values[3], values[4]);
                break;
            case 6:
                CallRemoteEvent(event, values[0], values[1], values[2], values[3], values[4], values[5]);
                break;
            case 7:
                CallRemoteEvent(event, values[0], values[1], values[2], values[3], values[4], values[5], values[6]);
                break;
            default:
                CallRemoteEvent(event, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7]);
                break;
        }
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