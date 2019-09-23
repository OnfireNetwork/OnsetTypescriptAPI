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
        let players = this.getRemotePlayers();
        players.push(this.getLocalPlayer());
        return players;
    }
    public getPlayersInBox(location: Vector3d, size: Vector3d): ClientPlayer[] {
        return GetAllPlayersInBox(location.x, location.y, location.z, size.x, size.y, size.z, true).map(id => this.getPlayer(id));
    }
    public getPlayersInSphere(location: Vector3d, radius: number): ClientPlayer[] {
        return GetAllPlayersInSphere(location.x, location.y, location.z, radius, true).map(id => this.getPlayer(id));
    }
    public getRemotePlayers(): ClientPlayer[] {
        return GetStreamedPlayers().map(id => this.getPlayer(id));
    }
    public getRemotePlayersInBox(location: Vector3d, size: Vector3d): ClientPlayer[] {
        return GetAllPlayersInBox(location.x, location.y, location.z, size.x, size.y, size.z, false).map(id => this.getPlayer(id));
    }
    public getRemotePlayersInSphere(location: Vector3d, radius: number): ClientPlayer[] {
        return GetAllPlayersInSphere(location.x, location.y, location.z, radius, false).map(id => this.getPlayer(id));
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
    public get3DTexts(): ClientText3D[] {
        return GetStreamedText3D().map(id => this.get3DText(id));
    }
    public get3DText(id: number): ClientText3D {
        return new ClientText3D(id);
    }
    public getCollisionAreas(): ClientCollisionArea[] {
        return GetAllCollisions().map(id => this.getCollisionArea(id));
    }
    public getCollisionArea(id: number): ClientCollisionArea {
        return new ClientCollisionArea(id);
    }
    public createCollisionBox(position: Vector3d, size: Vector3d, visible?: boolean): ClientCollisionArea {
        if(visible !== undefined){
            return this.getCollisionArea(CreateCollisionBox(position.x, position.y, position.z, size.x, size.y, size.z, visible));
        }else{
            return this.getCollisionArea(CreateCollisionBox(position.x, position.y, position.z, size.x, size.y, size.z));
        }
    }
    public createCollisionSphere(position: Vector3d, radius: number, visible?: boolean): ClientCollisionArea {
        if(visible !== undefined){
            return this.getCollisionArea(CreateCollisionSphere(position.x, position.y, position.z, radius, visible));
        }else{
            return this.getCollisionArea(CreateCollisionSphere(position.x, position.y, position.z, radius));
        }
    }
    public setTime(time: number): void {
        SetTime(time);
    }
    public getTime(): number {
        return GetTime();
    }
    public setWeather(weather: number): void {
        SetWeather(weather);
    }
    public setWaypoint(slot: number, name: string, location: Vector3d): void {
        SetWaypoint(slot, name, location.x, location.y, location.z);
    }
    public traceLine(start: Vector3d, end: Vector3d, complex?: boolean): LineTraceResult {
        let tr: [number, number, number, number, number, number]|false;
        if(complex !== undefined){
            tr = LineTrace(start.x, start.y, start.z, end.x, end.y, end.z, complex);
        }else{
            tr = LineTrace(start.x, start.y, start.z, end.x, end.y, end.z);
        }
        if(tr === false){
            return new LineTraceResult();
        }else{
            return new LineTraceResult(new Vector3d(tr[0], tr[1], tr[2]), new Vector3d(tr[3], tr[4], tr[5]));
        }
    }
    public getHeightAt(location: Vector2d, startHeight?: number): number {
        if(startHeight === undefined){
            startHeight = 100000;
        }
        return GetTerrainHeight(location.x, location.y, startHeight);
    }
    public setWaterLevel(level: number, includeSwimmingLevel?: boolean): void {
        if(includeSwimmingLevel !== undefined){
            SetOceanWaterLevel(level, includeSwimmingLevel);
        }else{
            SetOceanWaterLevel(level);
        }
    }
}