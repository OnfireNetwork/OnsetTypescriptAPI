/** @noSelfInFile */

class Client {
    public static getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    public static getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    public static getGameVersion(): number {
        return GetGameVersion();
    }
    public static delay(millis: number, task: Function): void {
        Delay(millis, task);
    }
    public static getTimers(): Timer[] {
        let raw = GetAllTimers();
        let result: Timer[] = [];
        for (let id of raw) {
            result.push(this.getTimer(id));
        }
        return result;
    }
    public static getTimer(id: number): Timer {
        return new Timer(id);
    }
    public static createTimer(task: Function, interval: number, ...args: any[]): Timer {
        return this.getTimer(CreateTimer(task, interval, args));
    }
    public static createCountTimer(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return this.getTimer(CreateCountTimer(task, interval, count, args));
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
    public static listen(event: string, handler: Function): void {
        AddEvent(event, handler);
    }
    public static listenRemote(event: string, handler: Function): void {
        AddRemoteEvent(event, handler);
    }
    public static printChat(message: string): void {
        AddPlayerChat(message);
    }
    public static setIgnoreMoveInput(ignore: boolean): void {
        SetIgnoreMoveInput(ignore);
    }
    public static setIgnoreLookInput(ignore: boolean): void {
        SetIgnoreLookInput(ignore);
    }
    public static getPlayer(id?: number): ClientPlayer {
        if(id !== undefined){
            return new ClientPlayer(id);
        }else{
            return new ClientPlayer(GetPlayerId());
        }
    }
    public static connect(address: string, port: number, password?: string): void {
        ConnectToServer(address, port, password);
    }
    public static getPing(): number {
        return GetPing();
    }
    public static getWorld(): ClientWorld {
        return new ClientWorld();
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
}