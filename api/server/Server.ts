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
    export function delay(millis: number, task: Function): void {
        Delay(millis, task);
    }
    export function getTimers(): Timer[] {
        return GetAllTimers().map(id => Server.getTimer(id));
    }
    export function getTimer(id: number): Timer {
        return new Timer(id);
    }
    export function createTimer(task: Function, interval: number, ...args: any[]): Timer {
        return Server.getTimer(CreateTimer(task, interval, args));
    }
    export function createCountTimer(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return Server.getTimer(CreateCountTimer(task, interval, count, args));
    }
    export function getPlayers(): Player[] {
        return GetAllPlayers().map(id => Server.getPlayer(id));
    }
    export function getPlayer(id: number): Player {
        return new Player(id);
    }
    export function getLights(): Light[] {
        return GetAllLights().map(id => Server.getLight(id));
    }
    export function getLight(id: number): Light {
        return new Light(id);
    }
    export function createLight(lightType: number, intensity: number, location: Vector3d, rotation?: Vector3d): Light {
        let lightId;
        if (rotation !== undefined) {
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z);
        } else {
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z);
        }
        return Server.getLight(lightId);
    }
    export function getPickups(): Pickup[] {
        return GetAllPickups().map(id => Server.getPickup(id));
    }
    export function getPickup(id: number): Pickup {
        return new Pickup(id);
    }
    export function createPickup(modelId: number, location: Vector3d): Pickup {
        return Server.getPickup(CreatePickup(modelId, location.x, location.y, location.z));
    }
    export function get3DTexts(): Text3D[] {
        return GetAllText3D().map(id => Server.get3DText(id));
    }
    export function get3DText(id: number): Text3D {
        return new Text3D(id);
    }
    export function create3DText(text: string, size: number, location: Vector3d, rotation: Vector3d): Text3D {
        return Server.get3DText(CreateText3D(text, size, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z));
    }
    export function getVehicles(): Vehicle[] {
        return GetAllVehicles().map(id => Server.getVehicle(id));
    }
    export function getVehicle(id: number): Vehicle {
        return new Vehicle(id);
    }
    export function createVehicle(modelId: number, location: Vector3d, heading?: number): Vehicle {
        return Server.getVehicle(CreateVehicle(modelId, location.x, location.y, location.z, heading));
    }
    export function getObject(id: number): Object {
        return new Object(id);
    }
    export function getNPCs(): NPC[] {
        return GetAllNPC().map(id => Server.getNPC(id));
    }
    export function getNPC(id: number): NPC {
        return new NPC(id);
    }
    export function createNPC(modelId: number, location: Vector3d, heading: number): NPC {
        return Server.getNPC(CreateNPC(modelId, location.x, location.y, location.z, heading));
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
    export function getDimension(id: number): Dimension {
        return new Dimension(id);
    }
    export function getDefaultDimension(): Dimension {
        return Dimension.default;
    }
}

Server.getTimeSeconds();