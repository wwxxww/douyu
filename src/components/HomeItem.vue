<template>
 <div class="root">

   <div class="root-header">
    <!-- 1.@load="" 调用load事件，当图片加载完成后，执行函数，显示图片，隐藏 “加载图片” -->
    <transition name="root-pic">
        <img v-show="loaded" @load="imgLoaded" :src="room.room_src">
    </transition>

   <!-- 2. “加载图片” -->
    <img  v-show="!loaded"  :src="placeholder"/>

    <!-- 3.图片左下角文字 -->
    <span class="house-name">{{room.nickname}}</span>

    <!--  4.图片右下角的在线人数 -->
    <span class="visited-number">
        <span class="icon icon-user-md"></span>
        {{ room.online }}
    </span>
   </div>

   <!--  1.图片下方的文字 -->
   <div class="root-name">
		<span class="icon-desktop icon"></span>
		{{ room.room_name }}
	</div>
    
 </div>
</template>

<script>
import placeholder from "../assets/placeholder.gif";
export default {
  props: ["room"],
  data() {
    return {
      loaded: false,
      placeholder
    };
  },
  methods:{
      imgLoaded(){
          this.loaded=true;
      }
  }
};
</script>


<style scoped>
	.root{
		display: inline-block;
		width: 14rem;
		margin: 10px;
	}

	.root-header{
		height: 10rem;
		position: relative;
		border-radius: 10px;
		color: white;
		background-size: 100% 100%;
		overflow: hidden;
	}

	.root-header img{
		width: 100%;
		height: 100%;
	}
	
	@media(max-width: 320px) {
		.root{
			width: 80%;
		}
		.root-header{
			height: 50vw;
		}
	}
	
	.house-name, .visited-number{
		position: absolute;
	}

	.house-name{
		left: 10px;
		bottom: 5px;
	}

	.visited-number{
		right: 10px;
		bottom: 5px;
	}

	.root-name{
		padding: 0px 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.root-pic-enter-active, .root-pic-leave-active{
		transition: opacity 0.5s;
	}
	
	.root-pic-enter, .root-pic-leave-active{
		opacity: 0;
	}

</style>
