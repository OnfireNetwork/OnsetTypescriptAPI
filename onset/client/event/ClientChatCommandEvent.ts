/** @noSelfInFile */

class ClientChatCommandEvent implements ClientEvent {
    constructor(public player: ClientPlayer, public command: string, exists: boolean){}
}