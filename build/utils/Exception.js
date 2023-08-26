"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = Exception;
