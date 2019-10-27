/** @noSelfInFile */

class ClientPlayerStartExitVehicleEvent implements ClientEvent {
    constructor(public vehicle: ClientVehicle, public seat: number){}
}