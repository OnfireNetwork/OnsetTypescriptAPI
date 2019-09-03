/** @noSelfInFile */

class WorldManager {
    public getPlayers(): Player[] {
        return GetAllPlayers().map(id => this.getPlayer(id));
    }
    public getPlayer(id: number): Player {
        return new Player(id);
    }
    public getLights(): Light[] {
        return GetAllLights().map(id => this.getLight(id));
    }
    public getLight(id: number): Light {
        return new Light(id);
    }
    public createLight(lightType: number, intensity: number, location: Vector3d, rotation?: Vector3d): Light {
        let lightId;
        if (rotation !== undefined) {
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z);
        } else {
            lightId = CreateLight(lightType, intensity, location.x, location.y, location.z);
        }
        return this.getLight(lightId);
    }
    public getPickups(): Pickup[] {
        return GetAllPickups().map(id => this.getPickup(id));
    }
    public getPickup(id: number): Pickup {
        return new Pickup(id);
    }
    public createPickup(modelId: number, location: Vector3d): Pickup {
        return this.getPickup(CreatePickup(modelId, location.x, location.y, location.z));
    }
    public get3DTexts(): Text3D[] {
        return GetAllText3D().map(id => this.get3DText(id));
    }
    public get3DText(id: number): Text3D {
        return new Text3D(id);
    }
    public create3DText(text: string, size: number, location: Vector3d, rotation: Vector3d): Text3D {
        return this.get3DText(CreateText3D(text, size, location.x, location.y, location.z, rotation.x, rotation.y, rotation.z));
    }
    public getVehicles(): Vehicle[] {
        return GetAllVehicles().map(id => this.getVehicle(id));
    }
    public getVehicle(id: number): Vehicle {
        return new Vehicle(id);
    }
    public createVehicle(modelId: number, location: Vector3d, heading?: number): Vehicle {
        return this.getVehicle(CreateVehicle(modelId, location.x, location.y, location.z, heading));
    }
    public getObject(id: number): WorldObject {
        return new WorldObject(id);
    }
    public createObject(modelId: number, location: Vector3d, rotation?: Vector3d, scale?: Vector3d): WorldObject {
        let objectId;
        if(rotation !== undefined){
            if(scale !== undefined){
                objectId = CreateObject(modelId,  location.x, location.y, location.z, rotation.x, rotation.y, rotation.z, scale.x, scale.y, scale.z);
            }else{
                objectId = CreateObject(modelId,  location.x, location.y, location.z, rotation.x, rotation.y, rotation.z);
            }
        }else{
            if(scale !== undefined){
                objectId = CreateObject(modelId,  location.x, location.y, location.z, 0, 0, 0, scale.x, scale.y, scale.z);
            }else{
                objectId = CreateObject(modelId,  location.x, location.y, location.z);
            }
        }
        return this.getObject(objectId);
    }
    public getNPCs(): NPC[] {
        return GetAllNPC().map(id => this.getNPC(id));
    }
    public getNPC(id: number): NPC {
        return new NPC(id);
    }
    public createNPC(modelId: number, location: Vector3d, heading: number): NPC {
        return this.getNPC(CreateNPC(modelId, location.x, location.y, location.z, heading));
    }
    public getDimension(id: number): Dimension {
        return new Dimension(id);
    }
    public getDefaultDimension(): Dimension {
        return Dimension.default;
    }
}