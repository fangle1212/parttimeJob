<template>
	<view class="contact">
		<view class="title">免费发布信息联系我们</view>
		<image class="code" :src="wechatImg" ></image>
		<view class="text">{{ wechatId }}</view>
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
	.contact {
		padding: 60rpx 16px;
		text-align: center;
		font-size: 32rpx;
		.code {
			width: 400rpx;
			height: 400rpx;
			display: block;
			margin: 20rpx auto;
		}
		.text {
			color: #666;
		}
	}
</style>