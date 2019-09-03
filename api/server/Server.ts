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
    export function getWorldManager(): WorldManager {
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
    export function exit(): void {
        ServerExit();
    }
}