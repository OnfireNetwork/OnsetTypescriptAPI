/** @noSelfInFile */

namespace Server {
    export var event: EventBus = new EventBus();
    export function init(){
        event.addBridge(new DefaultServerEventBridge());
    }
    export function getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    export function getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    export function getTickCount(): number {
        return GetTickCount();
    }
    export function getGameVersion(): number {
        return GetGameVersion();
    }
    export function getGameVersionString(): string {
        return GetGameVersionString();
    }
    export function getTickRate(): number {
        return GetServerTickRate();
    }
    export function setName(name: string): void {
        SetServerName(name);
    }
    export function getName(): string {
        return GetServerName();
    }
    export function getMaxPlayers(): number {
        return GetMaxPlayers();
    }
    export function createExplosion(explosionId: number, location: Vector3d, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void {
        CreateExplosion(explosionId, location.x, location.y, location.z, soundExplosion, camShakeRadius, radialForce);
    }
    export function getTimerManager(): TimerManager {
        return new TimerManager();
    }
    export function getWorld(): WorldManager {
        return new WorldManager();
    }
    export function broadcast(message: string): void {
        AddPlayerChatAll(message);
    }
    export function broadcastRange(location: Vector2d, range: number, message: string): void {
        AddPlayerChatRange(location.x, location.y, range, message);
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
    export function callRemote(player: Player, event: string, ...values: any[]): void {
        switch(values.length){
            case 0:
                CallRemoteEvent(player.getId(), event);
                break;
            case 1:
                CallRemoteEvent(player.getId(), event, values[0]);
                break;
            case 2:
                CallRemoteEvent(player.getId(), event, values[0], values[1]);
                break;
            case 3:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2]);
                break;
            case 4:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2], values[3]);
                break;
            case 5:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2], values[3], values[4]);
                break;
            case 6:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2], values[3], values[4], values[5]);
                break;
            case 7:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2], values[3], values[4], values[5], values[6]);
                break;
            default:
                CallRemoteEvent(player.getId(), event, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7]);
                break;
        }
    }
    export function addCommand(name: string, handler: Function): void {
        AddCommand(name, handler);
    }
    export function exit(): void {
        ServerExit();
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
    export function getHelper(): ServerHelper {
        return new ServerHelper();
    }
}