import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
      	{
      		path: '/page1',
      		alias: '/',
      		component: resolve => require(['../components/page/page1.vue'], resolve),
      	},
      	{
      		path: '/page2',
      		component: resolve => require(['../components/page/page2.vue'], resolve),
      	},
      	{
      		path: '/page3',
      		component: resolve => require(['../components/page/page3.vue'], resolve),
      	},
        {
          path: '/page4',
          component: resolve => require(['../components/page/page4.vue'], resolve),
          children: [
            {
              path: '/page4/app',
              alias: '/page4',
              component: resolve => require(['../components/page/page4app.vue'], resolve),
            },
            {
              path: '/page4/pc',
              component: resolve => require(['../components/page/page4pc.vue'], resolve),
            },
          ]
        },
      	{
      		path: '/404',
      		component: resolve => require(['../components/page/404.vue'], resolve),
      	},

      ]
    }
  ]
})
