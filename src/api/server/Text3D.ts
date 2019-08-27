/** @noSelfInFile */

class Text3D {
    constructor(private id: number) { }
    public attach(holder: ISticky, offset: Vector3d, rotation?: Vector3d, socketName?: string): void {
        if(rotation === undefined){
            SetText3DAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z);
        }else{
            if(socketName === undefined){
                SetText3DAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z, rotation.x, rotation.y, rotation.z);
            }else{
                SetText3DAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z, rotation.x, rotation.y, rotation.z, socketName);
            }
        }
    }
    public setDimension(dimensionId: number): void {
        SetText3DDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetText3DDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyText3D(this.id);
    }
    public isValid(): boolean {
        return IsValidText3D(this.id);
    }
}