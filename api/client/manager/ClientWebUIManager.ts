/** @noSelfInFile */

class ClientWebUIManager {
    public getAll(): ClientWebUI[] {
        return GetAllWebUI().map(id => this.get(id));
    }
    public get(id: number): ClientWebUI {
        return new ClientWebUI(id);
    }
    public create(x: number, y: number, width: number, height: number, zOrder?: number, fps?: number): ClientWebUI {
        return this.get(CreateWebUI(x, y, width, height, zOrder, fps));
    }
    public create3D(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, fps?: number): ClientWebUI {
        return this.get(CreateWebUI3D(x, y, z, rx, ry, rz, width, height, fps));
    }
}