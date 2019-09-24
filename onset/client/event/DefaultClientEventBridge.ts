/** @noSelfInFile */

class DefaultClientEventBridge implements EventBridge {
    public register(bus: EventBus, name: string): void {
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