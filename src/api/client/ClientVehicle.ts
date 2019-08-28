/** @noSelfInFile */

class ClientVehicle {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
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
}