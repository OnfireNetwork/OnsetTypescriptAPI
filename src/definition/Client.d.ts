
/** @noSelfInFile */

export declare function GetAllCollisions(): number[];
export declare function CreateCollisionBox(x: number, y: number, z: number, bx: number, by: number, bz: number): number;
export declare function CreateCollisionBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bVisible: boolean): number;
export declare function CreateCollisionSphere(x: number, y: number, z: number, radius: number): number;
export declare function CreateCollisionSphere(x: number, y: number, z: number, radius: number, bVisible: boolean): number;
export declare function DestroyCollision(collision: number): void;
export declare function SetCameraShakeLocation(XAmp: number, XFreq: number, YAmp: number, YFreq: number, ZAmp: number, ZFreq: number): void;
export declare function GetPlayerWeapon(player: number): number;
export declare function GetPlayerWeapon(player: number, weaponSlot: boolean): number;
export declare function StopCameraFade(): void;
export declare function ShowWeaponHUD(show: boolean): void;
export declare function DrawCircle3D(x: number, y: number, z: number, radius: number, r: number, g: number, b: number): number;
export declare function DrawCircle3D(x: number, y: number, z: number): number;
export declare function DrawRect(sX: number, sY: number, sW: number, sH: number): number;
export declare function DrawRect(sX: number, sY: number, sW: number, sH: number, r: number, g: number, b: number): number;
export declare function GetPackageName(): string;
export declare function GetPlayerBoneNames(): string;
export declare function GetScreenSize(): number;
export declare function PlayCameraShake(duration: number): void;
export declare function PlayCameraShake(duration: number, blendInTime: number, blendOutTime: number, scale: number): void;
export declare function SetWaypoint(slot: number, name: string, x: number, y: number, z: number): number;
/** @tupleReturn */
export declare function GetChatLocation(): [number, number];
export declare function SetCameraShakeFOV(FOVAmp: number, FOVFreq: number): void;
export declare function SetTextBoxAlignment(textId: number, x: number, y: number): void;
export declare function ShowHealthHUD(show: boolean): void;
export declare function ShowMouseCursor(bShow: boolean): void;
export declare function ScreenToWorld(x: number, y: number): number;
export declare function DrawBox(sX: number, sY: number, sW: number, sH: number): void;
export declare function DrawBox(sX: number, sY: number, sW: number, sH: number, thickness: number, r: number, g: number, b: number): void;
export declare function SetSunRadius(radius: number): void;
export declare function GetAllPlayersInBox(x: number, y: number, z: number, bx: number, by: number, bz: number): number[];
export declare function GetAllPlayersInBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bIncludeSelf: boolean): number[];
export declare function SetMoonShine(shine: number): void;
export declare function GetPlayerRotationRate(): number;
/** @tupleReturn */
export declare function GetMouseLocation(): [number, number];
//declare function GetPlayerCameraUpVector(): number;
export declare function SetTextBoxText(textid: number, text: string): void;
export declare function CreateTextBox(x: number, y: number, text: string, justification: any): number;
export declare function CreateTextBox(x: number, y: number, text: string): number;
export declare function SetStarsBrightness(brightness: number): void;
//declare function DrawTexture(): void;
//declare function WorldToScreen(x: number, y: number, z: number): void;
export declare function IsChatFocus(): boolean;
export declare function SetSunAzimuth(azimuth: number): void;
export declare function CreateSound(SoundFile: string, bLoop?: boolean): number;
//declare function GetPlayerMovementMode(player: number): void;
export declare function ImportPackage(PackageName: string): void;
export declare function SetOceanColor(HexColor: string): void;
export declare function GetMouseInputDelta(): number;
export declare function IsPlayerReloading(player: number): boolean;
export declare function IsPlayerAiming(player: number): boolean;
export declare function GetPlayerMovementSpeed(player: number): number;
export declare function IsPlayerInVehicle(player: number): boolean;
export declare function IsPlayerInVehicle(): boolean;
export declare function SetDrawScale(sx: number, sy: number): void;
export declare function SetSkyRotationSpeed(speed: number): void;
export declare function GetAllSounds(): number[];
export declare function LineTrace(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number): number;
export declare function LineTrace(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, complex: number): number;
export declare function ShowChat(show: boolean): void;
export declare function SetTextBoxAnchors(textid: number, minX: number, minY: number, maxX: number, maxY: number): void;
export declare function AddFunctionExport(ExportName: string, ExportFunction: any): void;
export declare function CreateSound3D(soundFile: string, x: number, y: number, z: number, radius?: number, bLoop?: boolean): number;
export declare function SetPlayerOutline(player: number, bEnable?: boolean): void;
export declare function IsValidSound(sound: number): boolean;
export declare function SetSoundVolume(sound: number, volume: number): void;
export declare function SetObjectCastShadow(object: number, bEnable: boolean): void;
export declare function DrawLine(sX: number, sY: number, eX: number, eY: number): number;
export declare function DrawLine(sX: number, sY: number, eX: number, eY: number, thickness: number, r: number, g: number, b: number): number;
export declare function SetFogDensity(density: number): void;
//declare function GetPlayerBoneLocation(player: number, BoneName: string [, BoneSpace]): void;
//declare function EnableObjectHitEvents(object [, bEnable]): void;
export declare function GetSoundCount(): number;
export declare function DestroyTextBox(textid: number): void;
//declare function GetInputAxisValue(AxisName: string): void;
export declare function AddPlayerChat(message: string): void;
export declare function DestroySound(sound: number): void;
export declare function SetPlayerRotationRate(RotationRate: number): void;
/** @tupleReturn */
export declare function GetPlayerCameraLocation(): [number, number, number];
export declare function GetAllCollisions(): number[];
export declare function GetTerrainHeight(sX: number, sY: number, sZ: number): number;
export declare function Base64Decode(base64: string): string;
export declare function GetGameVersion(): string;
//declare function GetPlayerCameraRightVector(): void;
export declare function SetObjectOutline(object: number): void;
export declare function SetObjectOutline(object: number, bEnable: boolean): void;
export declare function SetDrawColor(HexColor: string): void;
export declare function DrawLine3D(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number): void;
export declare function DrawLine3D(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, r: number, g: number, b: number): void;
export declare function SetChatLocation(x: number, y: number): void;
export declare function SetObjectEditable(object: number, editMode: boolean): void;
//declare function SetCameraShakeRotation(PitchAmp, PitchFreq, YawAmp, YawFreq, RollAmp, RollFreq): void;
export declare function DrawSolidBox3D(x: number, y: number, z: number, eX: number, eY: number, eZ: number, HexColor: string): number;
export declare function SetSkyLightIntensity(intensity: number): void;
export declare function GetTextSize(text: string): number;
export declare function GetTextSize(text: string, scale: number): number;
//declare function GetPlayerCameraRotation(): void;
export declare function GetStreamedLights(): number[];
export declare function DrawText(x: number, y: number, text: string): number;
export declare function SetTime(time: number): void;
export declare function IsMouseCursorEnabled(): boolean;
export declare function GetLightCount(): number;
export declare function SetMoonRadius(radius: number): void;
//declare function DeprojectMouseLocationToWorld(): void;
export declare function SetMoonLightIntensity(intensity: number): void;
export declare function SetSunLightIntensity(intensity: number): void;
export declare function SetSunShine(shine: number): void;
export declare function GetPing(): number;
//declare function GetNetworkStats(): void;
//declare function GetStreamedNPC(): void;
/** @tupleReturn */
export declare function GetNPCLocation(npc: number): [number, number, number];
export declare function GetNPCCount(): number;
//declare function SetInputMode(InputMode): void;
/** @tupleReturn */
export declare function GetLightLocation(light: number): [number, number, number];
export declare function SetNPCOutline(npc: number): void;
export declare function SetNPCOutline(npc: number, bEnable: boolean): void;
export declare function GetObjectScale(object: number): number;
//declare function SetWeather(weather): void;
export declare function GetObjectCount(): number;
export declare function GetTime(): number;
//declare function GetObjectBoundingBox(object: number): void;
export declare function GetObjectSize(object: number): number;
export declare function GetObjectModelCount(): number;
export declare function GetObjectModel(object: number): number;
export declare function AddEvent(EventName: string, LuaFunction: any): void;
/** @tupleReturn */
export declare function GetPickupLocation(pickupid: number): [number, number, number];
export declare function GetPickupCount(): number;
/** @tupleReturn */
export declare function GetPlayerLocation(player: number): [number, number, number];
export declare function GetAllPlayersInSphere(x: number, y: number, z: number, radius: number): number[];
export declare function GetAllPlayersInSphere(x: number, y: number, z: number, radius: number, bIncludeSelf: boolean): number[];
export declare function GetStreamedObjects(): number[];
export declare function GetStreamedObjects(bGetAttached: boolean): number[];
export declare function IsPlayerDead(player: number): boolean;
export declare function CallRemoteEvent(player: number, EventName: string, ...luaArgs: any): void;
export declare function AddRemoteEvent(RemoteEventName: string, LuaFunction: any): void;
//declare function GetObjectModelGroup(model): void;
//declare function GetObjectRotation(object): void;
export declare function CallEvent(EventName: string, ...userArgs: any): void;
export declare function GetPlayerCount(): number;
export declare function GetStreamedPlayers(): number[];
//declare function GetPlayerHeading(player: number): void;
export declare function IsValidPlayer(player: number): boolean;
export declare function GetStreamedPickups(): number[];
export declare function StopCameraShake(): void;
export declare function StopCameraShake(bImmediate: boolean): void;
export declare function GetPlayerArmor(player: number): number;
export declare function StartCameraFade(fromAlpha: number, toAlpha: number, duration: number, hexColor?: string): void;
export declare function SetSkySaturation(saturation: number): void;
export declare function GetMouseHitEntity(): number;
export declare function GetPlayerFOV(): number;
export declare function SetPlayerCameraRotation(x: number, y: number, z: number): void;
export declare function GetDistance3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;
export declare function GetTimeSeconds(): number;
//declare function VectorToRotation(x: number, y: number, z: number): void;
export declare function SetPlayerCameraLocation(x: number, y: number, z: number): void;
export declare function SetPlayerFOV(fov: number): void;
export declare function GetPlayerCameraViewDistance(): number;
export declare function SetObjectEditorSpeed(speed: number): void;
//declare function InvokeDamageFX(value): void;
export declare function IsPlayerInMainMenu(): boolean;
export declare function GetDeltaSeconds(): number;
export declare function GetDistanceSquared3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;
export declare function SetPlayerCameraViewDistance(distance: number): void;
export declare function DrawPoint3D(x: number, y: number, z: number, pointSize?: number, r?: number, g?: number, b?: number): number;
//declare function NormalizeVector(x: number, y: number, z: number): void;
export declare function GetTickCount(): number;
export declare function IsPlayerTalking(player: number): boolean;
export declare function GetPlayerHealth(player: number): number;
//declare function RotationToVector(x: number, y: number, z: number): void;
export declare function GetObjectMass(object: number): number;
//declare function GetMouseHitLocation(): void;
export declare function SetSoundPitch(sound: number, pitch: number): number;
export declare function GetSoundVolume(sound: number): number;
//declare function SetSoundFadeOut(sound, Duration, VolumeLevel): void;
export declare function GetDistance2D(x: number, y: number, x2: number, y2: number): number;
export declare function GetSoundPitch(sound: number): number;
export declare function IsFloatNearlyZero(Value: number): boolean;
export declare function GetVehicleModel(vehicle: number): number;
export declare function GetSoundDuration(sound: number): number;
export declare function GetText3DCount(): number;
/** @tupleReturn */
export declare function GetVehicleLocation(vehicle: number): [number, number, number];
export declare function IsValidTimer(timer: number): boolean;
export declare function CreateTimer(task: Function, interval: number, ...args: any[]): number;
//declare function GetVehicleRightVector(vehicle: number): void;
export declare function PauseTimer(timer: number): void;
export declare function GetVehicleHoodRatio(vehicle: number): number;
/** @tupleReturn */
export declare function GetVehicleDoorLocation(vehicle: number, door: number): [number, number, number];
//declare function GetVehicleForwardVector(vehicle): void;
export declare function IsVehicleHornActive(vehicle: number): boolean;
//declare function SetSoundFadeIn(sound [, Duration, VolumeLevel, StartTime]): void;
export declare function IsVehicleInAir(vehicle: number): boolean;
//declare function GetVehicleWheelSteerAngle(vehicle, wheel): void;
//declare function GetVehicleEngineState(vehicle: number): void;
//declare function IsVehicleSeatOccupied(vehicle: number, seat): void;
export declare function GetVehicleGear(vehicle: number): number;
export declare function IsVehicleInWater(vehicle: number): boolean;
export declare function IsVehicleWheelInAir(vehicle: number, wheel: number): boolean;
export declare function GetVehicleEngineRPM(vehicle: number): number;
export declare function GetVehicleForwardSpeed(vehicle: number): number;
export declare function GetAllTimers(): number[];
export declare function GetWebVisibility(web: number): boolean;
export declare function GetVehicleTrunkRatio(vehicle: number): number;
//declare function GetVehicleBoundingBox(vehicle): void;
export declare function LoadWebFile(web: number, file: string): void;
export declare function GetVehicleLightState(vehicle: number): boolean;
export declare function GetAllWebUI(): number[];
export declare function DestroyWebUI(web: number): void;
export declare function SetWebVisibility(web: number, visibility: boolean): void;
export declare function SetWebRotation(web: number, rx: number, ry: number, rz: number): void;
export declare function ExecuteWebJS(web: number, Javascript: string): void;
/** @tupleReturn */
export declare function GetText3DLocation(text3d: number): [number, number, number];
export declare function GetStreamedText3D(): number[];
//declare function GetVehicleWheelSurface(vehicle, wheel): void;
export declare function GetVehicleVelocity(vehicle: number): number;
export declare function GetStreamedVehicles(): number[];
export declare function IsValidVehicle(vehicle: number): boolean;
//declare function GetVehicleRotation(vehicle: number): void;
export declare function GetTimerCount(): number;
export declare function GetTimerRemainingTime(timer: number): number;
export declare function UnpauseTimer(timer: number): void;
export declare function DestroyTimer(timer: number): void;
export declare function CreateCountTimer(LuaFunction: any, Interval: number, Count: number, ...userArgs: any): void;
export declare function SetWebURL(web: number, URL: string): void;
export declare function SetWebLocation(web: number, x: number, y: number, z?: number): void;
export declare function SetWebSize(web: number, width: number, height: number): void;
export declare function GetVehicleCount(): number;
export declare function SetWebAnchors(web: number, minX: number, minY: number, maxX: number, maxY: number): void;
export declare function GetVehicleHealth(vehicle: number): number;
//declare function GetVehicleUpVector(vehicle: number): void;
export declare function SetWebAlignment(web: number, x: number, y: number): void;
export declare function GetWebUICount(): number;
export declare function SetIgnoreMoveInput(bIgnore: boolean): void;
export declare function CreateWebUI3D(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, FrameRate?: number): number;
export declare function SetIgnoreLookInput(bIgnore: boolean): void;
//declare function GetPlayerCameraForwardVector(): void;
export declare function IsShiftPressed(): boolean;
export declare function IsCtrlPressed(): boolean;
/** @tupleReturn */
export declare function GetObjectLocation(object: number): [number, number, number];
export declare function CreateWebUI(x: number, y: number, width: number, height: number, zOrder?: number, frameRate?: number): number;
export declare function GetPlayerVehicle(): number;