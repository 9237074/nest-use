"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.JwtAuthGuard = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var passport_1 = require("@nestjs/passport");
var decorators_1 = require("../../../decorators");
var JwtAuthGuard = /** @class */ (function (_super) {
    __extends(JwtAuthGuard, _super);
    function JwtAuthGuard() {
        return _super.call(this) || this;
    }
    JwtAuthGuard.prototype.canActivate = function (context) {
        var reflector = new core_1.Reflector();
        var isPublic = reflector.get(decorators_1.IS_PUBLIC, context.getHandler());
        if (isPublic)
            return true;
        return _super.prototype.canActivate.call(this, context);
    };
    JwtAuthGuard = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], JwtAuthGuard);
    return JwtAuthGuard;
}(passport_1.AuthGuard('jwt')));
exports.JwtAuthGuard = JwtAuthGuard;
