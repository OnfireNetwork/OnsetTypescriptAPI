/** @noSelfInFile */

class ClientNPC {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetNPCLocation(this.id));
    }
    public setOutline(outline?: boolean): void {
        SetNPCOutline(this.id, outline);
    }
    public getProperty(name: string): any|undefined {
        return GetNPCPropertyValue(this.id, name);
    }
    public setProperty(name: string, value: any) {
        SetNPCPropertyValue(this.id, name, value);
    }
}