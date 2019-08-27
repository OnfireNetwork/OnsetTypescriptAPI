/** @noSelfInFile */

class Client {
    static getSounds(): Sound[] {
        let raw = GetAllSounds();
        let result: Sound[] = [];
        for (let id of raw) {
            result.push(this.getSound(id));
        }
        return result;
    }
    static getSound(id: number): Sound {
        return new Sound(id);
    }
    static getSoundCount(): number {
        return GetSoundCount();
    }
    static createSound(soundFile: string, bLoop?: boolean): Sound {
        return this.getSound(CreateSound(soundFile, bLoop));
    }
    static IsShiftPressed(): boolean {
        return IsShiftPressed();
    }
    static IsCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
}

AddFunctionExport("Client", () => Client);