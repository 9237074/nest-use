"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliyunSendSms = void 0;
// This file is auto-generated, don't edit it
var dysmsapi20170525_1 = __importStar(require("@alicloud/dysmsapi20170525")), $Dysmsapi20170525 = dysmsapi20170525_1;
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
var $OpenApi = __importStar(require("@alicloud/openapi-client"));
var $Util = __importStar(require("@alicloud/tea-util"));
var lodash_1 = require("lodash");
function aliyunSendSms(params) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, AccessKeyId, AccessKeySecret, signName, templateCode, phoneNumbers, templateParam, config, client, sendSmsRequest, runtime;
        return __generator(this, function (_b) {
            _a = Object.assign(lodash_1.pick(process.env, [
                'AccessKeyId',
                'AccessKeySecret',
                'signName',
                'templateCode',
            ]), params), AccessKeyId = _a.AccessKeyId, AccessKeySecret = _a.AccessKeySecret, signName = _a.signName, templateCode = _a.templateCode, phoneNumbers = _a.phoneNumbers, templateParam = _a.templateParam;
            config = new $OpenApi.Config({
                accessKeyId: AccessKeyId,
                accessKeySecret: AccessKeySecret,
            });
            // 访问的域名
            config.endpoint = "dysmsapi.aliyuncs.com";
            client = new dysmsapi20170525_1.default(config);
            sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
                signName: signName,
                templateCode: templateCode,
                phoneNumbers: phoneNumbers,
                templateParam: templateParam,
            });
            runtime = new $Util.RuntimeOptions({});
            return [2 /*return*/, client.sendSmsWithOptions(sendSmsRequest, runtime).then(function (_a) {
                    var body = _a.body;
                    console.log({ body: body });
                    if (body.code === 'OK')
                        return true;
                    throw new Error(body.code + ": " + body.message);
                })];
        });
    });
}
exports.aliyunSendSms = aliyunSendSms;