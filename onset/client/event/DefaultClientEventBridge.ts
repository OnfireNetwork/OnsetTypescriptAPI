/** @noSelfInFile */

class DefaultClientEventBridge implements EventBridge {
    private getHitEntity(hitType: HitType, hitId: number): ClientNPC|ClientPlayer|ClientVehicle|ClientWorldObject|undefined {
        if(hitType === HitType.NPC){
            return Client.getWorld().getNPC(hitId);
        }
        if(hitType === HitType.PLAYER){
            return Client.getWorld().getPlayer(hitId);
        }
        if(hitType === HitType.VEHICLE){
            return Client.getWorld().getVehicle(hitId);
        }
        if(hitType === HitType.OBJECT){
            if(hitId > 0){
                return Client.getWorld().getObject(hitId);
            }
        }
    }
    public register(bus: EventBus, name: string): void {
        if(name === 'ClientCollisionEnterEvent'){
            Client.listen('OnCollisionEnter', (collisionId: number, hitType: HitType, hitId: number) => {
                bus.call(new ClientCollisionEnterEvent(Client.getWorld().getCollisionArea(collisionId), hitType, this.getHitEntity(hitType, hitId)));
            });
        }
        if(name === 'ClientCollisionLeaveEvent'){
            Client.listen('OnCollisionLeave', (collisionId: number, hitType: HitType, hitId: number) => {
                bus.call(new ClientCollisionLeaveEvent(Client.getWorld().getCollisionArea(collisionId), hitType, this.getHitEntity(hitType, hitId)));
            });
        }
        if(name === 'GameTickEvent'){
            Client.listen('OnGameTick', (delta: number) => {
                bus.call(new GameTickEvent(delta));
            });
        }
        if(name === 'ClientResolutionChangeEvent'){
            Client.listen('OnResolutionChange', (width: number, height: number) => {
                bus.call(new ClientResolutionChangeEvent(width, height));
            });
        }
        if(name === 'ClientScriptErrorEvent'){
            Client.listen('OnScriptError', (message: string) => {
                bus.call(new ClientScriptErrorEvent(message));
            });
        }
        if(name === 'ClientRenderHUDEvent'){
            Client.listen('OnRenderHUD', () => {
                bus.call(new ClientRenderHUDEvent());
            });
        }
        if(name === 'ClientChatCommandEvent'){
            Client.listen('OnPlayerChatCommand', (playerId: number, command: string, exists: number) => {
                bus.call(new ClientChatCommandEvent(Client.getWorld().getPlayer(playerId), command, exists === 1));
            });
        }
        if(name === 'ClientChatEvent'){
            Client.listen('OnPlayerChat', (playerId: number, message: string) => {
                bus.call(new ClientChatEvent(Client.getWorld().getPlayer(playerId), message));
            });
        }
        if(name === 'ClientPlayerSpawnEvent'){
            Client.listen('OnPlayerChat', (playerId: number) => {
                bus.call(new ClientPlayerSpawnEvent(Client.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ClientCrouchStateEvent'){
            Client.listen('OnPlayerCrouch', () => {
                bus.call(new ClientCrouchStateEvent(true));
            });
            Client.listen('OnPlayerEndCrouch', () => {
                bus.call(new ClientCrouchStateEvent(false));
            });
        }
        if(name === 'ClientFallStateEvent'){
            Client.listen('OnPlayerFall', () => {
                bus.call(new ClientFallStateEvent(true));
            });
            Client.listen('OnPlayerEndFall', () => {
                bus.call(new ClientFallStateEvent(false));
            });
        }
        if(name === 'ClientPlayerStartEnterVehicleEvent'){
            Client.listen('OnPlayerStartEnterVehicle', (vehicleId: number, seat: number) => {
                bus.call(new ClientPlayerStartEnterVehicleEvent(Client.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ClientPlayerStartExitVehicleEvent'){
            Client.listen('OnPlayerStartExitVehicle', (vehicleId: number, seat: number) => {
                bus.call(new ClientPlayerStartExitVehicleEvent(Client.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ClientPlayerEnterVehicleEvent'){
            Client.listen('OnPlayerEnterVehicle', (playerId: number, vehicleId: number, seat: number) => {
                bus.call(new ClientPlayerEnterVehicleEvent(Client.getWorld().getPlayer(playerId), Client.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ClientPlayerExitVehicleEvent'){
            Client.listen('OnPlayerLeaveVehicle', (playerId: number, vehicleId: number, seat: number) => {
                bus.call(new ClientPlayerExitVehicleEvent(Client.getWorld().getPlayer(playerId), Client.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ClientSwimStateEvent'){
            Client.listen('OnPlayerEnterWater', () => {
                bus.call(new ClientSwimStateEvent(true));
            });
            Client.listen('OnPlayerLeaveWater', () => {
                bus.call(new ClientSwimStateEvent(false));
            });
        }
        if(name === 'ClientPlayerDeathEvent'){
            Client.listen('OnPlayerDeath', (playerId: number, killerId: number) => {
                let killer: ClientPlayer|undefined = undefined;
                if(killerId !== undefined && IsValidPlayer(killerId)){
                    killer = Client.getWorld().getPlayer(killerId);
                }
                bus.call(new ClientPlayerDeathEvent(Client.getWorld().getPlayer(playerId), killer));
            });
        }
        if(name === 'ClientPlayerWeaponShotEvent'){
            Client.listen('OnPlayerWeaponShot', (playerId: number, weapon: WeaponModel, hitType: HitType, hitId: number, hitX: number, hitY: number, hitZ: number, startX: number, startY: number, normalX: number, normalY: number, normalZ: number) => {
                bus.call(new ClientPlayerWeaponShotEvent(Client.getWorld().getPlayer(playerId), weapon, hitType, this.getHitEntity(hitType, hitId), new Vector3d(hitX, hitY, hitZ), new Vector2d(startX, startY), new Vector3d(normalX, normalY, normalZ)));
            });
        }
        if(name === 'ClientReloadedEvent'){
            Client.listen('OnPlayerReloaded', () => {
                bus.call(new ClientReloadedEvent());
            });
        }
        if(name === 'ClientParachuteLandEvent'){
            Client.listen('OnPlayerParachuteLand', () => {
                bus.call(new ClientParachuteLandEvent());
            });
        }
        if(name === 'ClientSkydiveEndEvent'){
            Client.listen('OnPlayerSkydiveCrash', () => {
                bus.call(new ClientSkydiveEndEvent(true));
            });
            Client.listen('OnPlayerCancelSkydive', () => {
                bus.call(new ClientSkydiveEndEvent(false));
            });
        }
        if(name === 'ClientSkydiveBegineEvent'){
            Client.listen('OnPlayerSkydive', () => {
                bus.call(new ClientSkydiveBeginEvent());
            });
        }
        if(name === 'ClientParachuteStateEvent'){
            Client.listen('OnPlayerParachuteOpen', () => {
                bus.call(new ClientParachuteStateEvent(true));
            });
            Client.listen('OnPlayerParachuteClose', () => {
                bus.call(new ClientParachuteStateEvent(false));
            });
        }
        if(name === 'ClientObjectHitEvent'){
            Client.listen('OnObjectHit', (objectId: number, hitType: HitType, hitId: number, hitX: number, hitY: number, hitZ: number, normalX: number, normalY: number, normalZ: number) => {
                bus.call(new ClientObjectHitEvent(Client.getWorld().getObject(objectId), hitType, this.getHitEntity(hitType, hitId), new Vector3d(hitX, hitY, hitZ), new Vector3d(normalX, normalY, normalZ)));
            });
        }
        if(name === 'ClientObjectEditStateEvent'){
            Client.listen('OnPlayerBeginEditObject', (objectId: number) => {
                bus.call(new ClientObjectEditStateEvent(Client.getWorld().getObject(objectId), true));
            });
            Client.listen('OnPlayerEndEditObject', (objectId: number) => {
                bus.call(new ClientObjectEditStateEvent(Client.getWorld().getObject(objectId), false));
            });
        }
        if(name === 'ClientKeyStateEvent'){
            Client.listen('OnKeyPress', (key: string) => {
                bus.call(new ClientKeyStateEvent(key, true));
            });
            Client.listen('OnKeyRelease', (key: string) => {
                bus.call(new ClientKeyStateEvent(key, false));
            });
        }
        if(name === 'PackageStartEvent'){
            Client.listen('OnPackageStart', () => {
                bus.call(new PackageStartEvent());
            });
        }
        if(name === 'PackageStopEvent'){
            Client.listen('OnPackageStop', () => {
                bus.call(new PackageStopEvent());
            });
        }
        if(name === 'ClientStreamInEvent'){
            Client.listen('OnLightStreamIn', (lightId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getLight(lightId)));
            });
            Client.listen('OnNPCStreamIn', (npcId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getNPC(npcId)));
            });
            Client.listen('OnObjectStreamIn', (objectId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getObject(objectId)));
            });
            Client.listen('OnPickupStreamIn', (pickupId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getPickup(pickupId)));
            });
            Client.listen('OnPlayerStreamIn', (playerId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getPlayer(playerId)));
            });
            Client.listen('OnText3DStreamIn', (textId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().get3DText(textId)));
            });
            Client.listen('OnVehicleStreamIn', (vehicleId: number) => {
                bus.call(new ClientStreamInEvent(Client.getWorld().getVehicle(vehicleId)));
            });
        }
        if(name === 'ClientStreamOutEvent'){
            Client.listen('OnLightStreamOut', (lightId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getLight(lightId)));
            });
            Client.listen('OnNPCStreamOut', (npcId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getNPC(npcId)));
            });
            Client.listen('OnObjectStreamOut', (objectId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getObject(objectId)));
            });
            Client.listen('OnPickupStreamOut', (pickupId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getPickup(pickupId)));
            });
            Client.listen('OnPlayerStreamOut', (playerId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getPlayer(playerId)));
            });
            Client.listen('OnText3DStreamOut', (textId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().get3DText(textId)));
            });
            Client.listen('OnVehicleStreamOut', (vehicleId: number) => {
                bus.call(new ClientStreamOutEvent(Client.getWorld().getVehicle(vehicleId)));
            });
        }
        if(name === 'ClientSoundFinishedEvent'){
            Client.listen('OnSoundFinished', (soundId: number) => {
                bus.call(new ClientSoundFinishedEvent(Client.getSoundManager().get(soundId)));
            });
        }
        if(name === 'ClientWebUIReadyEvent'){
            Client.listen('OnWebLoadComplete', (webId: number) => {
                bus.call(new ClientWebUIReadyEvent(Client.getGraphics().getWebUI(webId)));
            });
        }
    }
}