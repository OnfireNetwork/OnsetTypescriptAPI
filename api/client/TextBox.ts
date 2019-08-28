/** @noSelfInFile */

class TextBox {
    constructor(private id: number){}
    public getId(): number {
        return this.id;
    }
    public setAnchors(min: Vector2d, max: Vector2d): void {
        SetTextBoxAnchors(this.id, min.x, min.y, max.x, max.y);
    }
    public setAlignment(alignment: Vector2d): void {
        SetTextBoxAlignment(this.id, alignment.x, alignment.y);
    }
    public setText(text: string): void {
        SetTextBoxText(this.id, text);
    }
    public destroy(): void {
        DestroyTextBox(this.id);
    }
}