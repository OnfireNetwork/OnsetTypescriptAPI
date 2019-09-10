/** @noSelfInFile */

class ClientPlayer {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public isInVehicle(): boolean {
        return IsPlayerInVehicle(this.id);
    }
    public getVehicle(): ClientVehicle {
        return new ClientVehicle(GetPlayerVehicle(this.id));
    }
    public setOutline(outline?: boolean): void {
        SetPlayerOutline(this.id, outline);
    }
    public getBoneLocation(boneName: string, boneSpace?: number): Vector3d {
        return Vector3d.fromTuple(GetPlayerBoneLocation(this.id, boneName, boneSpace));
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetPlayerLocation(this.id));
    }
    public getHeading(): number {
        return GetPlayerHeading(this.id);
    }
    public isTalking(): boolean {
        return IsPlayerTalking(this.id);
    }
    public getHealth(): number {
        return GetPlayerHealth(this.id);
    }
    public getArmor(): number {
        return GetPlayerArmor(this.id);
    }
    public getMovementMode(): number {
        return GetPlayerMovementMode(this.id);
    }
    public getMovementSpeed(): number {
        return GetPlayerMovementSpeed(this.id);
    }
    public isDead(): boolean {
        return IsPlayerDead(this.id);
    }
    public isAiming(): boolean {
        return IsPlayerAiming(this.id);
    }
    public isReloading(): boolean {
        return IsPlayerReloading(this.id);
    }
    public getWeapon(slot?: number): number {
        return GetPlayerWeapon(this.id, slot);
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
    public static getBoneNames(): string[] {
        return GetPlayerBoneNames();
    }
}