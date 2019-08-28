/** @noSelfInFile */

class Sound {
    constructor(private id: number) { }
    public destroy() {
        DestroySound(this.id);
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