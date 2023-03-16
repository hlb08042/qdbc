import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import infiniteScroll from "vue-infinite-scroll";
import "element-ui/lib/theme-chalk/index.css";
import "default-passive-events";
// import ElTableInfiniteScroll from 'el-table-infinite-scroll';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(infiniteScroll);
// Vue.use(ElTableInfiniteScroll);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
