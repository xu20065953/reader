<template>
	<div class="pad-top pad-bottom">
		<!--顶部导航-->
		<top></top>
		<router-view/>
		<!--底部导航-->
		<bottom></bottom>
	</div>
</template>

<script>
	import Top from './components/top';
	import Bottom from './components/bottom';
	export default {
		name: "top-bottom-layout",
		components: {
			Top,
			Bottom
		}
	}
</script>

<style scoped>

</style>