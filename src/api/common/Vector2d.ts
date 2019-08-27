/** @noSelfInFile */

class Vector2d {
    constructor(public x: number, public y: number) {}
    public getDistance(x2: number, y2: number) {
        return GetDistance2D(this.x, this.y, x2, y2);
    }
    public static fromTuple(tuple: [number, number]): Vector2d {
        return new Vector2d(tuple[0], tuple[1]);
    }
}

AddFunctionExport("Vector2d", () => Vector2d);