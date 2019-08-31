/** @noSelfInFile */

class ClientWorld {
    public setTime(worldTime: number): void {
        SetTime(worldTime);
    }
    public getCollisions(): Collision[] {
        let raw = GetAllCollisions();
        let result: Collision[] = [];
        for (let id of raw) {
            result.push(this.getCollision(id));
        }
        return result;
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
        let raw = GetStreamedObjects();
        let result: ClientWorldObject[] = [];
        for (let id of raw) {
            result.push(this.getObject(id));
        }
        return result;
    }
    public getObject(id: number): ClientWorldObject {
        return new ClientWorldObject(id);
    }
    public getNPCs(): ClientNPC[] {
        let raw = GetStreamedNPC();
        let result: ClientNPC[] = [];
        for (let id of raw) {
            result.push(this.getNPC(id));
        }
        return result;
    }
    public getNPC(id: number): ClientNPC {
        return new ClientNPC(id);
    }
}