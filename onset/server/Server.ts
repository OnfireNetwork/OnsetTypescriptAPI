/** @noSelfInFile */

namespace Server {
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
    export function call(event: string, ...args: any[]): void {
        CallEvent(event, args);
    }
    export function callRemote(player: Player, event: string, ...args: any[]): void {
        CallRemoteEvent(player.getId(), event, args);
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