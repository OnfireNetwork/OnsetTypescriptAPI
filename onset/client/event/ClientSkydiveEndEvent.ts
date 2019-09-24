/** @noSelfInFile */

class ClientSkydiveEndEvent implements ClientEvent {
    constructor(public crashed: boolean){}
}