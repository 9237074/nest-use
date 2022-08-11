"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var AllExceptionFilter = /** @class */ (function () {
    function AllExceptionFilter() {
    }
    AllExceptionFilter.prototype.catch = function (exception, host) {
        common_1.Logger.log('AllExceptionFilter错误提示', exception);
        if (exception.message) {
            return rxjs_1.throwError(exception.message);
        }
        return rxjs_1.throwError({
            message: exception,
        });
    };
    AllExceptionFilter = __decorate([
        common_1.Catch()
    ], AllExceptionFilter);
    return AllExceptionFilter;
}());
exports.AllExceptionFilter = AllExceptionFilter;