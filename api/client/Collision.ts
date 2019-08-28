/** @noSelfInFile */

class Collision {
    constructor(private id: number) { }
    public destroy() {
        DestroyCollision(this.id);
    }
    public getId(): number {
        return this.id;
    }
}