// This file is auto-generated, don't edit it
import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';
import { pick } from 'lodash';

export interface ISendSms {
  AccessKeyId?: string;
  AccessKeySecret?: string;
  // 签名
  signName?: string;
  // 模板
  templateCode?: string;
  // 手机号码
  phoneNumbers: number;
  // 模板变量
  templateParam: string;
}

export async function aliyunSendSms(params: ISendSms) {
  const {
    AccessKeyId,
    AccessKeySecret,
    signName,
    templateCode,
    phoneNumbers,
    templateParam,
  } = Object.assign(
    pick(process.env, [
      'AccessKeyId',
      'AccessKeySecret',
      'signName',
      'templateCode',
    ]),
    params,
  );
  const config = new $OpenApi.Config({
    accessKeyId: AccessKeyId,
    accessKeySecret: AccessKeySecret,
  });
  // 访问的域名
  config.endpoint = `dysmsapi.aliyuncs.com`;
  const client = new Dysmsapi20170525(config);
  const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
    signName,
    templateCode,
    phoneNumbers,
    templateParam,
  });
  const runtime = new $Util.RuntimeOptions({});
  return client.sendSmsWithOptions(sendSmsRequest, runtime).then(({ body }) => {
    console.log({ body });
    if (body.code === 'OK') return true;
    throw new Error(`${body.code}: ${body.message}`);
  });
}
