/** @noSelfInFile */

class BoundingBox {
    constructor(private min: Vector3d, private max: Vector3d){}
    public getMin(): Vector3d {
        return this.min;
    }
    public getMax(): Vector3d {
        return this.max;
    }
}