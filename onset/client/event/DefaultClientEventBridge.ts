/** @noSelfInFile */

class DefaultClientEventBridge implements EventBridge {
    register(bus: EventBus, name: string){
        if(name === 'ClientKeyStateEvent'){
            Client.listen('OnKeyPress', (key: string) => {
                bus.call(new ClientKeyStateEvent(key, true));
            });
            Client.listen('OnKeyRelease', (key: string) => {
                bus.call(new ClientKeyStateEvent(key, false));
            });
        }
    }
}