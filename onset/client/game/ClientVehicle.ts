/** @noSelfInFile */

class ClientVehicle {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getModel(): number {
        return GetVehicleModel(this.id);
    }
    public getSpeed(): number {
        return GetVehicleForwardSpeed(this.id);
    }
    public getGear(): number {
        return GetVehicleGear(this.id);
    }
    public getRPM(): number {
        return GetVehicleEngineRPM(this.id);
    }
    public getHealth(): number {
        return GetVehicleHealth(this.id);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleLocation(this.id));
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleRotation(this.id));
    }
    public getVelocity(): Vector3d {
        return Vector3d.fromTuple(GetVehicleVelocity(this.id));
    }
    public getBoundingBox(): BoundingBox {
        let raw = GetVehicleBoundingBox(this.id);
        return new BoundingBox(new Vector3d(raw[0], raw[1], raw[2]), new Vector3d(raw[3], raw[4], raw[5]));
    }
    public getDoorLocation(door: number): boolean {
        return GetVehicleDoorLocation(this.id, door);
    }
    public getUpVector(): Vector3d {
        return Vector3d.fromTuple(GetVehicleUpVector(this.id));
    }
    public getRightVector(): Vector3d {
        return Vector3d.fromTuple(GetVehicleRightVector(this.id));
    }
    public getForwardVector(): Vector3d {
        return Vector3d.fromTuple(GetVehicleForwardVector(this.id));
    }
    public isSeatOccupied(seat: number): boolean {
        return IsVehicleSeatOccupied(this.id, seat);
    }
    public isInWater(): boolean {
        return IsVehicleInWater(this.id);
    }
    public isInAir(): boolean {
        return IsVehicleInAir(this.id);
    }
    public isEngineRunning(): boolean {
        return GetVehicleEngineState(this.id);
    }
    public isLightEnabled(): boolean {
        return GetVehicleLightState(this.id);
    }
    public getHoodRatio(): number {
        return GetVehicleHoodRatio(this.id);
    }
    public getTrunkRatio(): number {
        return GetVehicleTrunkRatio(this.id);
    }
    public isHornActive(): boolean {
        return IsVehicleHornActive(this.id);
    }
    public getWheelAngle(wheel: number): number {
        return GetVehicleWheelSteerAngle(this.id, wheel);
    }
    public isWheelInAir(wheel: number): boolean {
        return IsVehicleWheelInAir(this.id, wheel);
    }
    public getWheelSurface(wheel: number): string {
        return GetVehicleWheelSurface(this.id, wheel);
    }
    public getProperty(name: string): any {
        return GetVehiclePropertyValue(this.id, name);
    }
    public setProperty(name: string, value: any) {
        SetVehiclePropertyValue(this.id, name, value);
    }
}