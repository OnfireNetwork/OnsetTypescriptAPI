/** @noSelfInFile */

class ClientWorldObject {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public getModel(): number {
        return GetObjectModel(this.id);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetObjectLocation(this.id));
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetObjectRotation(this.id));
    }
    public getScale(): Vector3d {
        return Vector3d.fromTuple(GetObjectScale(this.id));
    }
    public getBoundingBox(): BoundingBox {
        let raw = GetObjectBoundingBox(this.id);
        return new BoundingBox(new Vector3d(raw[0], raw[1], raw[2]), new Vector3d(raw[3], raw[4], raw[5]));
    }
    public getSize(): Vector3d {
        return Vector3d.fromTuple(GetObjectSize(this.id));
    }
    public setHitEventsEnabled(enabled?: boolean): void {
        EnableObjectHitEvents(this.id, enabled);
    }
    public getMass(): number {
        return GetObjectMass(this.id);
    }
    public setEditable(editable: boolean): void {
        SetObjectEditable(this.id, editable);
    }
    public setOutline(outline?: boolean): void {
        SetObjectOutline(this.id, outline);
    }
    public setShadow(shadow: boolean): void {
        SetObjectCastShadow(this.id, shadow);
    }
}