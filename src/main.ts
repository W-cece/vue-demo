// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";

const app = createApp(App)
// app.use(store)
app.use(router)
// app.use(table)
app.use(Antd)
app.mount("#app");
