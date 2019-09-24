/** @noSelfInFile */

class ClientSoundManager {
    public getAll(): ClientSound[] {
        return GetAllSounds().map(id => this.get(id));
    }
    public get(id: number): ClientSound {
        return new ClientSound(id);
    }
    public create(soundFile: string, loop?: boolean): ClientSound {
        if(loop !== undefined){
            return this.get(CreateSound(soundFile, loop));
        }else{
            return this.get(CreateSound(soundFile));
        }
    }
    public create3D(soundFile: string, location: Vector3d, radius?: number, loop?: boolean): ClientSound {
        if(radius !== undefined){
            if(loop !== undefined){
                return this.get(CreateSound3D(soundFile, location.x, location.y, location.z, radius, loop));
            }else{
                return this.get(CreateSound3D(soundFile, location.x, location.y, location.z, radius));
            }
        }else{
            return this.get(CreateSound3D(soundFile, location.x, location.y, location.z));
        }
        
    }
}