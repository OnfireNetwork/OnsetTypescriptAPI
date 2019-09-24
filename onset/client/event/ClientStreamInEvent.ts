/** @noSelfInFile */

class ClientStreamInEvent implements ClientEvent {
    constructor(public object: ClientLight|ClientNPC|ClientWorldObject|ClientPlayer|ClientText3D|ClientVehicle|ClientPickup){}
}