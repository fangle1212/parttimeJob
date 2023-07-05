<template>
	<view class="contact">
		<view class="title">长按二维码入群</view>
		<image class="code" :src="wechatImg" :show-menu-by-longpress="true" mode="widthFix"></image>
		<view class="subTitle">管理员每天<text class="text">实时</text>分享<text class="text">高质量</text>信息</view>
		<view class="subTitle">满200人关闭群邀请<text class="text">(名额有限)</text></view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Contact',
		computed: {
			...mapState(['config']),
			wechatImg() {
				return this.config.wechatImg
			},
			wechatId() {
				return this.config.wechatId
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/jobCommon.scss';
	.contact {
		padding: 60rpx 16px;
		text-align: center;
		font-size: 32rpx;
		.title {
			font-weight: bold;
		}
		.subTitle {
			// font-size: 28rpx;
			letter-spacing: 6rpx;
			line-height: 60rpx;
			.text {
				color: $primaryColor;
				font-weight: bold;
			}
		}
		.code {
			width: 400rpx;
			display: block;
			margin: 20rpx auto;
		}
		.text {
			color: #666;
		}
	}
</style>