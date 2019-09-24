/** @noSelfInFile */

class ServerStreamOutEvent implements ServerEvent {
    constructor(public object: Player|Vehicle, public player: Player){}
}