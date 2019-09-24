/** @noSelfInFile */

class ServerPlayerWeaponShotEvent implements ServerEvent {
    constructor(public player: Player, public weapon: WeaponModel, public hitType: HitType, public entity: Vehicle|WorldObject|NPC|Player|undefined, public location: Vector3d, public start: Vector2d, public normal: Vector3d){}
    public cancel(): void {
        CancelPlayerWeaponShot();
    }
}