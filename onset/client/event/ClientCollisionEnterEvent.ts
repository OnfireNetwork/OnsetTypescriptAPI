/** @noSelfInFile */

class ClientCollisionEnterEvent implements ClientEvent {
    constructor(public collision: ClientCollisionArea, public hitType: HitType, public entity: ClientVehicle|ClientWorldObject|ClientNPC|ClientPlayer|undefined){}
}