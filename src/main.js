import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import IEcharts from 'vue-echarts-v3';

Vue.use(ElementUI)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
	if(to.path == '/page3' && !localStorage.getItem("username")){
		next('/404');
	}else{
		next();
	}
	// next('/page1');
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
