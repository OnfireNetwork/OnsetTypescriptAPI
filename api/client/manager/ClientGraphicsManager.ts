/** @noSelfInFile */

class ClientGraphicsManager {
    public getWebUIs(): ClientWebUI[] {
        return GetAllWebUI().map(id => this.getWebUI(id));
    }
    public getWebUI(id: number): ClientWebUI {
        return new ClientWebUI(id);
    }
    public createWebUI(x: number, y: number, width: number, height: number, zOrder?: number, fps?: number): ClientWebUI {
        return this.getWebUI(CreateWebUI(x, y, width, height, zOrder, fps));
    }
    public create3DWebUI(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, fps?: number): ClientWebUI {
        return this.getWebUI(CreateWebUI3D(x, y, z, rx, ry, rz, width, height, fps));
    }
    public getTextBox(id: number): ClientTextBox {
        return new ClientTextBox(id);
    }
    public createTextBox(position: Vector2d, text: string, justification: string): ClientTextBox {
        return this.getTextBox(CreateTextBox(position.x, position.y, text, justification));
    }
    public getSettings(): GraphicsSettings {
        return new GraphicsSettings();
    }
    public getScreenSize(): Vector2d {
        return Vector2d.fromTuple(GetScreenSize());
    }
}