/** @noSelfInFile */

import { PauseTimer, UnpauseTimer, DestroyTimer, GetTimerRemainingTime } from "../../definition/Common";


export default class Timer {
    constructor(private id: number){}
    public pause(): void {
        PauseTimer(this.id);
    }
    public unpause(): void {
        UnpauseTimer(this.id);
    }
    public destroy(): void {
        DestroyTimer(this.id);
    }
    public getRemainingTime(): number {
        return GetTimerRemainingTime(this.id);
    }
}