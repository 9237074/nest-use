"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var AuthService = /** @class */ (function () {
    function AuthService(jwtService) {
        this.jwtService = jwtService;
    }
    AuthService.prototype.generateToken = function (_a) {
        var phone = _a.phone, code = _a.code;
        var payload = { phone: phone, code: code };
        var access_token = this.jwtService.sign(payload);
        return {
            access_token: access_token,
        };
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [jwt_1.JwtService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;