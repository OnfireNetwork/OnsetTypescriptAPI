/** @noSelfInFile */

class ClientSound {
    constructor(private id: number) { }
    public getId(): number {
        return this.id;
    }
    public destroy() {
        DestroySound(this.id);
    }
    public setFadeIn(duration?: number, volume?: number, startTime?: number): void {
        SetSoundFadeIn(this.id, duration, volume, startTime);
    }
    public setFadeOut(duration: number, volume: number): void {
        SetSoundFadeOut(this.id, duration, volume);
    }
    public getPitch(): number {
        return GetSoundPitch(this.id);
    }
    public setPitch(pitch: number) {
        return SetSoundPitch(this.id, pitch);
    }
    public getVolume(): number {
        return GetSoundVolume(this.id);
    }
    public setVolume(volume: number) {
        return SetSoundVolume(this.id, volume);
    }
    public isValid(): boolean {
        return IsValidSound(this.id);
    }
    public getDuration(): number {
        return GetSoundDuration(this.id);
    }
}