/** @noSelfInFile */

class ClientWebUI {
    constructor(private id: number) { }
    public destroy() {
        DestroyWebUI(this.id);
    }
    public loadFile(file: string) {
        LoadWebFile(this.id, file);
    }
    public setURL(url: string) {
        SetWebURL(this.id, url);
    }
    public setSize(width: number, height: number) {
        SetWebSize(this.id, width, height);
    }
    public isVisible(): boolean {
        return GetWebVisibility(this.id);
    }
    public setVisible(visiblity: boolean) {
        SetWebVisibility(this.id, visiblity);
    }
    public loadWebFile(file: string) {
        LoadWebFile(this.id, file);
    }
    public execJS(source: string) {
        ExecuteWebJS(this.id, source);
    }
    public setLocation(position: Vector2d, z?: number): void {
        SetWebLocation(this.id, position.x, position.y, z);
    }
    public setAlignment(alignment: Vector2d) {
        SetWebAlignment(this.id, alignment.x, alignment.y);
    }
}