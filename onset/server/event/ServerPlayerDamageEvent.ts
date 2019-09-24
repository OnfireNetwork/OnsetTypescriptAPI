/** @noSelfInFile */

class ServerPlayerDamageEvent implements ServerEvent {
    constructor(public player: Player, public damageType: DamageType, public damage: number){}
}