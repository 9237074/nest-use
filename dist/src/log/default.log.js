"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLogger = void 0;
const common_1 = require("@nestjs/common");
class DefaultLogger extends common_1.ConsoleLogger {
    constructor() {
        super(...arguments);
        this.debugEnv = ['develop', 'local'];
        this.isDebug = this.debugEnv.includes(process.env.NODE_ENV || '');
    }
    debug(message, context) {
        if (this.isDebug)
            super.debug(message, context);
    }
}
exports.DefaultLogger = DefaultLogger;
