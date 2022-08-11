"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var GatewayExceptionFilter = /** @class */ (function () {
    function GatewayExceptionFilter() {
    }
    GatewayExceptionFilter.prototype.catch = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var request = ctx.getRequest();
        var message = exception.message || exception;
        common_1.Logger.log('GatewayException错误提示', message);
        var errorResponse = {
            message: message,
            code: 500,
            url: request.originalUrl, // 错误的url地址
        };
        var status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        // 设置返回的状态码、请求头、发送错误信息
        response.status(status);
        response.header('Content-Type', 'application/json; charset=utf-8');
        response.send(errorResponse);
    };
    GatewayExceptionFilter = __decorate([
        common_1.Catch()
    ], GatewayExceptionFilter);
    return GatewayExceptionFilter;
}());
exports.GatewayExceptionFilter = GatewayExceptionFilter;