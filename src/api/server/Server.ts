/** @noSelfInFile */

class Server {
    static getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    static getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    static getTickCount(): number {
        return GetTickCount();
    }
    static getGameVersion(): number {
        return GetGameVersion();
    }
    static getGameVersionString(): string {
        return GetGameVersionString();
    }
    static getTickRate(): number {
        return GetServerTickRate();
    }
    static setName(name: string): void {
        SetServerName(name);
    }
    static getName(): string {
        return GetServerName();
    }
    static getMaxPlayers(): number {
        return GetMaxPlayers();
    }
    static createExplosion(explosionId: number, location: Vector3d, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void {
        CreateExplosion(explosionId, location.x, location.y, location.z, soundExplosion, camShakeRadius, radialForce);
    }
    static getTimers(): Timer[] {
        let raw = GetAllTimers();
        let result: Timer[] = [];
        for (let id of raw) {
            result.push(this.getTimer(id));
        }
        return result;
    }
    static getTimer(id: number): Timer {
        return new Timer(id);
    }
    static getPlayers(): Player[] {
        let raw = GetAllPlayers();
        let result: Player[] = [];
        for (let id of raw) {
            result.push(this.getPlayer(id));
        }
        return result;
    }
    static getPlayer(id: number): Player {
        return new Player(id);
    }
    static getLights(): Light[] {
        let raw = GetAllLights();
        let result: Light[] = [];
        for (let id of raw) {
            result.push(this.getLight(id));
        }
        return result;
    }
    static getLight(id: number): Light {
        return new Light(id);
    }
    static getPickups(): Pickup[] {
        let raw = GetAllPickups();
        let result: Pickup[] = [];
        for (let id of raw) {
            result.push(this.getPickup(id));
        }
        return result;
    }
    static getPickup(id: number): Pickup {
        return new Pickup(id);
    }
    static get3DTexts(): Text3D[] {
        let raw = GetAllText3D();
        let result: Text3D[] = [];
        for (let id of raw) {
            result.push(this.get3DText(id));
        }
        return result;
    }
    static get3DText(id: number): Text3D {
        return new Text3D(id);
    }
    static getVehicles(): Vehicle[] {
        let raw = GetAllVehicles();
        let result: Vehicle[] = [];
        for (let id of raw) {
            result.push(this.getVehicle(id));
        }
        return result;
    }
    static getVehicle(id: number): Vehicle {
        return new Vehicle(id);
    }
    static getObject(id: number): Object {
        return new Object(id);
    }
    static getNPCs(): NPC[] {
        let raw = GetAllNPC();
        let result: NPC[] = [];
        for (let id of raw) {
            result.push(this.getNPC(id));
        }
        return result;
    }
    static getNPC(id: number): NPC {
        return new NPC(id);
    }
    static exit(): void {
        ServerExit();
    }
}

AddFunctionExport("Server", () => Server);