import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { connect } from "./utils/socket"; // 导入 WebSocket 连接函数
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import "vant/lib/index.css"; // 引入 Vant 样式
import * as shareFunctions from "@/utils/shareFunctions";
import * as otherToolFunction from "@/utils/otherToolFunction";
import * as notifiFun from "@/utils/notifiFun";
import * as hireFun from "@/utils/hireFun";
import * as communityFun from "@/utils/communityFun";
import {
  Button,
  Tab,
  Tabs,
  Sticky,
  Swipe,
  SwipeItem,
  Picker,
  Popup,
  Field,
  CellGroup,
} from "vant";

import "swiper/swiper-bundle.css";

const app = createApp(App); // 将应用程序实例存储在变量 'app' 中

//vue tool不能使用時可以加入這一段
if (process.env.NODE_ENV === "development") {
  if ("__VUE_DEVTOOLS_GLOBAL_HOOK__" in window) {
    // 请注意，这里使用 'window' 而不是 'win'
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app; // 将应用程序实例赋值给 Vue Devtools
  }
}

app
  .use(store)
  .use(router)
  .use(Tabs)
  .use(Tab)
  .use(Button)
  .use(Sticky)
  .use(Swipe)
  .use(SwipeItem)
  .use(Picker)
  .use(Popup)
  .use(Field)
  .use(CellGroup)
  .mount("#app");

// 在应用启动时执行连接操作（全局連線）
connect();

// 注册全局函数
app.config.globalProperties.$shareFunctions = shareFunctions; // 注册整个 shareFunctions 对象
app.config.globalProperties.$otherToolFunction = otherToolFunction;
app.config.globalProperties.$notifiFun = notifiFun;
app.config.globalProperties.$hireFun = hireFun;
app.config.globalProperties.$communityFun = communityFun;
