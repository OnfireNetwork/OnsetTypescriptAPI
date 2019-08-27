/** @noSelfInFile */

class Server {
    public static getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    public static getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    public static getTickCount(): number {
        return GetTickCount();
    }
    public static getGameVersion(): number {
        return GetGameVersion();
    }
    public static getGameVersionString(): string {
        return GetGameVersionString();
    }
    public static getTickRate(): number {
        return GetServerTickRate();
    }
    public static setName(name: string): void {
        SetServerName(name);
    }
    public static getName(): string {
        return GetServerName();
    }
    public static getMaxPlayers(): number {
        return GetMaxPlayers();
    }
    public static createExplosion(explosionId: number, location: Vector3d, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void {
        CreateExplosion(explosionId, location.x, location.y, location.z, soundExplosion, camShakeRadius, radialForce);
    }
    public static getTimers(): Timer[] {
        let raw = GetAllTimers();
        let result: Timer[] = [];
        for (let id of raw) {
            result.push(this.getTimer(id));
        }
        return result;
    }
    public static getTimer(id: number): Timer {
        return new Timer(id);
    }
    public static createTimer(task: Function, interval: number, ...args: any[]): Timer {
        return this.getTimer(CreateTimer(task, interval, args));
    }
    public static createCountTimer(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return this.getTimer(CreateCountTimer(task, interval, count, args));
    }
    public static getPlayers(): Player[] {
        let raw = GetAllPlayers();
        let result: Player[] = [];
        for (let id of raw) {
            result.push(this.getPlayer(id));
        }
        return result;
    }
    public static getPlayer(id: number): Player {
        return new Player(id);
    }
    public static getLights(): Light[] {
        let raw = GetAllLights();
        let result: Light[] = [];
        for (let id of raw) {
            result.push(this.getLight(id));
        }
        return result;
    }
    public static getLight(id: number): Light {
        return new Light(id);
    }
    public static createLight(lightType: number, intensity: number, location: Vector3d, rotation?: Vector3d): Light {
        let lightId;
        if(rotation !== undefined){
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z);
        }else{
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z);
        }
        return this.getLight(lightId);
    }
    public static getPickups(): Pickup[] {
        let raw = GetAllPickups();
        let result: Pickup[] = [];
        for (let id of raw) {
            result.push(this.getPickup(id));
        }
        return result;
    }
    public static getPickup(id: number): Pickup {
        return new Pickup(id);
    }
    public static createPickup(modelId: number, location: Vector3d): Pickup {
        return this.getPickup(CreatePickup(modelId, location.x, location.y, location.z));
    }
    public static get3DTexts(): Text3D[] {
        let raw = GetAllText3D();
        let result: Text3D[] = [];
        for (let id of raw) {
            result.push(this.get3DText(id));
        }
        return result;
    }
    public static get3DText(id: number): Text3D {
        return new Text3D(id);
    }
    public static create3DText(text: string, size: number, location: Vector3d, rotation: Vector3d): Text3D {
        return this.get3DText(CreateText3D(text, size, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z));
    }
    public static getVehicles(): Vehicle[] {
        let raw = GetAllVehicles();
        let result: Vehicle[] = [];
        for (let id of raw) {
            result.push(this.getVehicle(id));
        }
        return result;
    }
    public static getVehicle(id: number): Vehicle {
        return new Vehicle(id);
    }
    public static createVehicle(modelId: number, location: Vector3d, heading?: number): Vehicle {
        return this.getVehicle(CreateVehicle(modelId, location.x, location.y, location.z, heading));
    }
    public static getObject(id: number): Object {
        return new Object(id);
    }
    public static getNPCs(): NPC[] {
        let raw = GetAllNPC();
        let result: NPC[] = [];
        for (let id of raw) {
            result.push(this.getNPC(id));
        }
        return result;
    }
    public static getNPC(id: number): NPC {
        return new NPC(id);
    }
    public static createNPC(modelId: number, location: Vector3d, heading: number): NPC {
        return this.getNPC(CreateNPC(modelId, location.x, location.y, location.z, heading));
    }
    public static broadcast(message: string): void {
        AddPlayerChatAll(message);
    }
    public static broadcastRange(location: Vector2d, range: number, message: string): void {
        AddPlayerChatRange(location.x, location.y, range, message);
    }
    public static exit(): void {
        ServerExit();
    }
}