<template>
	<view class="index-header">
		<image class="logo" src="../../../static/logo.png" ></image>
		<view class="title">{{ siteTitle }}<view class="slogan">{{ slogan }}</view></view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'IndexHeader',
		computed: {
			...mapState(['config']),
			siteTitle() {
				return this.config.siteTitle
			},
			slogan() {
				return this.config.slogan
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/jobCommon.scss';
	.index-header {
		background: $primaryColor;
		color: #fff;
		display: flex;
		align-items: center;
		padding: 40rpx 16px 0 16px;
		.logo {
			width: 70rpx;
			height: 90rpx;
			margin: 0 10px 0 0;
		}
		.title {
			font-size: 36rpx;
		}
		.slogan {
			font-size: 28rpx;
		}
	}
</style>