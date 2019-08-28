/** @noSelfInFile */

class ClientPlayer {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public isInVehicle(): boolean {
        return IsPlayerInVehicle(this.id);
    }
    public getVehicle(): ClientVehicle {
        return new ClientVehicle(GetPlayerVehicle(this.id));
    }
}