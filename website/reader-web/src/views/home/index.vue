<template>
	<div>
		<!--轮播图-->
		<x-swiper></x-swiper>

		<!--首页标签-->
		<x-tag></x-tag>

		<!--首页分类-->
		<x-category></x-category>
	</div>
</template>

<script>
	import xSwiper from './components/x-swiper';
	import xTag from './components/x-tag';
	import xCategory from './components/x-category';

	export default {
		name: "index",
		components: {
			xSwiper,
			xTag,
			xCategory
		},
		data() {
			return {

			}
		},
		created(){

		},
		methods: {

		}
	}
</script>

<style scoped>

</style>