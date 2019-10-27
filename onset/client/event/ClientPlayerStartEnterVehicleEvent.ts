/** @noSelfInFile */

class ClientPlayerStartEnterVehicleEvent implements ClientEvent {
    constructor(public vehicle: ClientVehicle, public seat: number){}
}