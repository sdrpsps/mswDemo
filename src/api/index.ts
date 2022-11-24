/*
 * @Author: zhouxiangyang
 * @Email: hchow@hchow.icu
 * @Date: 2022-11-24 16:42:00
 * @LastEditTime: 2022-11-24 16:46:10
 * @FilePath: /mswDemo/src/api/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by sdrpsps, All Rights Reserved.
 */
import { http } from "@/utils/request";
import { articleData, articleRes, loginRes } from "./types";

export function getArticle(id: articleData) {
  return http.get<articleRes>(`/article/${id}`);
}

export function login() {
  return http.post<loginRes>(`/login`);
}
