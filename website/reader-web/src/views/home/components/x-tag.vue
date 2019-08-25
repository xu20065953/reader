<template>
	<div class="x-tag">
		<van-panel v-for="(item, i) in tagList" :key="i">
			<div class="x-tag-head van-hairline--bottom" slot="header">
				<span class="title">{{item.name}}</span>
				<!--<span class="more">查看更多</span>-->
			</div>
			<div class="x-tag-content">
				<van-row gutter="5" >
					<van-col span="6" v-for="(book, j) in item.books" :key="j" v-if="j<8">
						<img class="img-resp" :src="book.coverImage" alt="">
						<div class="caption van-ellipsis">{{book.name}}</div>
						<div class="author van-ellipsis">{{book.author}}</div>
					</van-col>
				</van-row>
			</div>
		</van-panel>
	</div>
</template>

<script>
	export default {
		name: "x-tag",
		data(){
			return {
				tagList: [
					{
						id: 1,
						name: "主编精选",
						books: [
							{
								id: 1,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 2,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 3,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 4,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 5,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 6,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 7,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 8,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							},
							{
								id: 9,
								name: "宠物天王",
								author: "揭破",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1005399587/150"
							}
						]
					},
					{
						id: 1,
						name: "每日必读",
						books: [
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
							{
								id: 1,
								name: "重生浪潮之巅",
								author: "佛即心兮",
								coverImage: "//bookcover.yuewen.com/qdbimg/349573/1013339667/150"
							},
						]
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.x-tag{
		margin-top: 10px;
		margin-bottom: 10px;
		.x-tag-head{
			font-size: 14px;
			padding: 8px 10px;
			.title{
				border-left: 4px solid $blue;
				padding-left: 5px;
				font-weight: 600;
				letter-spacing: 1px;
			}
			.more{
				float: right;
				color: $gray;
				font-size: 12px;
			}
		}
		.x-tag-content{
			padding: 8px 10px;
			img{
				height: 110px;
				width: 100%;
			}
			.caption{
				/*padding: 5px 0px;*/
				height: 20px;
				line-height: 20px;
			}
			.author{
				color: $gray;
				font-size: 10px;
				height: 16px;
				line-height: 16px;
				margin-bottom: 8px;
			}
		}
		.van-panel+.van-panel{
			margin-top: 6px;
		}
	}
</style>