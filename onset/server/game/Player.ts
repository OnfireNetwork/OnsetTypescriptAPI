/** @noSelfInFile */

class Player implements ISticky {
    constructor(private id: number) { }
    public setName(name: string): void {
        SetPlayerName(this.id, name);
    }
    public getName(): string {
        return GetPlayerName(this.id);
    }
    public set name(name: string) {
        this.setName(name);
    }
    public get name(): string {
        return this.getName();
    }
    public getSteamId(): string {
        return GetPlayerSteamId(this.id).toString();
    }
    public setVoiceEnabled(enabled: boolean): void {
        SetPlayerVoiceEnabled(this.id, enabled);
    }
    public isVoiceEnabled(): boolean {
        return IsPlayerVoiceEnabled(this.id);
    }
    public isTalking(): boolean {
        return IsPlayerTalking(this.id);
    }
    public sendMessage(message: string): void {
        AddPlayerChat(this.id, message);
    }
    public getMovementSpeed(): number {
        return GetPlayerMovementSpeed(this.id);
    }
    public isAiming(): boolean {
        return IsPlayerAiming(this.id);
    }
    public isReloading(): boolean {
        return IsPlayerReloading(this.id);
    }
    public setSpawnLocation(location: Vector3d, heading: number): void {
        SetPlayerSpawnLocation(this.id, location.x, location.y, location.z, heading);
    }
    public isStreamedIn(player: Player): boolean {
        return IsPlayerStreamedIn(this.id, player.id);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetPlayerLocation(this.id));
    }
    public setLocation(location: Vector3d): void {
        SetPlayerLocation(this.id, location.x, location.y, location.z);
    }
    public setHeading(heading: number): void {
        SetPlayerHeading(this.id, heading);
    }
    public getHeading(): number {
        return GetPlayerHeading(this.id);
    }
    public setSpectator(spectator: boolean): void {
        SetPlayerSpectate(this.id, spectator);
    }
    public resetCamera(): void {
        ResetPlayerCamera(this.id);
    }
    public isDead(): boolean {
        return IsPlayerDead(this.id);
    }
    public getHealth(): number {
        return GetPlayerHealth(this.id);
    }
    public setHealth(health: number): void {
        SetPlayerHealth(this.id, health);
    }
    public getArmor(): number {
        return GetPlayerArmor(this.id);
    }
    public setArmor(armor: number): void {
        SetPlayerArmor(this.id, armor);
    }
    public setModel(modelId: number): void {
        SetPlayerModel(this.id, modelId);
    }
    public getModel(): number {
        return GetPlayerModel(this.id);
    }
    public setRespawnTime(respawnTime: number): void {
        SetPlayerRespawnTime(this.id, respawnTime);
    }
    public getRespawnTime(): number {
        return GetPlayerRespawnTime(this.id);
    }
    public setAnimation(animationId: number): void {
        SetPlayerAnimation(this.id, animationId);
    }
    public setParachute(attach: boolean): void {
        AttachPlayerParachute(this.id, attach);
    }
    public setHeadSize(size: number): void {
        SetPlayerHeadSize(this.id, size);
    }
    public getHeadSize(): number {
        return GetPlayerHeadSize(this.id);
    }
    public getVehicle(): Vehicle {
        return new Vehicle(GetPlayerVehicle(this.id));
    }
    public getVehicleSeat(): number {
        return GetPlayerVehicleSeat(this.id);
    }
    public enterVehicle(vehicle: Vehicle, seat?: number): void {
        if(seat !== undefined){
            SetPlayerInVehicle(this.id, vehicle.getId(), seat);
        }else{
            SetPlayerInVehicle(this.id, vehicle.getId());
        }
    }
    public exitVehicle(): void {
        RemovePlayerFromVehicle(this.id);
    }
    public setWeaponStat(weaponId: number, stat: string, value: number): void {
        SetPlayerWeaponStat(this.id, weaponId, stat, value);
    }
    public getEquippedSlot(): number {
        return GetPlayerEquippedWeaponSlot(this.id);
    }
    public setEquippedSlot(slot: number): void {
        EquipPlayerWeaponSlot(this.id, slot);
    }
    public kick(reason: string): void {
        KickPlayer(this.id, reason);
    }
    public getAddress(): string {
        return GetPlayerIP(this.id);
    }
    public getPing(): number {
        return GetPlayerPing(this.id);
    }
    public getGUID(): string {
        return GetPlayerGUID(this.id);
    }
    public getGameVersion(): number {
        return GetPlayerGameVersion(this.id);
    }
    public getLocale(): string {
        return GetPlayerLocale(this.id);
    }
    public setDimension(dimensionId: number): void {
        SetPlayerDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetPlayerDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public getType(): number {
        return -1; //TODO
    }
    public isValid(): boolean {
        return IsValidPlayer(this.id);
    }
    public setWeapon(slot: number, weaponId: number, ammo: number, equip?: boolean): boolean {
        return SetPlayerWeapon(this.id, weaponId, ammo, equip!==undefined?equip:false, slot);
    }
    public getState(): PlayerState {
        return GetPlayerState(this.id);
    }
    public getProperty(name: string): string|undefined {
        let value = GetPlayerPropertyValue(this.id, name);
        if(typeof value === 'string'){
            return value;
        }
    }
    public getPropertyNumber(name: string): number|undefined {
        let value = GetPlayerPropertyValue(this.id, name);
        if(typeof value === 'number'){
            return value;
        }
    }
    public getPropertyBoolean(name: string): boolean|undefined {
        let value = GetPlayerPropertyValue(this.id, name);
        if(typeof value === 'boolean'){
            return value;
        }
    }
    public setProperty(name: string, value: string|number|boolean): void {
        SetPlayerPropertyValue(this.id, name, value);
    }
}