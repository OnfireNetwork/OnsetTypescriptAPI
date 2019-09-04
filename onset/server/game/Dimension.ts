/** @noSelfInFile */

declare type DimensionCompatible = Vehicle | Player | NPC | Pickup | Text3D | Light | WorldObject;

class Dimension {
    public static readonly default = new Dimension(0);

    constructor(private id: number) { }

    public setDimension(object: DimensionCompatible): void {
        if (object instanceof Vehicle) {
            SetVehicleDimension(this.id, object.getId());
        } else if (object instanceof Player) {
            SetPlayerDimension(this.id, object.getId());
        } else if (object instanceof NPC) {
            SetNPCDimension(this.id, object.getId());
        } else if (object instanceof Pickup) {
            SetPickupDimension(this.id, object.getId());
        } else if (object instanceof Text3D) {
            SetText3DDimension(this.id, object.getId());
        } else if (object instanceof Light) {
            SetLightDimension(this.id, object.getId());
        } else if (object instanceof WorldObject) {
            SetObjectDimension(this.id, object.getId());
        }
    }

    private dimensionFilter = (obj: DimensionCompatible) => obj.getDimension() == this.id;

    public createLight(lightType: number, intensity: number, location: Vector3d, rotation?: Vector3d): Light {
        let light = Server.getWorld().createLight(lightType, intensity, location, rotation);
        this.setDimension(light);
        return light;
    }
    public createPickup(modelId: number, location: Vector3d): Pickup {
        let pickup = Server.getWorld().createPickup(modelId, location);
        this.setDimension(pickup);
        return pickup;
    }
    public create3DText(text: string, size: number, location: Vector3d, rotation: Vector3d): Text3D {
        let text3D = Server.getWorld().create3DText(text, size, location, rotation);
        this.setDimension(text3D);
        return text3D;
    }
    public createVehicle(modelId: number, location: Vector3d, heading?: number): Vehicle {
        let vehicle = Server.getWorld().createVehicle(modelId, location, heading);
        this.setDimension(vehicle);
        return vehicle;
    }
    public createNPC(modelId: number, location: Vector3d, heading: number): NPC {
        let npc = Server.getWorld().createNPC(modelId, location, heading);
        this.setDimension(npc);
        return npc;
    }

    public getPlayers(): Player[] {
        return Server.getWorld().getPlayers().filter(this.dimensionFilter);
    }

    public getNPCs(): NPC[] {
        return Server.getWorld().getNPCs().filter(this.dimensionFilter);
    }

    public getPickups(): Pickup[] {
        return Server.getWorld().getPickups().filter(this.dimensionFilter);
    }

    public getText3Ds(): Text3D[] {
        return Server.getWorld().get3DTexts().filter(this.dimensionFilter);
    }

    public getLights(): Light[] {
        return Server.getWorld().getLights().filter(this.dimensionFilter);
    }

    public getId(): number {
        return this.id;
    }
}