/** @noSelfInFile */

class Client {
    public static getSounds(): Sound[] {
        let raw = GetAllSounds();
        let result: Sound[] = [];
        for (let id of raw) {
            result.push(this.getSound(id));
        }
        return result;
    }
    public static getSound(id: number): Sound {
        return new Sound(id);
    }
    public static getSoundCount(): number {
        return GetSoundCount();
    }
    public static createSound(soundFile: string, bLoop?: boolean): Sound {
        return this.getSound(CreateSound(soundFile, bLoop));
    }
    public static isShiftPressed(): boolean {
        return IsShiftPressed();
    }
    public static isCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
}