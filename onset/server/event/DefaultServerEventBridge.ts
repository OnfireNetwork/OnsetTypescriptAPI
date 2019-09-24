/** @noSelfInFile */

class DefaultServerEventBridge implements EventBridge {
    register(bus: EventBus, name: string){
        if(name === 'ServerPlayerEnterVehicleEvent'){
            Server.listen('OnPlayerEnterVehicle', (playerId: number, vehicleId: number, seat: number) => {
                bus.call(new ServerPlayerEnterVehicleEvent(Server.getWorld().getPlayer(playerId), Server.getWorld().getVehicle(vehicleId), seat));
            });
        }
    }
}