/** @noSelfInFile */

class EventBus {
    private bridges: EventBridge[] = [];
    private registered: string[] = [];
    private listeners: {[key: string]: ((event: any) => void)[]} = {};
    public listen(eventType: Class, handler: (event: any) => void){
        let eventTypeName = eventType.name;
        let ll = (this.listeners[eventTypeName] !== undefined)?this.listeners[eventTypeName]:[];
        ll.push(handler);
        this.listeners[eventTypeName] = ll;
        if(!this.registered.includes){
            for(let bridge of this.bridges){
                bridge.register(this, eventTypeName);
            }
            this.registered.push(eventTypeName);
        }
    }
    public call(event: Event){
        let eventTypeName = event.constructor.name;
        if(this.listeners[eventTypeName] !== undefined){
            for(let listener of this.listeners[eventTypeName]){
                listener(event);
            }
        }
    }
    public addBridge(bridge: EventBridge){
        this.bridges.push(bridge);
        for(let name of Object.keys(this.listeners)){
            bridge.register(this, name);
        }
    }
}