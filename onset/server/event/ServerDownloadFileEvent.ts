/** @noSelfInFile */

class ServerDownloadFileEvent implements ServerEvent {
    constructor(public player: Player, public fileName: string, public checksum: string){}
}