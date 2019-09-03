/** @noSelfInFile */

class ClientInputManager {
    public setCursorEnabled(enabled: boolean): void {
        ShowMouseCursor(enabled);
    }
    public isCursorEnabled(): boolean {
        return IsMouseCursorEnabled();
    }
    public getMouseLocation(): Vector2d {
        let raw = GetMouseLocation();
        return new Vector2d(raw[0], raw[1]);
    }
    public getMouseDelta(): number {
        return GetMouseInputDelta();
    }
    public isShiftPressed(): boolean {
        return IsShiftPressed();
    }
    public isCtrlPressed(): boolean {
        return IsCtrlPressed();
    }
    public setIgnoreMoveInput(ignore: boolean): void {
        SetIgnoreMoveInput(ignore);
    }
    public setIgnoreLookInput(ignore: boolean): void {
        SetIgnoreLookInput(ignore);
    }
    public setMode(mode: string): void {
        SetInputMode(mode);
    }
    public getAxisValue(axis: string): number {
        return GetInputAxisValue(axis);
    }
}