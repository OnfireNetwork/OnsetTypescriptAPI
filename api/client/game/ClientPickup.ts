/** @noSelfInFile */

class ClientPickup {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetPickupLocation(this.id));
    }
}