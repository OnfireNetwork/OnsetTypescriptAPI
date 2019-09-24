/** @noSelfInFile */

class ClientPlayerExitVehicleEvent implements ClientEvent {
    constructor(public player: ClientPlayer, public vehicle: ClientVehicle, seat: number){}
}