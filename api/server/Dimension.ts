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

    public getPlayers(): Player[] {
        return Server.getPlayers().filter(this.dimensionFilter);
    }

    public getNPCs(): NPC[] {
        return Server.getNPCs().filter(this.dimensionFilter);
    }

    public getPickups(): Pickup[] {
        return Server.getPickups().filter(this.dimensionFilter);
    }

    public getText3Ds(): Text3D[] {
        return Server.get3DTexts().filter(this.dimensionFilter);
    }

    public getLights(): Light[] {
        return Server.getLights().filter(this.dimensionFilter);
    }

    public getId(): number {
        return this.id;
    }
}