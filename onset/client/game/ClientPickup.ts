/** @noSelfInFile */

class ClientPickup {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetPickupLocation(this.id));
    }
    public getProperty(name: string): any|undefined {
        return GetPickupPropertyValue(this.id, name);
    }
    public setProperty(name: string, value: any) {
        SetPickupPropertyValue(this.id, name, value);
    }
}