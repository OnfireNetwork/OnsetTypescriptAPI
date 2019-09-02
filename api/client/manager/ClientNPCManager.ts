/** @noSelfInFile */

class ClientNPCManager {
    public getAll(): ClientNPC[] {
        return GetStreamedNPC().map(id => this.get(id));
    }
    public get(id: number): ClientNPC {
        return new ClientNPC(id);
    }
}