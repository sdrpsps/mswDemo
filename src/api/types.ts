/*
 * @Author: zhouxiangyang
 * @Email: hchow@hchow.icu
 * @Date: 2022-11-24 16:42:56
 * @LastEditTime: 2022-11-24 16:45:27
 * @FilePath: /mswDemo/src/api/types.ts
 * @Description:
 *
 * Copyright (c) 2022 by sdrpsps, All Rights Reserved.
 */
/* 文章列表请求参数 */
export interface articleData {
  id: number;
}
/* 文章列表结果 */
export interface articleRes {
  id: number;
  title: string;
  content: string;
  url: string;
}
/* 登陆结果 */
export interface loginRes {
    name: string;
    password: string;
    token: string;
  }
