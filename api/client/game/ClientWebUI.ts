/** @noSelfInFile */

class ClientWebUI {
    constructor(private id: number) { }
    public getId(): number {
        return this.id;
    }
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
    public setRotation(rotation: Vector3d): void {
        SetWebRotation(this.id, rotation.x, rotation.y, rotation.z);
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
    public setLocation(position: Vector2d|Vector3d): void {
        if(position instanceof Vector3d){
            SetWebLocation(this.id, position.x, position.y, position.z);
        }else{
            SetWebLocation(this.id, position.x, position.y);
        }
    }
    public setAlignment(alignment: Vector2d) {
        SetWebAlignment(this.id, alignment.x, alignment.y);
    }
    public setAnchors(min: Vector2d, max: Vector2d): void {
        SetWebAnchors(this.id, min.x, min.y, max.x, max.y);
    }
}