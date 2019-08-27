/** @noSelfInFile */

import {
    SetVehicleDimension,
    GetVehicleDimension,
    DestroyVehicle,
    IsValidVehicle,
    GetVehicleDriver,
    GetVehicleNumberOfSeats,
    GetVehicleColor,
    SetVehicleColor,
    GetVehicleGear,
    SetVehicleDamage,
    GetVehicleDamage,
    GetVehicleHealth,
    SetVehicleHealth,
    SetVehicleHeading,
    GetVehicleHeading,
    GetVehicleRotation,
    GetVehicleModel,
    GetVehicleLocation,
    SetVehicleLocation,
    SetVehicleRotation,
    SetVehicleLicensePlate,
    GetVehiclePassenger,
    GetVehicleInteriorColor,
    SetVehicleLinearVelocity,
    SetVehicleAngularVelocity,
    SetVehicleHoodRatio,
    GetVehicleHoodRatio,
    SetVehicleTrunkRatio,
    GetVehicleTrunkRatio,
    StartVehicleEngine,
    StopVehicleEngine,
    GetVehicleEngineState,
    AttachVehicleNitro,
    SetVehicleLightEnabled,
    GetVehicleLightState,
    GetVehicleLightColor
} from "../../definition/Server";
import Player from "./Player";
import Vector3d from "../common/Vector3d";

export default class Vehicle {
    constructor(private id: number){}
    
    public setDimension(dimensionId: number): void {
        SetVehicleDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetVehicleDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyVehicle(this.id);
    }
    public isValid(): boolean {
        return IsValidVehicle(this.id);
    }
    public getDriver(): Player {
        return new Player(GetVehicleDriver(this.id));
    }
    public getNumberOfSeats(): number {
        return GetVehicleNumberOfSeats(this.id);
    }
    public getModel(): number {
        return GetVehicleModel(this.id);
    }
    public getLocation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleLocation(this.id));
    }
    public setLocation(x: number, y: number, z: number) {
        SetVehicleLocation(this.id, x, y, z);
    }
    public getRotation(): Vector3d {
        return Vector3d.fromTuple(GetVehicleRotation(this.id));
    }
    public setRotation(rx: number, ry: number, rz: number): void {
        SetVehicleRotation(this.id, rx, ry, rz);
    }
    public getHeading(): number {
        return GetVehicleHeading(this.id);
    }
    public setHeading(heading: number): void {
        SetVehicleHeading(this.id, heading);
    }
    public getHealth(): number {
        return GetVehicleHealth(this.id);
    }
    public setHealth(health: number): void {
        SetVehicleHealth(this.id, health);
    }
    public setLicensePlate(license: string) {
        SetVehicleLicensePlate(this.id, license);
    }
    public getPassgener(seat: number): Player {
        return new Player(GetVehiclePassenger(this.id, seat));
    }
    public getColor(): number {
        return GetVehicleColor(this.id);
    }
    public setColor(color: number): void {
        SetVehicleColor(this.id, color);
    }
    public getInteriorColor(): number {
        return GetVehicleInteriorColor(this.id);
    }
    public setLinearVelocity(x: number, y: number, z: number): void {
        SetVehicleLinearVelocity(this.id, x, y, z);
    }
    public SetVehicleAngularVelocity(rx: number, ry: number, rz: number): void {
        SetVehicleAngularVelocity(this.id, rx, ry, rz);
    }
    public getGear(): number {
        return GetVehicleGear(this.id);
    }
    public setHookRatio(ratio: number): void {
        SetVehicleHoodRatio(this.id, ratio);
    }
    public getHookRatio(): number {
        return GetVehicleHoodRatio(this.id);
    }
    public setTrunkRatio(ratio: number): void {
        SetVehicleTrunkRatio(this.id, ratio);
    }
    public getTrunkRation(): number {
        return GetVehicleTrunkRatio(this.id);
    }
    public startEngine(): void {
        StartVehicleEngine(this.id);
    }
    public stopEngine(): void {
        StopVehicleEngine(this.id);
    }
    public getEngineState(): boolean {
        return GetVehicleEngineState(this.id);
    }
    public getDamage(damageIndex: number): number {
        return GetVehicleDamage(this.id, damageIndex);
    }
    public setDamage(damage: number, damageIndex: number): void {
        SetVehicleDamage(this.id, damageIndex, damage);
    }
    public attachNitro(attach?: boolean): void {
        AttachVehicleNitro(this.id, attach);
    }
    public setLightEnabled(enabled: boolean) {
        SetVehicleLightEnabled(this.id, enabled);
    }
    public getLightState(): boolean {
        return GetVehicleLightState(this.id);
    }
    public getLightColor(): number {
        return GetVehicleLightColor(this.id);
    }
}