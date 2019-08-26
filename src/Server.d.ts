/** @noSelfInFile */

declare function GetServerName(): string;
declare function SetServerName(newName: string): void;


declare function SetVehicleDamage(vehicle: number, damageIndex: number, damage: number): void;
declare function GetVehicleDamage(vehicle: number, damageIndex: number): number;
declare function AttachVehicleNitro(vehicle: number): void;
declare function AttachVehicleNitro(vehicle: number, attach: boolean): void;

declare function SetPlayerDimension(player: number, dimension: number): void;
declare function SetVehicleDimension(vehicle: number, dimension: number): void;
declare function SetObjectDimension(object: number, dimension: number): void;
declare function SetLightDimension(light: number, dimension: number): void;
declare function SetPickupDimension(pickup: number, dimension: number): void;
declare function SetText3DDimension(text3d: number, dimension: number): void;
declare function SetNPCDimension(npc: number, dimension: number): void;

declare function GetPlayerDimension(player: number): number;
declare function GetVehicleDimension(vehicle: number): number;
declare function GetObjectDimension(object: number): number;
declare function GetLightDimension(light: number): number;
declare function GetPickupDimension(pickup: number): number;
declare function GetText3DDimension(text3d: number): number;
declare function GetNPCDimension(npc: number): number;