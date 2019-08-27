/** @noSelfInFile */

import NetworkStats from "./NetworkStats";

// Server
export declare function GetTimeSeconds(): number;
export declare function GetDeltaSeconds(): number;
export declare function GetTickCount(): number;
export declare function GetGameVersion(): number;
export declare function GetGameVersionString(): string;
export declare function GetServerTickRate(): number;
export declare function ServerExit(): void;
export declare function SetServerName(name: string): void;
export declare function GetServerName(): string;
export declare function GetMaxPlayers(): number;
// Explosions
export declare function CreateExplosion(explosionId: number, x: number, y: number, z: number, soundExplosion?: boolean, camShakeRadius?: number, radialForce?: number): void;
// Lights
export declare function GetLightCount(): number;
export declare function GetAllLights(): number[];
export declare function CreateLight(lightType: number, intensity: number, x: number, y: number, z: number, rx?: number, ry?:number, rz?:number): number;
export declare function DestroyLight(lightId: number): void;
export declare function IsValidLight(lightId: number): boolean;
// Network
export declare function CancelConnectionRequest(): void; // Unclear
export declare function GetNetworkStats(): NetworkStats;
export declare function DumpNetworkStats(verbosity: number): void;
// NPCs
export declare function CreateNPC(modelId: number, x: number, y: number, z: number, h: number): number;
export declare function DestroyNPC(npcId: number): void;
export declare function IsValidNPC(npcId: number): boolean;
export declare function GetAllNPC(): number[];
export declare function GetNPCCount(): number;
export declare function IsNPCStreamedIn(playerId: number, npcId: number): boolean;
export declare function GetNPCModel(npcId: number): number;
export declare function SetNPCLocation(npcId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
export declare function GetNPCLocation(npcId: number): [number, number, number];
export declare function GetNPCHealth(npcId: number): number;
export declare function SetNPCAnimation(npcId: number, animationName: string, loop: boolean): boolean;
export declare function SetNPCHeading(npcId: number, heading: number): void;
export declare function GetNPCHeading(npcId: number): number;
export declare function SetNPCTargetLocation(npcId: number, x: number, y: number, z: number, speed?: number): void;
export declare function SetNPCFollowPlayer(npcId: number, playerId: number, speed?: number): void;
export declare function SetNPCFollowVehicle(npcId: number, vehicleId: number, speed?: number): void;
// Objects
export declare function CreateObject(modelId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, sx?: number, sy?: number, sz?: number): number;
export declare function DestroyObject(objectId: number): void;
export declare function IsValidObject(objectId: number): boolean;
export declare function GetObjectCount(): number;
export declare function GetObjectModel(objectId: number): number;
export declare function IsObjectStreamedIn(playerId: number, objectId: number): boolean;
export declare function SetObjectStreamDistance(objectId: number, distance: number): void;
export declare function SetObjectLocation(objectId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
export declare function GetObjectLocation(objectId: number): [number, number, number];
export declare function SetObjectRotation(objectId: number, rx: number, ry: number, rz: number): void;
 /** @tupleReturn */
export declare function GetObjectRotation(objectId: number): [number, number, number];
export declare function SetObjectScale(objectId: number, sx: number, sy: number, sz: number): void;
/** @tupleReturn */
export declare function GetObjectScale(objectId: number): [number, number, number];
export declare function SetObjectAttached(objectId: number, attachType: number, attachId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, socketName?: string): void;
export declare function SetObjectDetached(objectId: number): void;
export declare function IsObjectAttached(objectId: number): boolean;
//declare function GetObjectAttachmentInfo(objectId: number): unknown; -> Unknown return type
export declare function IsObjectMoving(objectId: number): boolean;
export declare function SetObjectMoveTo(objectId: number, x: number, y: number, z: number, speed: number): void;
export declare function StopObjectMove(objectId: number): void;
export declare function SetObjectRotateAxis(objectId: number, x: number, y: number, z: number): void;
export declare function SetObjectColor(objectId: number, color: number, materialSlot?: number, blsEmissive?: boolean, emissiveStrength?: number): void;
export declare function SetObjectTexture(objectId: number, textureFile: string, materialSlot?: number): void;
export declare function SetObjectAnimatedTexture(objectId: number, textureFile: string, rows: number, columns: number, materialSlot?: number): void;
// Package / Event Stuff
export declare function ImportPackage(packageName: string): any; // Maybe we can find a better type
export declare function AddFunctionExport(exportName: string, exportFunction: Function): void; // I definitly don't know if this will work
export declare function AddEvent(eventName: string, handler: Function): void;
export declare function CallEvent(eventName: string, ...args: any[]): void;
export declare function AddRemoteEvent(remoteEventName: string, handler: Function): void;
export declare function AddCommand(commandName: string, handler: Function): void;
export declare function GetAllPackages(): string[];
export declare function GetPackageName(): string;
// Pickups
export declare function GetPickupCount(): number;
export declare function GetAllPickups(): number[];
export declare function CreatePickup(modelId: number, x: number, y: number, z: number): number;
export declare function DestroyPickup(pickupId: number): void;
export declare function IsValidPickup(pickupId: number): boolean;
export declare function SetPickupScale(pickupId: number, sx: number, sy: number, sz: number): void;
/** @tupleReturn */
export declare function GetPickupScale(pickupId: number): [number, number, number];
// Players
export declare function IsValidPlayer(playerId: number): boolean;
export declare function CallRemoteEvent(playerId: number, eventName: string, ...args: any[]): boolean;
export declare function GetPlayerCount(): number;
export declare function GetAllPlayers(): number[];
export declare function GetNearestPlayer2D(x: number, y: number): number;
export declare function GetPlayersInRange2D(x: number, y: number, range: number): number[];
export declare function GetPlayersInRange3D(x: number, y: number, z: number, range: number): number[];
export declare function GetStreamedPlayersForPlayer(playerId: number): number[];
export declare function SetPlayerName(playerId: number, name: string): void;
export declare function GetPlayerName(playerId: number): string;
export declare function GetPlayerSteamId(playerId: number): string;
export declare function GetPlayerNetworkStats(playerId: number): NetworkStats;
export declare function SetPlayerSpawnLocation(playerId: number, x: number, y: number, z: number, h: number): void;
export declare function IsPlayerStreamedIn(playerId: number, otherPlayerId: number): boolean;
export declare function SetPlayerVoiceEnabled(playerId: number, enabled: boolean): void;
export declare function IsPlayerVoiceEnabled(playerId: number): boolean;
export declare function IsPlayerTalking(playerId: number): boolean;
export declare function AddPlayerChat(playerId: number, message: string): void;
export declare function AddPlayerChatRange(x: number, y: number, range: number, message: string): void;
export declare function AddPlayerChatAll(message: string): void;
//declare function GetPlayerState(playerId: number): unknown; -> Unknown return type
export declare function GetPlayerMovementMode(playerId: number): number; //Unclear
export declare function GetPlayerMovementSpeed(playerId: number): number;
export declare function IsPlayerAiming(playerId: number): boolean;
export declare function IsPlayerReloading(playerId: number): boolean;
export declare function GetPlayerVehicle(playerId: number): number;
export declare function GetPlayerVehicleSeat(playerId: number): number;
export declare function SetPlayerInVehicle(playerId: number, vehicleId: number, seat?: number): void;
export declare function RemovePlayerFromVehicle(playerId: number): void;
export declare function SetPlayerLocation(playerId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
export declare function GetPlayerLocation(playerId: number): [number, number, number];
export declare function SetPlayerWeaponStat(playerId: number, weaponId: number, stat: string, value: number): void; //Unclear
//declare function AddPlayerWeapon(playerId: number, weaponId: number): void; -> Not documented
export declare function GetPlayerWeapon(playerId: number, weaponSlot?: number): number; //Unclear
export declare function GetPlayerEquippedWeaponSlot(playerId: number): number;
export declare function EquipPlayerWeaponSlot(playerId: number, weaponSlot: number): void;
export declare function GetPlayerEquippedWeapon(playerId: number): number; //Unclear
//declare function ResetPlayerWeapon(playerId: number): void; -> Not documented
export declare function CancelPlayerWeaponShot(): void; //Unclear
export declare function CancelChatCommand(): void; //Unclear
export declare function SetPlayerHeading(playerId: number, heading: number): void;
export declare function GetPlayerHeading(playerId: number): number;
export declare function SetPlayerSpectate(playerId: number, spectate: boolean): void;
export declare function ResetPlayerCamera(playerId: number): void;
export declare function IsPlayerDead(playerId: number): boolean;
export declare function SetPlayerHealth(playerId: number, health: number): void;
export declare function GetPlayerHealth(playerId: number): number;
export declare function SetPlayerArmor(playerId: number, armor: number): void;
export declare function GetPlayerArmor(playerId: number): number;
export declare function SetPlayerRespawnTime(playerId: number, respawnTime: number): void;
export declare function GetPlayerRespawnTime(playerId: number): number;
export declare function SetPlayerModel(playerId: number, modelId: number): void;
export declare function GetPlayerModel(playerId: number): number;
export declare function GetPlayerIP(playerId: number): string;
export declare function GetPlayerPing(playerId: number): number;
export declare function KickPlayer(playerId: number, reason: string): void;
export declare function GetPlayerLocale(playerId: number): string;
export declare function GetPlayerGUID(playerId: number): string;
export declare function GetPlayerGameVersion(playerId: number): number;
export declare function SetPlayerAnimation(playerId: number, animationId: number): void;
export declare function AttachPlayerParachute(playerId: number, attach: boolean): void;
export declare function SetPlayerHeadSize(playerId: number, size: number): void;
export declare function GetPlayerHeadSize(playerId: number): number;
// 3D Texts
export declare function GetText3DCount(): number;
export declare function GetAllText3D(): number[];
export declare function CreateText3D(text: string, size: number, x: number, y: number, z: number, rx: number, ry: number, rz: number): number;
export declare function DestroyText3D(text3DId: number): void;
export declare function IsValidText3D(text3DId: number): boolean;
export declare function SetText3DAttached(text3DId: number, attachType: number, attachId: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, socketName?: number): void;
// Vehicles
export declare function GetVehicleCount(): number;
export declare function GetAllVehicles(): number[];
export declare function GetVehicleModel(vehicleId: number): number;
export declare function GetVehicleModelName(vehicleId: number): string;
export declare function SetVehicleRespawnParams(vehicleId: number, enableRespawn: boolean, respawnTime?: number, repairOnRespawn?: boolean): void;
export declare function IsVehicleStreamedIn(playerId: number, vehicleId: number): boolean;
export declare function GetStreamedVehiclesForPlayer(playerId: number): number[];
export declare function SetVehicleLocation(vehicleId: number, x: number, y: number, z: number): void;
/** @tupleReturn */
export declare function GetVehicleLocation(vehicleId: number): [number, number, number];
export declare function SetVehicleRotation(vehicleId: number, rx: number, ry: number, rz: number): void;
/** @tupleReturn */
export declare function GetVehicleRotation(vehicleId: number): [number, number, number];
export declare function SetVehicleHeading(vehicleId: number, heading: number): void;
export declare function GetVehicleHeading(vehicleId: number): number;
export declare function SetVehicleHealth(vehicleId: number, health: number): void;
export declare function GetVehicleHealth(vehicleId: number): number;
export declare function SetVehicleLicensePlate(vehicleId: number, licensePlate: string): void;
export declare function GetVehicleVelocity(vehicleId: number): number;
export declare function CreateVehicle(modelId: number, x: number, y: number, z: number, h?: number): number;
export declare function DestroyVehicle(vehicleId: number): void;
export declare function IsValidVehicle(vehicleId: number): boolean;
export declare function GetVehicleDriver(vehicleId: number): number;
export declare function GetVehiclePassenger(vehicleId: number, seat: number): number;
export declare function GetVehicleNumberOfSeats(vehicleId: number): number;
export declare function SetVehicleColor(vehicleId: number, color: number): void;
export declare function GetVehicleColor(vehicleId: number): number;
export declare function GetVehicleInteriorColor(vehicleId: number): number;
export declare function SetVehicleLinearVelocity(vehicleId: number, x: number, y: number, z: number): void;
export declare function SetVehicleAngularVelocity(vehicleId: number, rx: number, ry: number, rz: number): void;
export declare function GetVehicleGear(vehicleId: number): number;
export declare function SetVehicleHoodRatio(vehicleId: number, hoodRatio: number): void;
export declare function GetVehicleHoodRatio(vehicleId: number): number;
export declare function SetVehicleTrunkRatio(vehicleId: number, trunkRatio: number): void;
export declare function GetVehicleTrunkRatio(vehicleId: number): number;
export declare function StartVehicleEngine(vehicleId: number): void;
export declare function StopVehicleEngine(vehicleId: number): void;
export declare function GetVehicleEngineState(vehicleId: number): boolean;
export declare function SetVehicleLightEnabled(vehicleId: number, enabled: boolean): void;
export declare function GetVehicleLightState(vehicleId: number): boolean;
export declare function GetVehicleLightColor(vehicleId: number): number;
export declare function SetVehicleDamage(vehicle: number, damageIndex: number, damage: number): void;
export declare function GetVehicleDamage(vehicle: number, damageIndex: number): number;
export declare function AttachVehicleNitro(vehicle: number, attach?: boolean): void;
// Dimensions
export declare function SetPlayerDimension(player: number, dimension: number): void;
export declare function SetVehicleDimension(vehicle: number, dimension: number): void;
export declare function SetObjectDimension(object: number, dimension: number): void;
export declare function SetLightDimension(light: number, dimension: number): void;
export declare function SetPickupDimension(pickup: number, dimension: number): void;
export declare function SetText3DDimension(text3d: number, dimension: number): void;
export declare function SetNPCDimension(npc: number, dimension: number): void;
export declare function GetPlayerDimension(player: number): number;
export declare function GetVehicleDimension(vehicle: number): number;
export declare function GetObjectDimension(object: number): number;
export declare function GetLightDimension(light: number): number;
export declare function GetPickupDimension(pickup: number): number;
export declare function GetText3DDimension(text3d: number): number;
export declare function GetNPCDimension(npc: number): number;
