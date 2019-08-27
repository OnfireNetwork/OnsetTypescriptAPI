/** @noSelfInFile */

export default interface NetworkStats {
    packetlossTotal: number;
    packetlossLastSecond: number;
    messagesInResendBuffer: number, 
    bytesInResendBuffer: number, 
    bytesSend: number, 
    bytesReceived: number,
    bytesResent: number, 
    bytesSendTotal: number, 
    bytesReceivedTotal: number, 
    bytesResentTotal: number, 
    isLimitedByCongestionControl: boolean, 
    isLimitedByOutgoingBandwidthLimit: boolean
}