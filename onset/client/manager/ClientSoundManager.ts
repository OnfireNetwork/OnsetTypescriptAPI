/** @noSelfInFile */

class ClientSoundManager {
    public getAll(): Sound[] {
        return GetAllSounds().map(id => this.get(id));
    }
    public get(id: number): Sound {
        return new Sound(id);
    }
    public create(soundFile: string, loop?: boolean): Sound {
        return this.get(CreateSound(soundFile, loop));
    }
}