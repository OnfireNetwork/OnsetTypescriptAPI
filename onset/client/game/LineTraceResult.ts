
class LineTraceResult {
    constructor(private hitLocation?: Vector3d, private planeNormal?: Vector3d){}
    public getHitLocation(): Vector3d {
        if(this.hitLocation instanceof Vector3d){
            return this.hitLocation;
        }
        return new Vector3d(0,0,0);
    }
    public getPlaneNormal(): Vector3d {
        if(this.planeNormal instanceof Vector3d){
            return this.planeNormal;
        }
        return new Vector3d(0,0,0);
    }
    public isHit(){
        return this.hitLocation !== undefined;
    }
}