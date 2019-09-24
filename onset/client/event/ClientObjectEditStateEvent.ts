/** @noSelfInFile */

class ClientObjectEditStateEvent implements ClientEvent {
    constructor(public object: ClientWorldObject, public editing: boolean){}
}