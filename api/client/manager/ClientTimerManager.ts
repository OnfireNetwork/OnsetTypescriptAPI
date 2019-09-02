/** @noSelfInFile */

class ClientTimerManager {
    public delay(millis: number, task: Function): void {
        Delay(millis, task);
    }
    public getAll(): Timer[] {
        return GetAllTimers().map(id => this.get(id));
    }
    public get(id: number): Timer {
        return new Timer(id);
    }
    public create(task: Function, interval: number, ...args: any[]): Timer {
        return this.get(CreateTimer(task, interval, args));
    }
    public createCount(task: Function, interval: number, count: number, ...args: any[]): Timer {
        return this.get(CreateCountTimer(task, interval, count, args));
    }
}