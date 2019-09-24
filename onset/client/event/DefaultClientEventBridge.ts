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
        if(name === 'ClientChatCommandEvent'){
            Client.listen('OnPlayerChatCommand', (playerId: number, command: string, exists: number) => {
                bus.call(new ClientChatCommandEvent(Client.getWorld().getPlayer(playerId), command, exists === 1));
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
        if(name === 'GameTickEvent'){
            Client.listen('OnGameTick', (delta: number) => {
                bus.call(new GameTickEvent(delta));
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
    }
}