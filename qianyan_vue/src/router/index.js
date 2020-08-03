import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

let router = new Router({
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(from.path=='/'){
      return {x:0,y:0}
    }
   
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component:()=>import('../views/index.vue'), 
      meta:{
        isShow:true,
        title:'首页',
        isLogin:true
      }
    },
    {
      path: '/shetuan',
      name: 'Shetuan',
      component:()=>import('../views/shetuan.vue'),
      meta:{
        isShow:true,
        title:'社团'
      }
    },
    {
      path: '/news',
      name: 'News',
      component:()=>import('../views/news.vue'),
      meta:{
        isShow:true,
        title:'消息'
      }
    },
    {
      path: '/my',
      name: 'My',
      component:()=>import('../views/my.vue'),
      meta:{
        isShow:true,
        title:'我的'
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component:()=>import('../views/detail.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component:()=>import('../views/login.vue')
    },
    {
      path: '/syset',
      name: 'Syset',
      component:()=>import('../views/outlogin.vue')
    },
    {
      path: '/write',
      name: 'Write',
      component:()=>import('../views/writemood.vue'),  
    },
    {
      path: '/test',
      name: 'Test',
      component:()=>import('../views/testlogin.vue'),  
    },
  ]

})
router.beforeEach((to,from,next)=>{
  // console.log("to",to);
  if(to.meta.isLogin==true){
    if(localStorage.getItem("usermsg")==null){
      router.push("/login")
    }else{
      next(); 
    }
  }else{
    next();
  }
})
export default router

