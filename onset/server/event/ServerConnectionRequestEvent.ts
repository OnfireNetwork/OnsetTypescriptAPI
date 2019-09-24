/** @noSelfInFile */

class ServerConnectionRequestEvent implements ServerEvent {
    constructor(public address: string, public port: number){}
    public cancel(){
        CancelConnectionRequest();
    }
}