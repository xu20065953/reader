<template>
	<div class="x-search">
		<van-search
				placeholder="请输入搜索关键词"
				readonly
				input-align="center"
				shape="round"
				v-on:click="onSearch" />
	</div>
</template>

<script>
	export default {
		name: "x-search",

		methods: {
			onSearch(){
				console.log("跳转到搜索页面");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.x-search{
		margin-top: 5px;
		margin-bottom: 5px;
		.van-search__content{
			background-color: #f5f5f5;
		}
	}

</style>