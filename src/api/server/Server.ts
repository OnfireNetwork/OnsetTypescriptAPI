/** @noSelfInFile */

class Server {
    getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    getTickCount(): number {
        return GetTickCount();
    }
    getGameVersion(): number {
        return GetGameVersion();
    }
    getGameVersionString(): string {
        return GetGameVersionString();
    }
    getTickRate(): number {
        return GetServerTickRate();
    }
    setName(name: string): void {
        SetServerName(name);
    }
    getName(): string {
        return GetServerName();
    }
    getMaxPlayers(): number {
        return GetMaxPlayers();
    }
    createExplosion(explosionId: number, location: Vector3d, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void {
        CreateExplosion(explosionId, location.x, location.y, location.z, soundExplosion, camShakeRadius, radialForce);
    }
    getTimers(): Timer[] {
        let raw = GetAllTimers();
        let result: Timer[] = [];
        for (let id of raw) {
            result.push(this.getTimer(id));
        }
        return result;
    }
    getTimer(id: number): Timer {
        return new Timer(id);
    }
    createTimer(task: Function, interval: number, ...args: any[]): Timer {
        return this.getTimer(CreateTimer(task, interval, args));
    }
    createCountTimer(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return this.getTimer(CreateCountTimer(task, interval, count, args));
    }
    getPlayers(): Player[] {
        let raw = GetAllPlayers();
        let result: Player[] = [];
        for (let id of raw) {
            result.push(this.getPlayer(id));
        }
        return result;
    }
    getPlayer(id: number): Player {
        return new Player(id);
    }
    getLights(): Light[] {
        let raw = GetAllLights();
        let result: Light[] = [];
        for (let id of raw) {
            result.push(this.getLight(id));
        }
        return result;
    }
    getLight(id: number): Light {
        return new Light(id);
    }
    createLight(lightType: number, intensity: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): Light {
        return this.getLight(CreateLight(lightType, intensity, x, y, z, rx, ry, rz));
    }
    getPickups(): Pickup[] {
        let raw = GetAllPickups();
        let result: Pickup[] = [];
        for (let id of raw) {
            result.push(this.getPickup(id));
        }
        return result;
    }
    getPickup(id: number): Pickup {
        return new Pickup(id);
    }
    get3DTexts(): Text3D[] {
        let raw = GetAllText3D();
        let result: Text3D[] = [];
        for (let id of raw) {
            result.push(this.get3DText(id));
        }
        return result;
    }
    get3DText(id: number): Text3D {
        return new Text3D(id);
    }
    getVehicles(): Vehicle[] {
        let raw = GetAllVehicles();
        let result: Vehicle[] = [];
        for (let id of raw) {
            result.push(this.getVehicle(id));
        }
        return result;
    }
    getVehicle(id: number): Vehicle {
        return new Vehicle(id);
    }
    getObject(id: number): Object {
        return new Object(id);
    }
    getNPCs(): NPC[] {
        let raw = GetAllNPC();
        let result: NPC[] = [];
        for (let id of raw) {
            result.push(this.getNPC(id));
        }
        return result;
    }
    getNPC(id: number): NPC {
        return new NPC(id);
    }
    createNPC(modelId: number, location: Vector3d, h: number): NPC {
        return this.getNPC(CreateNPC(modelId, location.x, location.y, location.z, h));
    }
    exit(): void {
        ServerExit();
    }
}