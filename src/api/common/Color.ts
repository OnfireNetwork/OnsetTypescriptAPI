class Color {
    constructor(public red: number, public green: number, public blue: number, public alpha: number){}
    public toHex(): number {
        return RGBA(this.red, this.green, this.blue, this.alpha);
    }
    public static fromHex(hex: number): Color {
        let raw = HexToRGBA(hex);
        return new Color(raw[0], raw[1], raw[2], raw[3]);
    }
}