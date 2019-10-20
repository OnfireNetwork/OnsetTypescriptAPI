/** @noSelfInFile */

class ServerPlayerInteractDoorEvent implements ServerEvent {
    constructor(public player: Player, public door: WorldObject, bWantsOpen: boolean){}
}