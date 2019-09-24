/** @noSelfInFile */

class ServerPlayerStateEvent implements ServerEvent {
    constructor(public player: Player, public newState: PlayerState, public oldState: PlayerState){}
}