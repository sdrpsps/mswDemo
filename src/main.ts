import "@/router/guard/index";
import pinia from "@/store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
import { createApp } from "vue";
import App from "./App.vue";
import { mocker } from "./mocks/browser";
import router from "./router";
import "./style.css";

if (import.meta.env.MODE === "dev") {
  mocker.start(
    // 对于没有 mock 的接口直接通过，避免异常
    { onUnhandledRequest: "bypass" }
  );
}

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.mount("#app");
