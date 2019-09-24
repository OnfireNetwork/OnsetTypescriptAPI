/** @noSelfInFile */

interface EventBridge {
    register(bus: EventBus, name: string): void;
}