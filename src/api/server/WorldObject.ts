/** @noSelfInFile */

import { SetObjectDimension, GetObjectDimension, DestroyVehicle, IsValidVehicle } from "../../definition/Server";

export default class WorldObject {
    constructor(private id: number){}
    
    public setDimension(dimensionId: number): void {
        SetObjectDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetObjectDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyVehicle(this.id);
    }
    public isValid(): boolean {
        return IsValidVehicle(this.id);
    }
}