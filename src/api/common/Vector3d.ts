/** @noSelfInFile */

class Vector3d {
    constructor(public x: number, public y: number, public z: number){}
    public getDistance(x2: number, y2: number, z2: number): number {
        return GetDistance3D(this.x, this.y, this.z, x2, y2, z2);
    }
    public static fromTuple(tuple: [number, number, number]): Vector3d {
        return new Vector3d(tuple[0], tuple[1], tuple[2]);
    }
}

AddFunctionExport("Vector3d", () => Vector3d);