/** @noSelfInFile */

class Vehicle implements ISticky {
    constructor(private id: number) { }
    public setDimension(dimensionId: number): void {
        SetVehicleDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetVehicleDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public getType(): number {
        return -1; //TODO
    }
    public destroy(): void {
        DestroyVehicle(this.id);
    }
    public isValid(): boolean {
        return IsValidVehicle(this.id);
    }
    public getDriver(): Player {
        return new Player(GetVehicleDriver(this.id));
    }
    public getPassenger(seat: number): Player {
        return new Player(GetVehiclePassenger(this.id, seat));
    }
    public getNumberOfSeats(): number {
        return GetVehicleNumberOfSeats(this.id);
    }
    public getModel(): number {
        return GetVehicleModel(this.id);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleLocation(this.id));
    }
    public setLocation(x: number, y: number, z: number) {
        SetVehicleLocation(this.id, x, y, z);
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleRotation(this.id));
    }
    public setRotation(rx: number, ry: number, rz: number): void {
        SetVehicleRotation(this.id, rx, ry, rz);
    }
    public getHeading(): number {
        return GetVehicleHeading(this.id);
    }
    public setHeading(heading: number): void {
        SetVehicleHeading(this.id, heading);
    }
    public getHealth(): number {
        return GetVehicleHealth(this.id);
    }
    public setHealth(health: number): void {
        SetVehicleHealth(this.id, health);
    }
    public setLicensePlate(license: string) {
        SetVehicleLicensePlate(this.id, license);
    }
    public getPassgener(seat: number): Player {
        return new Player(GetVehiclePassenger(this.id, seat));
    }
    public getColor(): Color {
        return Color.fromHex(GetVehicleColor(this.id));
    }
    public setColor(color: Color): void {
        SetVehicleColor(this.id, color.toHex());
    }
    public getInteriorColor(): Color {
        return Color.fromHex(GetVehicleInteriorColor(this.id));
    }
    public setLinearVelocity(velocity: Vector3d): void {
        SetVehicleLinearVelocity(this.id, velocity.x, velocity.y, velocity.z);
    }
    public setAngularVelocity(velocity: Vector3d): void {
        SetVehicleAngularVelocity(this.id, velocity.x, velocity.y, velocity.z);
    }
    public getGear(): number {
        return GetVehicleGear(this.id);
    }
    public setHookRatio(ratio: number): void {
        SetVehicleHoodRatio(this.id, ratio);
    }
    public getHookRatio(): number {
        return GetVehicleHoodRatio(this.id);
    }
    public setTrunkRatio(ratio: number): void {
        SetVehicleTrunkRatio(this.id, ratio);
    }
    public getTrunkRation(): number {
        return GetVehicleTrunkRatio(this.id);
    }
    public startEngine(): void {
        StartVehicleEngine(this.id);
    }
    public stopEngine(): void {
        StopVehicleEngine(this.id);
    }
    public isEngineRunning(): boolean {
        return GetVehicleEngineState(this.id);
    }
    public getDamage(damageIndex: number): number {
        return GetVehicleDamage(this.id, damageIndex);
    }
    public setDamage(damage: number, damageIndex: number): void {
        SetVehicleDamage(this.id, damageIndex, damage);
    }
    public attachNitro(attach?: boolean): void {
        AttachVehicleNitro(this.id, attach);
    }
    public setLightEnabled(enabled: boolean) {
        SetVehicleLightEnabled(this.id, enabled);
    }
    public isLightEnabled(): boolean {
        return GetVehicleLightState(this.id);
    }
    public getLightColor(): Color {
        return Color.fromHex(GetVehicleLightColor(this.id));
    }
    public getProperty(name: string): any {
        return GetVehiclePropertyValue(this.id, name);
    }
    public setProperty(name: string, value: any, sync?: boolean) {
        if (sync !== undefined) {
            SetVehiclePropertyValue(this.id, name, value, sync);
        } else {
            SetVehiclePropertyValue(this.id, name, value);
        }
    }
}