/** @noSelfInFile */

class ServerChatEvent implements ServerEvent {
    constructor(public player: Player, public message: string){}
}