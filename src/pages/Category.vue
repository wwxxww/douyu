<template>
  <div>
      <!-- 1.头部导航 -->
      <app-header>全部分类</app-header>

      <!-- 2.游戏全部分类列表部分 -->
      <div class="game-box">
          <!-- 最外层a标签，设置跳转路径，携带参数 -->
          <router-link v-for="g in gameList" :to="'/categoryRoom/'+ g.cate_id+'/'+g.game_name" key="gameList">
          <!-- 需要注意的是：这是游戏全部分类的父组件，需要绑定自定义属性对子组件传值。 -->
              <game-item :game="g"></game-item>
          </router-link>
      </div>
  </div>
</template>


<script>
import AppHeader from "../components/AppHeader";
import GameItem from "../components/GameItem";

export default {
  name: "category",
  data: function() {
    return {
      gameList: []
    };
  },
  components: {
    "app-header": AppHeader,
    "game-item": GameItem
  },
  // 使用vue-resource获取数据
  created: function() {
    this.$http.get("/douyuapi/api/RoomApi/game").then(
      function(res) {
        this.gameList = res.body.data;
      },
      function() {
        alert("请求失败");
      }
    );
  }
};
</script>


<style scoped>
.game-box {
  padding-top: 44px;
}
</style>

