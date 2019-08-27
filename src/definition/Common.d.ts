/** @noSelfInFile */

declare function Delay(millis: number, task: Function, ...args: any[]): void;

// Timers
declare function GetTimerCount(): number;
declare function GetAllTimers(): number[];
declare function IsValidTimer(timerId: number): boolean;
declare function CreateTimer(task: Function, interval: number, ...args: any[]): number;
declare function CreateCountTimer(task: Function, interval: number, count: number, ...args: any[]): number;
declare function DestroyTimer(timerId: number): void;
declare function PauseTimer(timerId: number): void;
declare function UnpauseTimer(timerId: number): void;
declare function GetTimerRemainingTime(timerId: number): number;

// Utils
declare function RGBA(r: number, g: number, b: number, a: number): number;
declare function RGB(r: number, g: number, b: number): number;
/** @tupleReturn */
declare function HexToRGBA(color: number): [number, number, number, number];
declare function Random(min?: number, max?: number): number;
declare function RandomFloat(min?: number, max?: number): number;
declare function Base64Encode(text: string): string;
declare function Base64Decode(base64: string): string;
declare function GetDistance2D(x: number, y: number, x2: number, y2: number): number;
declare function GetDistance3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;