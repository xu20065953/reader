<template>
	<div class="bottom">
		<van-tabbar
				v-model="active"
				active-color="#0081ff"
				inactive-color="#aaaaaa"
				fixed
				safe-area-inset-bottom
		>
			<!--icon 加个空格与van图标区分-->
			<van-tabbar-item to="/shujia" icon=" iconfont  icon-icon_shujia">书架</van-tabbar-item>
			<van-tabbar-item to="/index" icon=" iconfont icon-dushu">书城</van-tabbar-item>
			<van-tabbar-item to="/categoty" icon=" iconfont icon-icon_gengduo">书库</van-tabbar-item>
			<van-tabbar-item to="/user" icon=" iconfont icon-wode">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: "bottom",
		data(){
			return {
				active: 1
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>