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
    public create3D(soundFile: string, location: Vector3d, radius?: number, loop?: boolean): Sound {
        return this.get(CreateSound3D(soundFile, location.x, location.y, location.z, radius, loop));
    }
}