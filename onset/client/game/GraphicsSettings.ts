/** @noSelfInFile */

class GraphicsSettings {
    public setFOV(fov: number): void {
        SetPlayerFOV(fov);
    }
    public getFOV(): number {
        return GetPlayerFOV();
    }
    public setCameraDistance(distance: number): void {
        SetPlayerCameraViewDistance(distance);
    }
    public getCameraDistance(): number {
        return GetPlayerCameraViewDistance();
    }
    public setOceanColor(color: Color): void {
        SetOceanColor(color.toHex());
    }
    public resetOceanColor(): void {
        ResetOceanColor();
    }
    public setSkySaturation(saturation: number): void {
        SetSkySaturation(saturation);
    }
    public setSunRadius(radius: number): void {
        SetSunRadius(radius);
    }
    public setSunShine(shine: number): void {
        SetSunShine(shine);
    }
    public setSunAzimuth(azimuth: number): void {
        SetSunAzimuth(azimuth);
    }
    public setStarBrightness(brightness: number): void {
        SetStarsBrightness(brightness);
    }
    public setMoonRadius(radius: number): void {
        SetMoonRadius(radius);
    }
    public setMoonShine(shine: number): void {
        SetMoonShine(shine);
    }
    public setFogDensity(density: number): void {
        SetFogDensity(density);
    }
    public setSunLightIntensity(intensity: number): void {
        SetSunLightIntensity(intensity);
    }
    public setSkyLightIntensity(intensity: number): void {
        SetSkyLightIntensity(intensity);
    }
    public setMoonLightIntensity(intensity: number): void {
        SetMoonLightIntensity(intensity);
    }
    public setSkyRotationSpeed(speed: number): void  {
        SetSkyRotationSpeed(speed);
    }
}