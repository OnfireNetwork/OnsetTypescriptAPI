/** @noSelfInFile */

export declare function Delay(millis: number, task: Function, ...args: any[]): void;

// Timers
export declare function GetTimerCount(): number;
export declare function GetAllTimers(): number[];
export declare function IsValidTimer(timerId: number): boolean;
export declare function CreateTimer(task: Function, interval: number, ...args: any[]): number;
export declare function CreateCountTimer(task: Function, interval: number, count: number, ...args: any[]): number;
export declare function DestroyTimer(timerId: number): void;
export declare function PauseTimer(timerId: number): void;
export declare function UnpauseTimer(timerId: number): void;
export declare function GetTimerRemainingTime(timerId: number): number;

// Utils
export declare function RGBA(r: number, g: number, b: number, a: number): number;
export declare function RGB(r: number, g: number, b: number): number;
/** @tupleReturn */
export declare function HexToRGBA(color: number): [number, number, number, number];
export declare function Random(min?: number, max?: number): number;
export declare function RandomFloat(min?: number, max?: number): number;
export declare function Base64Encode(text: string): string;
export declare function Base64Decode(base64: string): string;
export declare function GetDistance2D(x: number, y: number, x2: number, y2: number): number;
export declare function GetDistance3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;