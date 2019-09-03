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
}