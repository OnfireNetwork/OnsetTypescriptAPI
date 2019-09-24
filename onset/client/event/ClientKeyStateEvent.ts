/** @noSelfInFile */

class ClientKeyStateEvent implements ClientEvent {
    constructor(public key: string, public pressed: boolean){}
    public isShift(): boolean {
        return IsShiftPressed();
    }
    public isCtrl(): boolean {
        return IsCtrlPressed();
    }
}