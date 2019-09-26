/** @noSelfInFile */

class DefaultServerEventBridge implements EventBridge {
    private getHitEntity(hitType: HitType, hitId: number): NPC|Player|Vehicle|WorldObject|undefined {
        if(hitType === HitType.NPC){
            return Server.getWorld().getNPC(hitId);
        }
        if(hitType === HitType.PLAYER){
            return Server.getWorld().getPlayer(hitId);
        }
        if(hitType === HitType.VEHICLE){
            return Server.getWorld().getVehicle(hitId);
        }
        if(hitType === HitType.OBJECT){
            if(hitId > 0){
                return Server.getWorld().getObject(hitId);
            }
        }
    }
    register(bus: EventBus, name: string){
        if(name === 'ServerPlayerPickupEvent'){
            Server.listen('OnPlayerPickupHit', () => {
                bus.call(new ServerPlayerPickupEvent());
            });
        }
        if(name === 'ServerVehiclePickupEvent'){
            Server.listen('OnVehiclePickupHit', () => {
                bus.call(new ServerVehiclePickupEvent());
            });
        }
        if(name === 'ServerStreamInEvent'){
            Server.listen('OnPlayerStreamIn', (playerId: number, objectId: number) => {
                bus.call(new ServerStreamInEvent(Server.getWorld().getPlayer(objectId), Server.getWorld().getPlayer(playerId)));
            });
            Server.listen('OnVehicleStreamIn', (playerId: number, objectId: number) => {
                bus.call(new ServerStreamInEvent(Server.getWorld().getVehicle(objectId), Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerStreamOutEvent'){
            Server.listen('OnPlayerStreamOut', (playerId: number, objectId: number) => {
                bus.call(new ServerStreamOutEvent(Server.getWorld().getPlayer(objectId), Server.getWorld().getPlayer(playerId)));
            });
            Server.listen('OnVehicleStreamOut', (playerId: number, objectId: number) => {
                bus.call(new ServerStreamOutEvent(Server.getWorld().getVehicle(objectId), Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerPlayerJoinEvent'){
            Server.listen('OnPlayerJoin', (playerId: number) => {
                bus.call(new ServerPlayerJoinEvent(Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerPlayerQuitEvent'){
            Server.listen('OnPlayerQuit', (playerId: number) => {
                bus.call(new ServerPlayerQuitEvent(Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerPlayerSpawnEvent'){
            Server.listen('OnPlayerSpawn', (playerId: number) => {
                bus.call(new ServerPlayerSpawnEvent(Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerPlayerDeathEvent'){
            Server.listen('OnPlayerDeath', (playerId: number, killerId: number) => {
                let killer: Player|undefined = undefined;
                if(killerId !== undefined && IsValidPlayer(killerId)){
                    killer = Server.getWorld().getPlayer(killerId);
                }
                bus.call(new ServerPlayerDeathEvent(Server.getWorld().getPlayer(playerId), killer));
            });
        }
        if(name === 'ServerPlayerWeaponShotEvent'){
            Server.listen('OnPlayerWeaponShot', (playerId: number, weapon: WeaponModel, hitType: HitType, hitId: number, hitX: number, hitY: number, hitZ: number, startX: number, startY: number, normalX: number, normalY: number, normalZ: number) => {
                bus.call(new ServerPlayerWeaponShotEvent(Server.getWorld().getPlayer(playerId), weapon, hitType, this.getHitEntity(hitType, hitId), new Vector3d(hitX, hitY, hitZ), new Vector2d(startX, startY), new Vector3d(normalX, normalY, normalZ)));
            });
        }
        if(name === 'ServerPlayerDamageEvent'){
            Server.listen('OnPlayerDamage', (playerId: number, damageType: DamageType, amount: number) => {
                bus.call(new ServerPlayerDamageEvent(Server.getWorld().getPlayer(playerId), damageType, amount));
            });
        }
        if(name === 'ServerChatEvent'){
            Server.listen('OnPlayerChat', (playerId: number, message: string) => {
                bus.call(new ServerChatEvent(Server.getWorld().getPlayer(playerId), message));
            });
        }
        if(name === 'ServerChatCommandEvent'){
            Server.listen('OnPlayerChatCommand', (playerId: number, command: string, exists: number) => {
                bus.call(new ServerChatCommandEvent(Server.getWorld().getPlayer(playerId), command, exists === 1));
            });
        }
        if(name === 'ServerPlayerEnterVehicleEvent'){
            Server.listen('OnPlayerEnterVehicle', (playerId: number, vehicleId: number, seat: number) => {
                bus.call(new ServerPlayerEnterVehicleEvent(Server.getWorld().getPlayer(playerId), Server.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ServerPlayerExitVehicleEvent'){
            Server.listen('OnPlayerExitVehicle', (playerId: number, vehicleId: number, seat: number) => {
                bus.call(new ServerPlayerExitVehicleEvent(Server.getWorld().getPlayer(playerId), Server.getWorld().getVehicle(vehicleId), seat));
            });
        }
        if(name === 'ServerPlayerStateEvent'){
            Server.listen('OnPlayerStateChange', (playerId: number, newState: PlayerState, oldState: PlayerState) => {
                bus.call(new ServerPlayerStateEvent(Server.getWorld().getPlayer(playerId), newState, oldState));
            });
        }
        if(name === 'ServerVehicleRespawnEvent'){
            Server.listen('OnVehicleRespawn', () => {
                bus.call(new ServerVehicleRespawnEvent());
            });
        }
        if(name === 'GameTickEvent'){
            Server.listen('OnGameTick', (delta: number) => {
                bus.call(new GameTickEvent(delta));
            });
        }
        if(name === 'ServerConnectionRequestEvent'){
            Server.listen('OnClientConnectionRequest', (address: string, port: number) => {
                bus.call(new ServerConnectionRequestEvent(address, port));
            });
        }
        if(name === 'ServerPlayerConnectEvent'){
            Server.listen('OnPlayerServerAuth', (playerId: number) => {
                bus.call(new ServerPlayerConnectEvent(Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerPlayerAuthEvent'){
            Server.listen('OnPlayerSteamAuth', (playerId: number) => {
                bus.call(new ServerPlayerAuthEvent(Server.getWorld().getPlayer(playerId)));
            });
        }
        if(name === 'ServerDownloadFileEvent'){
            Server.listen('OnPlayerDownloadFile', (playerId: number, fileName: string, checksum: string) => {
                bus.call(new ServerDownloadFileEvent(Server.getWorld().getPlayer(playerId), fileName, checksum));
            });
        }
        if(name === 'PackageStartEvent'){
            Server.listen('OnPackageStart', () => {
                bus.call(new PackageStartEvent());
            });
        }
        if(name === 'PackageStopEvent'){
            Server.listen('OnPackageStop', () => {
                bus.call(new PackageStopEvent());
            });
        }
        if(name === 'ServerNPCArriveEvent'){
            Server.listen('OnNPCReachTarget', () => {
                bus.call(new ServerNPCArriveEvent());
            });
        }
        if(name === 'ServerNPCDamageEvent'){
            Server.listen('OnNPCDamage', () => {
                bus.call(new ServerNPCDamageEvent());
            });
        }
        if(name === 'ServerNPCSpawnEvent'){
            Server.listen('OnNPCSpawn', () => {
                bus.call(new ServerNPCSpawnEvent());
            });
        }
        if(name === 'ServerNPCDeathEvent'){
            Server.listen('OnNPCDeath', () => {
                bus.call(new ServerNPCDeathEvent());
            });
        }
    }
}