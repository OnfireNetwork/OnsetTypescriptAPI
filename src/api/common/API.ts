/** @noSelfInFile */

/// <reference path="../client/Client.ts" />
/// <reference path="../server/Server.ts" />
/// <reference path="../../definition/Common.d.ts" />

interface OnsetAPI {
    client: Client;
    server: Server;
}

const onsetAPI = {
    client: new Client(),
    server: new Server()
}

AddFunctionExport("api", () => onsetAPI);

const apiPackage = ImportPackage("onset-typescript-api") as OnsetAPI;
const firstPlayer = apiPackage.server.getPlayers()[0];
print(`Health of firstPlayer: ${firstPlayer.getHealth()}`);