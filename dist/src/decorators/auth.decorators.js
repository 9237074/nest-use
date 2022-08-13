"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPublic = exports.IS_PUBLIC = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC = 'IsPublic';
const IsPublic = () => common_1.SetMetadata(exports.IS_PUBLIC, true);
exports.IsPublic = IsPublic;
