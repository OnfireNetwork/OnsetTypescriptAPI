/** @noSelfInFile */

class Pickup {
    constructor(private id: number) { }
    public setScale(scale: Vector3d): void {
        SetPickupScale(this.id, scale.x, scale.y, scale.z);
    }
    public getScale(): Vector3d {
        return Vector3d.fromTuple(GetPickupScale(this.id));
    }
    public setDimension(dimensionId: number): void {
        SetPickupDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetPickupDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyPickup(this.id);
    }
    public isValid(): boolean {
        return IsValidPickup(this.id);
    }
}