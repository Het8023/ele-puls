import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

// 引入路由
import router from "./router";

// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 引入element plus icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "./utils";

const app = createApp(App);

// 注册element plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //   app.component(key, component);
  app.component(`el-icon-${toLine(key)}`, component);
}

app.use(ElementPlus);
app.use(router);
app.mount("#app");
