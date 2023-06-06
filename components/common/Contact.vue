<template>
	<view class="contact">
		<view class="title">免费发布信息联系我们</view>
		<image class="code" :src="codeImgUrl" ></image>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: 'Contact',
		data() {
			return {
				codeImgUrl: app.globalData.codeImgUrl
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
			margin: 20rpx auto 0 auto;
		}
	}
</style>