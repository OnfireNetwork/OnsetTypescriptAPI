/** @noSelfInFile */

class ServerChatCommandEvent implements ServerEvent {
    constructor(public player: Player, public command: string, exists: boolean){}
    public cancel(): void {
        CancelChatCommand();
    }
}