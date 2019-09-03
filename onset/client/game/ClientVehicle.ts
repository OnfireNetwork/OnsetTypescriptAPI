/** @noSelfInFile */

class ClientVehicle {
    /*
    Not implemented due to unclear docs:
    GetVehicleWheelSurface
    GetVehicleBoundingBox
    */
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

}