/** @noSelfInFile */

class ClientText3D {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetText3DLocation(this.id));
    }
    public getProperty(name: string): any|undefined {
        return GetText3DPropertyValue(this.id, name);
    }
    public setProperty(name: string, value: any) {
        SetText3DPropertyValue(this.id, name, value);
    }
}