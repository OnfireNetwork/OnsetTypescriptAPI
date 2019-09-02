/** @noSelfInFile */

namespace Client {
    export function getTimeSeconds(): number {
        return GetTimeSeconds();
    }
    export function getDeltaSeconds(): number {
        return GetDeltaSeconds();
    }
    export function getGameVersion(): number {
        return GetGameVersion();
    }
    export function delay(millis: number, task: Function): void {
        Delay(millis, task);
    }
    export function getTimers(): Timer[] {
        return GetAllTimers().map(id => Client.getTimer(id));
    }
    export function getTimer(id: number): Timer {
        return new Timer(id);
    }
    export function createTimer(task: Function, interval: number, ...args: any[]): Timer {
        return Client.getTimer(CreateTimer(task, interval, args));
    }
    export function createCountTimer(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return Client.getTimer(CreateCountTimer(task, interval, count, args));
    }
    export function getTextBox(id: number): TextBox {
        return new TextBox(id);
    }
    export function createTextBox(position: Vector2d, text: string, justification: string): TextBox {
        return Client.getTextBox(CreateTextBox(position.x, position.y, text, justification));
    }
    export function isShiftPressed(): boolean {
        return IsShiftPressed();
    }
    export function isCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
    export function listen(event: string, handler: Function): void {
        AddEvent(event, handler);
    }
    export function listenRemote(event: string, handler: Function): void {
        AddRemoteEvent(event, handler);
    }
    export function printChat(message: string): void {
        AddPlayerChat(message);
    }
    export function setIgnoreMoveInput(ignore: boolean): void {
        SetIgnoreMoveInput(ignore);
    }
    export function setIgnoreLookInput(ignore: boolean): void {
        SetIgnoreLookInput(ignore);
    }
    export function getPlayer(id?: number): ClientPlayer {
        if (id !== undefined) {
            return new ClientPlayer(id);
        } else {
            return new ClientPlayer(GetPlayerId());
        }
    }
    export function connect(address: string, port: number, password?: string): void {
        ConnectToServer(address, port, password);
    }
    export function getPing(): number {
        return GetPing();
    }
    export function getWorld(): ClientWorld {
        return new ClientWorld();
    }
    export function getSounds(): Sound[] {
        return GetAllSounds().map(id => Client.getSound(id));
    }
    export function getSound(id: number): Sound {
        return new Sound(id);
    }
    export function createSound(soundFile: string, loop?: boolean): Sound {
        return Client.getSound(CreateSound(soundFile, loop));
    }
}