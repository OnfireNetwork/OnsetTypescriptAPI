/** @noSelfInFile */

class ClientChatEvent implements ClientEvent {
    constructor(public player: ClientPlayer, public message: string){}
}