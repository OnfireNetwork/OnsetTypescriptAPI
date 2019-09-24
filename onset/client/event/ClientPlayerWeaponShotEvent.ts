/** @noSelfInFile */

class ClientPlayerWeaponShotEvent implements ClientEvent {
    constructor(public player: ClientPlayer, public weapon: WeaponModel, public hitType: HitType, public entity: ClientVehicle|ClientWorldObject|ClientNPC|ClientPlayer|undefined, public location: Vector3d, public start: Vector2d, public normal: Vector3d){}
}