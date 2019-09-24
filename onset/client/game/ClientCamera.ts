/** @noSelfInFile */

class ClientCamera {
    public startFade(fromAlpha: number, toAlpha: number, duration: number, color?: Color): void {
        if(color !== undefined){
            StartCameraFade(fromAlpha, toAlpha, duration, color.toHex());
        }else{
            StartCameraFade(fromAlpha, toAlpha, duration);
        }
    }
    public stopFade(): void {
        StopCameraFade();
    }
    public playShake(duration: number, blendInTime?: number, blendOutTime?: number, scale?: number): void {
        PlayCameraShake(duration, blendInTime, blendOutTime, scale);
    }
    public stopShake(): void {
        StopCameraShake();
    }
    public setLocationShaking(amplifier: Vector3d, frequency: Vector3d): void {
        SetCameraShakeLocation(amplifier.x, frequency.x, amplifier.y, frequency.y, amplifier.z, frequency.z);
    }
    public setRotationShaking(amplifier: Vector3d, frequency: Vector3d): void {
        SetCameraShakeRotation(amplifier.x, frequency.x, amplifier.y, frequency.y, amplifier.z, frequency.z);
    }
    public setFOVShaking(amplifier: number, frequency: number): void {
        SetCameraShakeFOV(amplifier, frequency);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetPlayerCameraLocation());
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetPlayerCameraRotation());
    }
    public getForwardVector(): Vector3d {
        return Vector3d.fromTuple(GetPlayerCameraForwardVector());
    }
    public getRightVector(): Vector3d {
        return Vector3d.fromTuple(GetPlayerCameraRightVector());
    }
    public getUpVector(): Vector3d {
        return Vector3d.fromTuple(GetPlayerCameraUpVector());
    }
    public getDistance(): number {
        return GetPlayerCameraViewDistance();
    }
    public setDistance(distance: number): void {
        SetPlayerCameraViewDistance(distance);
    }
    public getHitLocation(): Vector3d {
        return Vector3d.fromTuple(GetMouseHitLocation());
    }
    public getHitEntity(): ClientVehicle|ClientWorldObject|ClientNPC|ClientPlayer|undefined {
        let info = GetMouseHitEntity();
        if(info[0] === HitType.PLAYER){
            return Client.getWorld().getPlayer(info[1]);
        }
        if(info[0] === HitType.VEHICLE){
            return Client.getWorld().getVehicle(info[1]);
        }
        if(info[0] === HitType.NPC){
            return Client.getWorld().getNPC(info[1]);
        }
        if(info[0] === HitType.OBJECT){
            if(info[1] !== 0){
                return Client.getWorld().getObject(info[1]);
            }
        }
        return undefined;
    }
    public deprojectMouseLocation(): [Vector3d, Vector3d]|undefined {
        let raw = DeprojectMouseLocationToWorld();
        if(raw === false){
            return undefined;
        }
        return [new Vector3d(raw[0], raw[1], raw[2]), new Vector3d(raw[3], raw[4], raw[5])];
    }
    public playDamageFX(value: number): void {
        InvokeDamageFX(value);
    }
}