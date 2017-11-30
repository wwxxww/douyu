import Vue from 'vue'
import App from './App'
import router from './router'
import FontAwesome from "./assets/Font-Awesome/css/font-awesome.css"
// 引入vue-resource，再在Vue实例上引用。
import VueResource from "vue-resource"
Vue.use(VueResource);

Vue.config.productionTip = false

// 创建格式化人数的过滤器
Vue.filter("formatNumber", function(num) {
	return num < 10000 ? num : (num / 10000).toFixed(2) + "万";
});


new Vue({ 
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function fontSize(){
  var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if(deviceWidth > 640){
      deviceWidth = 640;
  }
  var fontSize = deviceWidth / 6.4;
  document.getElementsByTagName("html")[0].style.fontSize = fontSize;
}
fontSize();
            
window.onresize = function(){
	fontSize();
}