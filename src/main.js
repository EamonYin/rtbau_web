// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'   
import 'element-ui/lib/theme-chalk/index.css'   //引用 element-ui 样式
import qs from 'qs';

Vue.prototype.$qs = qs;
Vue.use(ElementUI )  //最后要use ElementUI ，不然会报错
Vue.prototype.$http=axios;//修改内部的$http为axios $http.get("") .post()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
