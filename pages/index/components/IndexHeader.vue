<template>
	<view class="index-header">
		<image class="logo" src="../../../static/logo.png" ></image>
		<view class="title">{{ siteTitle }}<view class="slogan">{{ slogan }}</view></view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: 'IndexHeader',
		data() {
			return {
				siteTitle: app.globalData.siteTitle,
				slogan: app.globalData.slogan
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';
	.index-header {
		background: $primaryColor;
		color: #fff;
		display: flex;
		align-items: center;
		padding: 0 16px;
		.logo {
			width: 70rpx;
			height: 90rpx;
			margin: 0 10px 0 0;
		}
		.title {
			font-size: 32rpx;
		}
		.slogan {
			font-size: 24rpx;
		}
	}
</style>