<template>
	<div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(item, index) in images" :key="index" >
				<img :src="item.img" style="max-width: 100%;" v-on:click="clickSwiperItem(item)" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: "x-swiper",
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
				},
				images: [
					{
						id: 1,
						img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
					},
					{
						id: 2,
						img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
					},
					{
						id: 3,
						img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
					},
					{
						id: 4,
						img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
					}
				]
			}
		},

		created(){

		},

		methods: {
			clickSwiperItem(item){
				console.log(item, "aaa");
			}
		}
	}
</script>

<style scoped>

</style>