/** @noSelfInFile */

class NPC {
    constructor(private id: number) { }
    public isStreamedIn(player: Player): boolean {
        return IsNPCStreamedIn(player.getId(), this.id);
    }
    public getModel(): number {
        return GetNPCModel(this.id);
    }
    public getHealth(): number {
        return GetNPCHealth(this.id);
    }
    public setLocation(location: Vector3d): void {
        SetNPCLocation(this.id, location.x, location.y, location.z);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetNPCLocation(this.id));
    }
    public setAnimation(animationName: string, loop: boolean): void {
        SetNPCAnimation(this.id, animationName, loop);
    }
    public setHeading(heading: number): void {
        SetNPCHeading(this.id, heading);
    }
    public getHeading(): number {
        return GetNPCHeading(this.id);
    }
    public walkTo(location: Vector3d, speed?: number): void {
        SetNPCTargetLocation(this.id, location.x, location.y, location.z, speed);
    }
    public followPlayer(player: Player, speed?: number): void {
        SetNPCFollowPlayer(this.id, player.getId(), speed);
    }
    public followVehicle(vehicle: Vehicle, speed?: number): void {
        SetNPCFollowVehicle(this.id, vehicle.getId(), speed);
    }
    public setDimension(dimensionId: number): void {
        SetNPCDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetNPCDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyNPC(this.id);
    }
    public isValid(): boolean {
        return IsValidNPC(this.id);
    }
}