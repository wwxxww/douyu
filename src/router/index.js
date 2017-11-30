import Vue from 'vue'
import Router from 'vue-router'
import Hot from "../pages/Hot"
import Category from "../pages/Category"
import CategoryRoom from "../pages/CategoryRoom"
import Recommend from "../pages/Recommend"
import UserCenter from "../pages/UserCenter"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hot',
      component: Hot 
    },
    {
      path:'/category',
      name:'category',
      component:Category
    },
    {
      path:'/categoryRoom/:categoryid/:gameid',
      name:'categoryroom',
      component:CategoryRoom
    },
    {
      path:'/recommend',
      name:'recommend',
      component:Recommend
    },
    {
      path:'/usercenter',
      name:'userCenter',
      component:UserCenter
    }
  ]
})
