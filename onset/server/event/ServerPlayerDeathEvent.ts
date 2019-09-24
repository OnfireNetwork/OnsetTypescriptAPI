/** @noSelfInFile */

class ServerPlayerDeathEvent implements ServerEvent {
    constructor(public player: Player, public killer?: Player){}
    public isMurder(): boolean {
        return this.killer !== undefined;
    }
}