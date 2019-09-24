/** @noSelfInFile */

class ServerPlayerExitVehicleEvent implements ServerEvent {
    constructor(public player: Player, public vehicle: Vehicle, seat: number){}
}