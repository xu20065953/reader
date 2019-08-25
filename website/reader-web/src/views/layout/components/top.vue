<template>
	<div class="top">
		<van-nav-bar
				:title="title"
				left-text="返回"
				left-arrow
				fixed
				@click-left="onClickLeft"
		>
			<van-icon name="search" v-on:click="goSearch" slot="right" />
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
		name: "top",

		data(){
			return {
				title: "好读书"
			}
		},

		created(){
			this.$nextTick(()=>{
				if(this.$route.meta && this.$route.meta.title){
					this.title = this.$route.meta.title;
				}

			})
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1);
			},
			goSearch(){
				console.log("跳转搜索");
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.top{
		.van-nav-bar{
			background-color: $blue;
			color: #fff;
			.van-icon, .van-nav-bar__text, .van-nav-bar__title, .van-nav-bar__right{
				color: #fff;
			}
			.van-nav-bar__text:active{
				background-color: transparent;
			}
		}

		.van-nav-bar__left i, .van-nav-bar__right i{
			font-size: 20px;
		}
		.van-nav-bar__text{
			position: relative;
			top: 1px;
		}

	}
</style>