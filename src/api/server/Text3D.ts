/** @noSelfInFile */

class Text3D {
    constructor(private id: number) { }

    public setDimension(dimensionId: number): void {
        SetText3DDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetText3DDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyText3D(this.id);
    }
    public isValid(): boolean {
        return IsValidText3D(this.id);
    }
}

AddFunctionExport("Text3D", () => Text3D);