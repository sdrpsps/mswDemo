/*
 * @Author: zhouxiangyang
 * @Email: hchow@hchow.icu
 * @Date: 2022-11-24 16:15:47
 * @LastEditTime: 2022-11-24 16:16:42
 * @FilePath: /mswDemo/src/mock/browser.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by sdrpsps, All Rights Reserved. 
 */
import { setupWorker } from "msw";
import { handlers, defaultHandlers } from "./handler";

export const mocker = setupWorker(...handlers, ...defaultHandlers);