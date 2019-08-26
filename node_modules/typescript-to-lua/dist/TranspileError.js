"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranspileError extends Error {
    constructor(message, node) {
        super(message);
        this.node = node;
        this.name = "TranspileError";
    }
}
exports.TranspileError = TranspileError;
//# sourceMappingURL=TranspileError.js.map