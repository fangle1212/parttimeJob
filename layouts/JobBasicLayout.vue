<template>
	<view class="basic-layout">
		<view class="shoucang">
			<view class="shoucang-box">点击右上角<view class="dot_icon"></view>添加到我的小程序<view class="add_icon"></view>，微信查看更快捷
			</view>
		</view>
		<slot name="top"></slot>
		<view class="basic-layout-box">
			<slot name="center"></slot>
			<Contact v-if="!isList" />
			<official-account></official-account>
			<slot name="bottom"></slot>
		</view>
		<ShareTip ref="share" />
	</view>
</template>

<script>
	import Contact from '../components/common/Contact.vue'
	import ShareTip from '@/components/common/ShareTip.vue'
	export default {
		name: 'BasicLayout',
		props: {
			isList: {
				type: Boolean,
				default: false
			}
		},
		components: {
			Contact,
			ShareTip
		},
		methods: {
			shareShow() {
				this.$refs.share.show()
			},
			shareHide() {
				this.$refs.share.hide()
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/jobCommon.scss';

	.basic-layout {
		.shoucang {
			height: 70rpx;
			&-box {
				background: darken($primaryColor, 10);
				color: #fff;
				text-align: center;
				line-height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: fixed;
				width: 100%;
				left: 0;
				z-index: 9;
				font-size: 26rpx;
			}

			.dot_icon {
				width: 52rpx;
				height: 18rpx;
				background: url(../static/dot.png) no-repeat;
				background-size: 100% 100%;
				margin: 0 8rpx;
			}

			.add_icon {
				width: 50rpx;
				height: 50rpx;
				background: url(../static/add.png) no-repeat;
				background-size: 100% 100%;
				border-radius: 10rpx;
				margin: 0 8rpx;
			}
		}
	}
</style>