/** @noSelfInFile */

abstract class CommonHelper {
    public random(min?: number, max?: number): number {
        return Random(min, max);
    }
    public randomFloat(min?: number, max?: number): number {
        return RandomFloat(min, max);
    }
    public encode(text: string): string {
        return Base64Encode(text);
    }
    public decode(base64: string): string {
        return Base64Decode(base64);
    }
}