/** @noSelfInFile */

class ServerStreamInEvent implements ServerEvent {
    constructor(public object: Player|Vehicle, public player: Player){}
}