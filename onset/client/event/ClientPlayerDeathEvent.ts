/** @noSelfInFile */

class ClientPlayerDeathEvent implements ClientEvent {
    constructor(public player: ClientPlayer, public killer?: ClientPlayer){}
    public isMurder(): boolean {
        return this.killer !== undefined;
    }
}