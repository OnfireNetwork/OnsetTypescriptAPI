/** @noSelfInFile */

class WorldObject implements ISticky {
    constructor(private id: number) { }
    public isStreamedIn(player: Player): boolean {
        return IsObjectStreamedIn(player.getId(), this.id);
    }
    public setLocation(location: Vector3d): void {
        SetObjectLocation(this.id, location.x, location.y, location.z);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetObjectLocation(this.id));
    }
    public setRotation(rotation: Vector3d): void {
        SetObjectRotation(this.id, rotation.x, rotation.y, rotation.z);
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetObjectRotation(this.id));
    }
    public setScale(scale: Vector3d): void {
        SetObjectScale(this.id, scale.x, scale.y, scale.z);
    }
    public getScale(): Vector3d {
        return Vector3d.fromTuple(GetObjectScale(this.id));
    }
    public isMoving(): boolean {
        return IsObjectMoving(this.id);
    }
    public stopMoving(): void {
        StopObjectMove(this.id);
    }
    public moveTo(location: Vector3d, speed: number): void {
        SetObjectMoveTo(this.id, location.x, location.y, location.z, speed);
    }
    public rotateAxis(rotation: Vector3d): void {
        SetObjectRotateAxis(this.id, rotation.x, rotation.y, rotation.z);
    }
    public setColor(color: Color, materialSlot?: number): void {
        SetObjectColor(this.id, color.toHex(), materialSlot);
    }
    public setTexture(textureFile: string, materialSlot?: number): void {
        SetObjectTexture(this.id, textureFile, materialSlot);
    }
    public setAnimatedTexture(textureFile: string, rows: number, columns: number, materialSlot?: number): void {
        SetObjectAnimatedTexture(this.id, textureFile, rows, columns, materialSlot);
    }
    public setStreamDistance(distance: number): void {
        SetObjectStreamDistance(this.id, distance);
    }
    public attach(holder: ISticky, offset: Vector3d, rotation?: Vector3d, socketName?: string): void {
        if(rotation === undefined){
            SetObjectAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z);
        }else{
            if(socketName === undefined){
                SetObjectAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z, rotation.x, rotation.y, rotation.z);
            }else{
                SetObjectAttached(this.id, holder.getType(), holder.getId(), offset.x, offset.y, offset.z, rotation.x, rotation.y, rotation.z, socketName);
            }
        }
    }
    public detach(): void {
        SetObjectDetached(this.id);
    }
    public isAttached(): boolean {
        return IsObjectAttached(this.id);
    }
    public setDimension(dimensionId: number): void {
        SetObjectDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetObjectDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public getType(): number {
        return -1; //TODO
    }
    public destroy(): void {
        DestroyObject(this.id);
    }
    public isValid(): boolean {
        return IsValidObject(this.id);
    }
}