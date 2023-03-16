import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import infiniteScroll from "vue-infinite-scroll";
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(infiniteScroll);
new Vue({
  render: h => h(App),
}).$mount('#app')
