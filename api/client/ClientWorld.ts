/** @noSelfInFile */

class ClientWorld {
    public setTime(worldTime: number): void {
        SetTime(worldTime);
    }
    public getCollisions(): Collision[] {
        return GetAllCollisions().map(id => this.getCollision(id));
    }
    public getCollision(id: number): Collision {
        return new Collision(id);
    }
    public createCollisionBox(location: Vector3d, size: Vector3d, visible?: boolean): Collision {
        return this.getCollision(CreateCollisionBox(location.x, location.y, location.z, size.x, size.y, size.z, visible));
    }
    public createCollisionSphere(location: Vector3d, radius: number, visible?: boolean): Collision {
        return this.getCollision(CreateCollisionSphere(location.x, location.y, location.z, radius, visible));
    }
    public getObjects(): ClientWorldObject[] {
        return GetStreamedObjects().map(id => this.getObject(id));
    }
    public getObject(id: number): ClientWorldObject {
        return new ClientWorldObject(id);
    }
    public getNPCs(): ClientNPC[] {
        return GetStreamedNPC().map(id => this.getNPC(id));
    }
    public getNPC(id: number): ClientNPC {
        return new ClientNPC(id);
    }
}