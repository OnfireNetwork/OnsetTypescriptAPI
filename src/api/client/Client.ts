/** @noSelfInFile */

class Client {
    getSounds(): Sound[] {
        let raw = GetAllSounds();
        let result: Sound[] = [];
        for (let id of raw) {
            result.push(this.getSound(id));
        }
        return result;
    }
    getSound(id: number): Sound {
        return new Sound(id);
    }
    getSoundCount(): number {
        return GetSoundCount();
    }
    createSound(soundFile: string, bLoop?: boolean): Sound {
        return this.getSound(CreateSound(soundFile, bLoop));
    }
    isShiftPressed(): boolean {
        return IsShiftPressed();
    }
    isCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
}