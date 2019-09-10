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

declare function AddEvent(eventName: string, handler: Function): void;
declare function CallEvent(eventName: string, ...args: any[]): void;

// Package
declare function GetPackageName(): string;
declare function AddFunctionExport(Name: string, Function: Function): void; // I definitly don't know if this will work
declare function ImportPackage(packageName: string): any; // Maybe we can find a better type

// Utils
declare function print(text: string | number): void;
declare function GetTimeSeconds(): number;
declare function GetTickCount(): number;
declare function GetDeltaSeconds(): number;
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

// Infos
declare function GetGameVersion(): number;

// Counts
declare function GetPlayerCount(): number;
declare function GetPickupCount(): number;
declare function GetText3DCount(): number;
declare function GetVehicleCount(): number;
declare function GetObjectCount(): number;
declare function GetLightCount(): number;
declare function GetNPCCount(): number;

// NPC
/** @tupleReturn */
declare function GetNPCLocation(npc: number): [number, number, number];

// Object
/** @tupleReturn */
declare function GetObjectLocation(object: number): [number, number, number];
/** @tupleReturn */
declare function GetObjectScale(objectId: number): [number, number, number];
declare function GetObjectModel(objectId: number): number;
/** @tupleReturn */
declare function GetObjectRotation(objectId: number): [number, number, number];

// Player
declare function GetPlayerVehicle(playerId?: number): number;
declare function GetPlayerHealth(playerId?: number): number;
declare function GetPlayerArmor(playerId?: number): number;
declare function GetPlayerWeapon(playerId: number, weaponSlot?: number): number; //Unclear
declare function GetPlayerMovementMode(playerId: number): number; //Unclear
declare function GetPlayerMovementSpeed(playerId: number): number;
/** @tupleReturn */
declare function GetPlayerLocation(player: number): [number, number, number];
declare function IsPlayerAiming(playerId: number): boolean;
declare function IsPlayerReloading(playerId: number): boolean;
declare function IsPlayerTalking(playerId: number): boolean;
declare function IsPlayerDead(playerId: number): boolean;

// Vehicle
declare function GetVehicleModel(vehicleId: number): number;
/** @tupleReturn */
declare function GetVehicleLocation(vehicleId: number): [number, number, number];
declare function GetVehicleHoodRatio(vehicleId: number): number;
declare function GetVehicleGear(vehicleId: number): number;
/** @tupleReturn */
declare function GetVehicleRotation(vehicleId: number): [number, number, number];
declare function GetVehicleLightState(vehicleId: number): boolean;
declare function GetVehicleHealth(vehicleId: number): number;
declare function GetVehicleTrunkRatio(vehicleId: number): number;

// Validations
declare function IsValidLight(lightId: number): boolean;
declare function IsValidNPC(npcId: number): boolean;
declare function IsValidObject(objectId: number): boolean;
declare function IsValidPickup(pickupId: number): boolean;
declare function IsValidPlayer(playerId: number): boolean;
declare function IsValidText3D(text3DId: number): boolean;
declare function IsValidVehicle(vehicleId: number): boolean;

declare function GetPlayerPropertyValue(player: number, property: string): string|number|boolean