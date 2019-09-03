/** @noSelfInFile */

class ClientWorldManager {
    public getLights(): ClientLight[] {
        return GetStreamedLights().map(id => this.getLight(id));
    }
    public getLight(id: number): ClientLight {
        return new ClientLight(id);
    }
    public getPickups(): ClientPickup[] {
        return GetStreamedPickups().map(id => this.getPickup(id));
    }
    public getPickup(id: number): ClientPickup {
        return new ClientPickup(id);
    }
    public getPlayers(): ClientPlayer[] {
        return GetStreamedPlayers().map(id => this.getPlayer(id));
    }
    public getPlayer(id: number): ClientPlayer {
        return new ClientPlayer(id);
    }
    public getLocalPlayer(): ClientPlayer {
        return this.getPlayer(GetPlayerId());
    }
    public getVehicles(): ClientVehicle[] {
        return GetStreamedVehicles().map(id => this.getVehicle(id));
    }
    public getVehicle(id: number): ClientVehicle {
        return new ClientVehicle(id);
    }
    public getObjects(): ClientWorldObject[] {
        return GetStreamedObjects().map(id => this.getObject(id));
    }
    public getObject(id: number): ClientWorldObject {
        return new ClientWorldObject(id);
    }
    public getNPCs(): ClientNPC[] {
        return GetStreamedNPC().map(id => this.getNPC(id));
    }
    public getNPC(id: number): ClientNPC {
        return new ClientNPC(id);
    }
    public get3DTexts(): Client3DText[] {
        return GetStreamedText3D().map(id => this.get3DText(id));
    }
    public get3DText(id: number): Client3DText {
        return new Client3DText(id);
    }
    public getCollisionAreas(): ClientCollisionArea[] {
        return GetAllCollisions().map(id => this.getCollisionArea(id));
    }
    public getCollisionArea(id: number): ClientCollisionArea {
        return new ClientCollisionArea(id);
    }
    public createCollisionBox(position: Vector3d, size: Vector3d, visible?: boolean): ClientCollisionArea {
        return this.getCollisionArea(CreateCollisionBox(position.x, position.y, position.z, size.x, size.y, size.z, visible));
    }
    public createCollisionSphere(position: Vector3d, radius: number, visible?: boolean): ClientCollisionArea {
        return this.getCollisionArea(CreateCollisionSphere(position.x, position.y, position.z, radius, visible));
    }
    public setTime(time: number): void {
        SetTime(time);
    }
    public setWeather(weather: number): void {
        SetWeather(weather);
    }
    public setWaypoint(slot: number, name: string, location: Vector3d): void {
        SetWaypoint(slot, name, location.x, location.y, location.z);
    }
}