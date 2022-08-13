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
Object.defineProperty(exports, "__esModule", { value: true });
exports.aliyunSendSms = void 0;
// This file is auto-generated, don't edit it
const dysmsapi20170525_1 = __importStar(require("@alicloud/dysmsapi20170525")), $Dysmsapi20170525 = dysmsapi20170525_1;
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
const $OpenApi = __importStar(require("@alicloud/openapi-client"));
const $Util = __importStar(require("@alicloud/tea-util"));
const lodash_1 = require("lodash");
async function aliyunSendSms(params) {
    const { AccessKeyId, AccessKeySecret, signName, templateCode, phoneNumbers, templateParam, } = Object.assign(lodash_1.pick(process.env, [
        'AccessKeyId',
        'AccessKeySecret',
        'signName',
        'templateCode',
    ]), params);
    const config = new $OpenApi.Config({
        accessKeyId: AccessKeyId,
        accessKeySecret: AccessKeySecret,
    });
    // 访问的域名
    config.endpoint = `dysmsapi.aliyuncs.com`;
    const client = new dysmsapi20170525_1.default(config);
    const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
        signName,
        templateCode,
        phoneNumbers,
        templateParam,
    });
    const runtime = new $Util.RuntimeOptions({});
    return client.sendSmsWithOptions(sendSmsRequest, runtime).then(({ body }) => {
        console.log({ body });
        if (body.code === 'OK')
            return true;
        throw new Error(`${body.code}: ${body.message}`);
    });
}
exports.aliyunSendSms = aliyunSendSms;
