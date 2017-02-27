import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import guide from 'components/guide'
import index from 'components/index'
import home from 'components/home'
import product from 'components/product'
import zhanghu from 'components/zhanghu'
import login from 'components/login'
import register from 'components/register'
import jiaoyi from 'components/jiaoyi'
import yanzheng from 'components/yanzheng'
import yinhangka from 'components/yinhangka'
import set from 'components/set'
import login_after from 'components/login_after'
import updata from 'components/updata'
import opinion from 'components/opinion'
import amend from 'components/amend'
import page from 'components/page'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
    	path:'/index',
    	name:'index',
    	component:index,
    	children:[
	    	{
		    	path:'home',
		    	name:'home',
		    	component:home
		    },
		    {
		    	path:'product',
		    	name:'product',
		    	component:product
		    },
		    {
		    	path:'zhanghu',
		    	name:'zhanghu',
		    	component:zhanghu
		    },
            {
                path:'login_after',
                name:'login_after',
                component:login_after
            }
		    
    	]
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },
    {
    	path:'/register',
    	name:'register',
    	component:register
    },
    {
    	path:"/jiaoyi",
    	name:"jiaoyi",
    	component:jiaoyi
    },
    {
    	path:"/yanzheng",
    	name:"yanzheng",
    	component:yanzheng
    },
    {
    	path:"/yinhangka",
    	name:"yinhangka",
    	component:yinhangka
    },
    {
    	path:"/set",
    	name:"set",
    	component:set
    },
    {
    	path:"/updata",
    	name:"updata",
    	component:updata
    },
    {
    	path:"/opinion",
    	name:"opinion",
    	component:opinion
    },
    {
    	path:"/amend",
    	name:"amend",
    	component:amend
    }
    
  ]
})
