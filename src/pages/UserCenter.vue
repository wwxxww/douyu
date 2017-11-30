<template>
	<div >
		<app-header>个人中心</app-header>
        <div class="root">个人中心，正在开发中...</div>
	</div>
</template>

<script>
	import AppHeader from "../components/AppHeader";

	export default {
		name: "userCenter",
        components: {
            "app-header": AppHeader
        }
	} 
</script>

<style scoped>
.root {
   margin-top: 44px;
    background-color: burlywood;
    padding-left:20px;
}
</style>

