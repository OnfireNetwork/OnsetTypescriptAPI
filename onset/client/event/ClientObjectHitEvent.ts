/** @noSelfInFile */

class ClientObjectHitEvent implements ClientEvent {
    constructor(public object: ClientWorldObject, public hitType: HitType, public entity: ClientVehicle|ClientWorldObject|ClientNPC|ClientPlayer|undefined, public location: Vector3d, public normal: Vector3d){}
}