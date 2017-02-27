// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import tool from './libs/tool'
import apiConfig from './config-api'

tool.install(Vue)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.apiConfig = apiConfig;
Vue.__Developing = true ;
Vue.__Basepath = 'http://localhost:3333/'
Vue.__HttpMethod = 'JSONP'
Vue.http.options.emulateJSON = true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created (){
  	setTimeout(function(){
  	//console.log(Vuex)

  	},1000)
  }
})
