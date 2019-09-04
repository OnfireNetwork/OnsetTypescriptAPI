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
    public createOnlineWebUI(x: number, y: number, width: number, height: number, zOrder?: number, fps?: number): ClientWebUI {
        return this.getWebUI(CreateRemoteWebUI(x, y, width, height, zOrder, fps));
    }
    public create3DOnlineWebUI(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, fps?: number): ClientWebUI {
        return this.getWebUI(CreateRemoteWebUI3D(x, y, z, rx, ry, rz, width, height, fps));
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
    public getCamera(): ClientCamera {
        return new ClientCamera();
    }
    public setHealthInfo(visible: boolean): void {
        ShowHealthHUD(visible);
    }
    public setWeaponInfo(visible: boolean): void {
        ShowWeaponHUD(visible);
    }
    public getDrawManager(): ClientDrawManager {
        return new ClientDrawManager();
    }
    public worldToScreen(location: Vector3d): Vector2d|undefined {
        let res = WorldToScreen(location.x, location.y, location.z);
        if(!res[0]){
            return undefined;
        }
        return new Vector2d(res[1], res[2]);
    }
    public screenToWorld(position: Vector2d): [Vector3d, Vector3d]|undefined {
        let res = ScreenToWorld(position.x, position.y);
        if(!res[0]){
            return undefined;
        }
        return [new Vector3d(res[1], res[2], res[3]), new Vector3d(res[4], res[5], res[6])];
    }
    public setChatVisible(visible: boolean): void {
        ShowChat(visible);
    }
    public setChatPosition(position: Vector2d): void {
        SetChatLocation(position.x, position.y);
    }
    public getChatPosition(): Vector2d {
        return Vector2d.fromTuple(GetChatLocation());
    }
}