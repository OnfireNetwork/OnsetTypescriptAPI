/** @noSelfInFile */

class Client {
    public static getCollisions(): Collision[] {
        let raw = GetAllCollisions();
        let result: Collision[] = [];
        for (let id of raw) {
            result.push(this.getCollision(id));
        }
        return result;
    }
    public static getCollision(id: number): Collision {
        return new Collision(id);
    }
    public static createCollisionBox(location: Vector3d, size: Vector3d, visible?: boolean): Collision {
        return this.getCollision(CreateCollisionBox(location.x, location.y, location.z, size.x, size.y, size.z, visible));
    }
    public static createCollisionSphere(location: Vector3d, radius: number, visible?: boolean): Collision {
        return this.getCollision(CreateCollisionSphere(location.x, location.y, location.z, radius, visible));
    }
    public static getSounds(): Sound[] {
        let raw = GetAllSounds();
        let result: Sound[] = [];
        for (let id of raw) {
            result.push(this.getSound(id));
        }
        return result;
    }
    public static getSound(id: number): Sound {
        return new Sound(id);
    }
    public static createSound(soundFile: string, loop?: boolean): Sound {
        return this.getSound(CreateSound(soundFile, loop));
    }
    public static getObjects(): ClientWorldObject[] {
        let raw = GetStreamedObjects();
        let result: ClientWorldObject[] = [];
        for (let id of raw) {
            result.push(this.getObject(id));
        }
        return result;
    }
    public static getObject(id: number): ClientWorldObject {
        return new ClientWorldObject(id);
    }
    public static getNPCs(): ClientNPC[] {
        let raw = GetStreamedNPC();
        let result: ClientNPC[] = [];
        for (let id of raw) {
            result.push(this.getNPC(id));
        }
        return result;
    }
    public static getNPC(id: number): ClientNPC {
        return new ClientNPC(id);
    }
    public static getTextBox(id: number): TextBox {
        return new TextBox(id);
    }
    public static createTextBox(position: Vector2d, text: string, justification: string): TextBox {
        return this.getTextBox(CreateTextBox(position.x, position.y, text, justification));
    }
    public static isShiftPressed(): boolean {
        return IsShiftPressed();
    }
    public static isCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
}