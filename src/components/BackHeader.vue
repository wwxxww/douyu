<template>
<header class="clearfix">
    <i @click="back()" class="icon icon-arrow-left"></i>
    <span>
      <slot></slot>
    </span>
</header>  
</template>


<script>
export default{
    methods:{
        back(){
            window.history.back();
        }
    }
} 
</script>

<style scoped>
header{
		position: fixed;
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #282828;
		top: 0;
		z-index: 9;
	}

	i, .title{
		margin-left: 10px;
	}
	.title{
		color: white;
	}

	i, .pull-right{
		color: #999999;
	}

	i {
		cursor: pointer;
	}

	.pull-right{
		line-height: 44px;
		margin-right: 10px;
	}

</style>
