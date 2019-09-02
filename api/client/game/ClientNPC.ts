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
}