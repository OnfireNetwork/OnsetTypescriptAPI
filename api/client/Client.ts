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
    export function getTextBox(id: number): TextBox {
        return new TextBox(id);
    }
    export function createTextBox(position: Vector2d, text: string, justification: string): TextBox {
        return Client.getTextBox(CreateTextBox(position.x, position.y, text, justification));
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
    export function getTimerManager(): ClientTimerManager {
        return new ClientTimerManager();
    }
    export function getSoundManager(): ClientSoundManager {
        return new ClientSoundManager();
    }
    export function getInputManager(): ClientInputManager {
        return new ClientInputManager();
    }
    export function getWebUIManager(): ClientWebUIManager {
        return new ClientWebUIManager();
    }
    export function getNPCManager(): ClientNPCManager {
        return new ClientNPCManager();
    }
}