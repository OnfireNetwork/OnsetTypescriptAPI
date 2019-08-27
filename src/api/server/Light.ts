/** @noSelfInFile */

class Light {
    constructor(private id: number) { }

    public setDimension(dimensionId: number): void {
        SetLightDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetLightDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyLight(this.id);
    }
    public isValid(): boolean {
        return IsValidLight(this.id);
    }
}