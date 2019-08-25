<template>
	<div class="x-category">
		<van-panel v-for="(item, i) in categoryList" :key="i">
			<div class="x-category-head van-hairline--bottom" slot="header">
				<span class="title">{{item.name}}</span>
				<span class="more">查看更多</span>
			</div>
			<div class="x-tag-content">
				<div class="flex">
					<div class="left">
						<img src="//bookcover.yuewen.com/qdbimg/349573/1015648531/150" alt="">
					</div>
					<div class="right">
						<div class="caption van-ellipsis">我真没想重生啊</div>
						<div class="desc">
							万万没想到，社会精英、钻石单身汉的陈汉升居然重生了，一觉醒来变成了高三毕业生。十字路口的陈汉升也在犹豫，
							到底是按部就班成为千万富翁；还是努力一把，在个人资产后面加几个零，并改变历史进程。已有作品《大时代1994》，
							书友群601246758（快满）；书友2群144208153。
						</div>
						<div class="author">
							<van-icon name="manager-o"></van-icon>
							会说话的肘子
						</div>
					</div>
				</div>

				<div class="flex">
					<div class="left">
						<img src="//bookcover.yuewen.com/qdbimg/349573/1015648531/150" alt="">
					</div>
					<div class="right">
						<div class="caption van-ellipsis">我真没想重生啊</div>
						<div class="desc">
							万万没想到，社会精英、钻石单身汉的陈汉升居然重生了，一觉醒来变成了高三毕业生。
						</div>
						<div class="author">
							<van-icon name="manager-o"></van-icon>
							会说话的肘子
						</div>
					</div>
				</div>
			</div>
		</van-panel>
	</div>
</template>

<script>
	export default {
		name: "x-category",
		data(){
			return {
				categoryList: [
					{
						id: 1,
						name: "计算机科学",
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
						name: "工商管理",
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

<style  lang="scss" scoped>
	@import '@/styles/variables.scss';
	.x-category{
		.x-category-head{
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
			.flex+.flex{
				border-top: 1px solid $border;
			}
			.flex{
				display: flex;
				padding-top: 8px;
				padding-bottom: 5px;
				.left{
					width: 90px;
					img{
						height: 120px;
						width: 100%;
					}
				}
				.right{
					flex: 1;
					padding-left: 10px;
					.caption{
						font-size: 14px;
						height: 28px;
						line-height: 28px;
					}
					.desc{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						color: $gray;
						font-size: 12px;
						line-height: 20px;
						height: 60px;
					}
					.author{
						color: $gray;
						height: 16px;
						line-height: 16px;
						margin-top: 10px;
						i{
							position: relative;
							top: 3px;
							font-size: 16px;
						}
					}
				}
			}


		}

		.van-panel+.van-panel{
			margin-top: 6px;
		}
	}

</style>