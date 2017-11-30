<template>
<div>
    <back-header>{{$route.params.gameid}}</back-header>
    <div class="category-game-box">
        <category-game-item v-for="r in roomlist" :room="r" key="categoryGameItem"></category-game-item>
    </div>
</div>
</template>


<script>
import BackHeader from "../components/BackHeader";
import CategoryGameItem from "../components/CategoryGameItem";
export default {
  name: "categoryRoom",
  components: {
    "back-header": BackHeader,
    "category-game-item": CategoryGameItem
  },
  data(){
      return{
          roomlist:[]
      }
  },
  created(){
      this.$http.get("/douyuapi/api/RoomApi/live/"+this.$route.params.categoryid)
      .then(function(res){
          this.roomlist=res.body.data;
      })
  }
};
</script>


<style scoped>
 .category-game-box {
        padding-top: 44px;
    }
</style>
