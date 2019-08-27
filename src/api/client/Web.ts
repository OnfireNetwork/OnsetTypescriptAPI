/** @noSelfInFile */

import { DestroyWebUI, LoadWebFile, SetWebURL, SetWebSize } from "../../definition/Client";

export default class Web {
    constructor(private id: number) {}
    public destroy() {
        DestroyWebUI(this.id);
    }
    public loadFile(file: string) {
        LoadWebFile(this.id, file);
    }
    public setURL(url: string) {
        SetWebURL(this.id, url);
    }
    public setSize(x: number, y: number) {
        SetWebSize(this.id, x, y);
    }
}