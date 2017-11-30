<template>
  <div id="app">
  <!--1. app-header首页头部导航  -->
    <app-header>首页</app-header>
 
  <!-- 2.  侧边栏  -->
    <transition name="side-menu-animate">
      <side-menu v-show="showMenu"></side-menu>
    </transition>

   <!-- 3.路由匹配组件显示的容器  -->
    <transition name="view-slide-animate">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
import SideMenu from "./components/SideMenu";
import AppHeader from "./components/AppHeader";
import bus from "./Bus.js"

export default {
  name: "app",
  components: {
    "side-menu": SideMenu,
    "app-header": AppHeader
  },
  data(){
    return{
      showMenu:false
    }
  },
  created(){
    bus.$on('toggleMenu',function(show){
      this.showMenu=show;
    }.bind(this));
  }
};
</script>

<style>
 .side-menu-animate-enter-active,.side-menu-animate-leave-active{
      transition: all 0.5s;
    }

    .side-menu-animate-enter,.side-menu-animate-leave-active{
      opacity: 0;
      transform: translateX(-100%);
    }

    .view-slide-animate-enter{
      transform: translateX(100%);
    }

    .view-slide-animate-enter-active{
      transition: all .5s;
    }

    .view-slide-animate-leave-active {
      position: absolute;
      transition: all .5s;
      transform: translate(-30%);
    }

</style>
