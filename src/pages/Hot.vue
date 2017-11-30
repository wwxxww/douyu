<template>

<div class="root">
  
    <!-- 特别需要注意的是：在进行状态比较的时候，一定要记得是 == 而不是 = ，要不然永远就是全等了！ -->
    <p v-if="status=='fail'">网络出问题了</p>
    <span v-if="status=='loading'" class="icon-refresh icon-spin"></span>

    <!-- 页面加载数据成功后，显示主页的主题内容HomeItem.vue父组件的内容 -->
    <div class="room-list" v-if="status=='success'">
        <home-item v-for="room in roomlist" :room="room" key="home-item"></home-item>
    </div>

    <p v-if="status=='success'" class="loading-icon">
        <span  class="icon-refresh icon-spin"></span>
    </p>
</div>
</template>


<script>
import AppHeader from "../components/AppHeader";
import HomeItem from "../components/HomeItem";

export default {
  name: "hot",
  components: {
    "app-header": AppHeader,
    "home-item": HomeItem
  },
  data() {
    return {
      roomlist: [],
      status: "loading",
      isloadingMore: false
    };
  },
  created() {
    this.getRoomList();
    window.onscroll = this.didScroll;
  },
  methods: {
    getRoomList() {
      // 使用vue-resource发送请求
      this.$http
        .get("/douyuapi/api/RoomApi/live", {
          emulateHTTP: false
        })
        .then(
          function(res) {
            if (res.body.error != 0) {
              this.status = "fail";
            } else {
              this.status = "success";
              this.roomlist = res.body.data;
            }
          },
          function(err) {
            this.status = "fail";
          }
        );
    },
    didScroll() {
      // 页面的文档高度
      var contentHeight = document.body.clientHeight;
      // 滚动条距顶部距离(页面超出窗口的高度)
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 浏览器的高度(不太准确)
      var windowH = window.innerHeight;

      // console.log("页面的文档高度:" + contentHeight);
      // console.log("滚动条距顶部距离:" + scrollTop);
      // console.log("浏览器的高度:" + windowH);
      // console.log(windowH + scrollTop >= contentHeight);

      if (windowH + scrollTop >= contentHeight - 10) {
        if (!this.isLoadingMore) {
          this.loadMore();
        }
      }
    },
    loadMore() {
      console.log("b");
      this.isLoadingMore = true;

      this.$http
        .get("/douyuapi/api/RoomApi/live", {
          params: { offset: this.roomlist.length / 30, limit: 30 }
        })
        .then(
          function(res) {
            this.roomlist = this.roomlist.concat(res.body.data);
            console.log("a");
            this.isLoadingMore = false;
          },
          function() {
            this.isLoadingMore = false;
            alert("加载更多失败，请再次尝试");
          }
        );
    }
  }
};
</script>


<style scoped>
.root {
  margin-top: 44px;
}
.room-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.justify-fix {
  display: inline-block;
  width: 14rem;
  margin: 0 10px;
}

.loading-icon {
  text-align: center;
  font-size: 2rem;
  margin: 0;
}
</style>

