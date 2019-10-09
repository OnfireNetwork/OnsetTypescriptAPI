/** @noSelfInFile */

declare function GetPlayerId(): number;
declare function GetAllCollisions(): number[];
declare function CreateCollisionBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bVisible?: boolean): number;
declare function CreateCollisionSphere(x: number, y: number, z: number, radius: number, bVisible?: boolean): number;
declare function DestroyCollision(collision: number): void;
declare function SetCameraShakeLocation(XAmp: number, XFreq: number, YAmp: number, YFreq: number, ZAmp: number, ZFreq: number): void;
declare function StopCameraFade(): void;
declare function ShowWeaponHUD(show: boolean): void;
declare function DrawCircle3D(x: number, y: number, z: number, radius?: number, r?: number, g?: number, b?: number): number;
declare function DrawRect(sX: number, sY: number, sW: number, sH: number, r?: number, g?: number, b?: number): number;
declare function GetPlayerBoneNames(): string[];
/** @tupleReturn */
declare function GetScreenSize(): [number, number];
declare function PlayCameraShake(duration: number, blendInTime?: number, blendOutTime?: number, scale?: number): void;
declare function SetWaypoint(slot: number, name: string, x: number, y: number, z: number): number;
/** @tupleReturn */
declare function GetChatLocation(): [number, number];
declare function SetCameraShakeFOV(FOVAmp: number, FOVFreq: number): void;
declare function SetTextBoxAlignment(textId: number, x: number, y: number): void;
declare function ShowHealthHUD(show: boolean): void;
declare function ShowMouseCursor(bShow: boolean): void;
declare function ScreenToWorld(x: number, y: number): [boolean, number, number, number, number, number, number];
declare function DrawBox(sX: number, sY: number, sW: number, sH: number, thickness?: number, r?: number, g?: number, b?: number): void;
declare function SetSunRadius(radius: number): void;
declare function GetAllPlayersInBox(x: number, y: number, z: number, bx: number, by: number, bz: number, bIncludeSelf?: boolean): number[];
declare function SetMoonShine(shine: number): void;
declare function GetPlayerRotationRate(): number;
/** @tupleReturn */
declare function GetMouseLocation(): [number, number];
/** @tupleReturn */
declare function GetPlayerCameraUpVector(): [number, number, number];
declare function SetTextBoxText(textid: number, text: string): void;
declare function CreateTextBox(x: number, y: number, text: string, justification: string): number;
declare function SetStarsBrightness(brightness: number): void;
declare function WorldToScreen(x: number, y: number, z: number): [boolean, number, number];
declare function IsChatFocus(): boolean;
declare function SetSunAzimuth(azimuth: number): void;
declare function CreateSound(SoundFile: string, bLoop?: boolean): number;
declare function SetOceanColor(HexColor: number): void;
declare function GetMouseInputDelta(): number;
declare function IsPlayerInVehicle(player?: number): boolean;
declare function SetDrawScale(sx: number, sy: number): void;
declare function SetSkyRotationSpeed(speed: number): void;
declare function GetAllSounds(): number[];
/** @tupleReturn */
declare function LineTrace(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, complex?: boolean): [number, number, number, number, number, number]|false;
declare function ShowChat(show: boolean): void;
declare function SetTextBoxAnchors(textid: number, minX: number, minY: number, maxX: number, maxY: number): void;
declare function CreateSound3D(soundFile: string, x: number, y: number, z: number, radius?: number, bLoop?: boolean): number;
declare function SetPlayerOutline(player: number, bEnable?: boolean): void;
declare function IsValidSound(sound: number): boolean;
declare function SetSoundVolume(sound: number, volume: number): void;
declare function SetObjectCastShadow(object: number, bEnable: boolean): void;
declare function DrawLine(sX: number, sY: number, eX: number, eY: number, thickness?: number, r?: number, g?: number, b?: number): number;
declare function SetFogDensity(density: number): void;
/** @tupleReturn */
declare function GetPlayerBoneLocation(player: number, BoneName: string, BoneSpace?: number): [number,number,number];
declare function EnableObjectHitEvents(objectId: number, enable?: boolean): void;
declare function GetSoundCount(): number;
declare function DestroyTextBox(textid: number): void;
declare function GetInputAxisValue(axisName: string): number;
declare function AddPlayerChat(message: string): void;
declare function DestroySound(sound: number): void;
declare function SetPlayerRotationRate(RotationRate: number): void;
/** @tupleReturn */
declare function GetPlayerCameraLocation(): [number, number, number];
declare function GetAllCollisions(): number[];
declare function GetTerrainHeight(sX: number, sY: number, sZ: number): number;
/** @tupleReturn */
declare function GetPlayerCameraRightVector(): [number, number, number];
declare function SetObjectOutline(object: number, bEnable?: boolean): void;
declare function SetDrawColor(HexColor: number): void;
declare function DrawLine3D(sX: number, sY: number, sZ: number, eX: number, eY: number, eZ: number, r?: number, g?: number, b?: number): void;
declare function SetChatLocation(x: number, y: number): void;
declare function SetObjectEditable(object: number, editMode: boolean): void;
declare function SetCameraShakeRotation(PitchAmp: number, PitchFreq: number, YawAmp: number, YawFreq: number, RollAmp: number, RollFreq: number): void;
declare function DrawSolidBox3D(x: number, y: number, z: number, eX: number, eY: number, eZ: number, HexColor: number): number;
declare function SetSkyLightIntensity(intensity: number): void;
declare function GetTextSize(text: string, scale?: number): number;
/** @tupleReturn */
declare function GetPlayerCameraRotation(): [number, number, number];
declare function GetStreamedLights(): number[];
declare function DrawText(x: number, y: number, text: string): number;
declare function SetTime(time: number): void;
declare function IsMouseCursorEnabled(): boolean;
declare function SetMoonRadius(radius: number): void;
declare function DeprojectMouseLocationToWorld(): [number,number,number,number,number,number]|false;
declare function SetMoonLightIntensity(intensity: number): void;
declare function SetSunLightIntensity(intensity: number): void;
declare function SetSunShine(shine: number): void;
declare function GetPing(): number;
//declare function GetNetworkStats(): void;
declare function GetStreamedNPC(): number[];
declare function SetInputMode(mode: string): void;
/** @tupleReturn */
declare function GetLightLocation(light: number): [number, number, number];
declare function SetNPCOutline(npc: number, bEnable?: boolean): void;
declare function SetWeather(weather: number): void;
declare function GetTime(): number;
/** @tupleReturn */
declare function GetObjectBoundingBox(object: number): [number,number,number,number,number,number];
/** @tupleReturn */
declare function GetObjectSize(object: number): [number,number,number];
/** @tupleReturn */
declare function GetPickupLocation(pickupid: number): [number, number, number];
declare function GetAllPlayersInSphere(x: number, y: number, z: number, radius: number, bIncludeSelf?: boolean): number[];
declare function GetStreamedObjects(bGetAttached?: boolean): number[];
declare function GetObjectModelGroup(model: number): string;
/** @tupleReturn */
declare function GetObjectRotation(object: number): [number,number,number];
declare function GetStreamedPlayers(): number[];
declare function GetPlayerHeading(player: number): number;
declare function GetStreamedPickups(): number[];
declare function StopCameraShake(bImmediate?: boolean): void;
declare function StartCameraFade(fromAlpha: number, toAlpha: number, duration: number, hexColor?: number): void;
declare function SetSkySaturation(saturation: number): void;
/** @tupleReturn */
declare function GetMouseHitEntity(): [number,number];
declare function GetPlayerFOV(): number;
declare function SetPlayerCameraRotation(x: number, y: number, z: number): void;
/** @tupleReturn */
declare function VectorToRotation(x: number, y: number, z: number): [number,number,number];
declare function SetPlayerCameraLocation(x: number, y: number, z: number): void;
declare function SetPlayerFOV(fov: number): void;
declare function GetPlayerCameraViewDistance(): number;
declare function SetObjectEditorSpeed(speed: number): void;
declare function InvokeDamageFX(value: number): void;
declare function IsPlayerInMainMenu(): boolean;
declare function GetDistanceSquared3D(x: number, y: number, z: number, x2: number, y2: number, z2: number): number;
declare function SetPlayerCameraViewDistance(distance: number): void;
declare function DrawPoint3D(x: number, y: number, z: number, pointSize?: number, r?: number, g?: number, b?: number): number;
/** @tupleReturn */
declare function NormalizeVector(x: number, y: number, z: number): [number,number,number];
/** @tupleReturn */
declare function RotationToVector(x: number, y: number, z: number): [number,number,number];
declare function GetObjectMass(object: number): number;
/** @tupleReturn */
declare function GetMouseHitLocation(): [number, number, number];
declare function SetSoundPitch(sound: number, pitch: number): number;
declare function GetSoundVolume(sound: number): number;
declare function SetSoundFadeOut(sound: number, Duration: number, VolumeLevel: number): void;
declare function GetSoundPitch(sound: number): number;
declare function IsFloatNearlyZero(Value: number): boolean;
declare function GetSoundDuration(sound: number): number;
/** @tupleReturn */
declare function GetVehicleRightVector(vehicle: number): [number,number,number];
declare function GetVehicleDoorLocation(vehicle: number, door: number): boolean;
/** @tupleReturn */
declare function GetVehicleForwardVector(vehicle: number): [number,number,number];
/** @tupleReturn */
declare function GetVehicleVelocity(vehicle: number): [number,number,number];
declare function IsVehicleHornActive(vehicle: number): boolean;
declare function SetSoundFadeIn(sound: number, Duration?: number, VolumeLevel?: number, StartTime?: number): void;
declare function IsVehicleInAir(vehicle: number): boolean;
declare function GetVehicleWheelSteerAngle(vehicle: number, wheel: number): number;
declare function IsVehicleSeatOccupied(vehicle: number, seat: number): boolean;
declare function IsVehicleInWater(vehicle: number): boolean;
declare function IsVehicleWheelInAir(vehicle: number, wheel: number): boolean;
declare function GetVehicleEngineRPM(vehicle: number): number;
declare function GetVehicleForwardSpeed(vehicle: number): number;
declare function GetWebVisibility(web: number): boolean;
/** @tupleReturn */
declare function GetVehicleBoundingBox(vehicle: number): [number,number,number,number,number,number];
declare function LoadWebFile(web: number, file: string): void;
declare function GetAllWebUI(): number[];
declare function DestroyWebUI(web: number): void;
declare function SetWebVisibility(web: number, visibility: boolean): void;
declare function SetWebRotation(web: number, rx: number, ry: number, rz: number): void;
declare function ExecuteWebJS(web: number, Javascript: string): void;
/** @tupleReturn */
declare function GetText3DLocation(text3d: number): [number, number, number];
declare function GetStreamedText3D(): number[];
declare function GetVehicleWheelSurface(vehicle: number, wheel: number): string;
declare function GetStreamedVehicles(): number[];
declare function SetWebURL(web: number, URL: string): void;
declare function SetWebLocation(web: number, x: number, y: number, z?: number): void;
declare function SetWebSize(web: number, width: number, height: number): void;
declare function SetWebAnchors(web: number, minX: number, minY: number, maxX: number, maxY: number): void;
/** @tupleReturn */
declare function GetVehicleUpVector(vehicle: number): [number,number,number];
declare function SetWebAlignment(web: number, x: number, y: number): void;
declare function GetWebUICount(): number;
declare function SetIgnoreMoveInput(bIgnore: boolean): void;
declare function CreateWebUI3D(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, FrameRate?: number): number;
declare function CreateRemoteWebUI3D(x: number, y: number, z: number, rx: number, ry: number, rz: number, width: number, height: number, FrameRate?: number): number;
declare function SetIgnoreLookInput(bIgnore: boolean): void;
/** @tupleReturn */
declare function GetPlayerCameraForwardVector(): [number, number, number];
declare function IsShiftPressed(): boolean;
declare function IsCtrlPressed(): boolean;
declare function IsCmdPressed(): boolean;
declare function IsAltPressed(): boolean;
declare function CreateWebUI(x: number, y: number, width: number, height: number, zOrder?: number, frameRate?: number): number;
declare function CreateRemoteWebUI(x: number, y: number, width: number, height: number, zOrder?: number, frameRate?: number): number;
declare function ReplaceObjectModelMesh(modelId: number, file: string): boolean;
declare function DoesPakExist(name: string): boolean
declare function LoadPak(name: string, rootPath: string, contentPath: string): boolean;
declare function ConnectToServer(address: string, port: number, password?: string): void;
declare function AddRemoteEvent(remoteEventName: string, handler: Function): void;
declare function CallRemoteEvent(eventName: string, ...args: any[]): boolean;
declare function SetOceanWaterLevel(level: number, includeSwimmingLevel?: boolean): void;
declare function ResetOceanColor(): void;
declare function CreateFireworks(modelId: number, x: number, y: number, z: number, rx: number, ry: number, rz: number): void;
declare function SetMouseLocation(x: number, y: number): void;

//Properties
declare function SetVehiclePropertyValue(vehicle: number, name: string, value: any): void;
declare function SetPlayerPropertyValue(player: number, name: string, value: any): void;
declare function SetObjectPropertyValue(object: number, name: string, value: any): void;
declare function SetNPCPropertyValue(npc: number, name: string, value: any): void;
declare function SetText3DPropertyValue(text: number, name: string, value: any): void;
declare function SetPickupPropertyValue(pickup: number, name: string, value: any): void;