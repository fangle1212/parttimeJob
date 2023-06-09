<template>
	<navigator :url="'/pages/detail/detail?id='+data.id" hover-class="none" class="job-item">
		<view class="left">
			<view class="title">{{ data.title }}</view>
			<JobTips :tips="data.tips" noLink />
			<view class="region">[{{ data.region.length ? data.region.join('、') : '不限' }}]</view>
		</view>
		<view class="right">
			<view class="salary">{{ data.salary }}</view>
			<view class="btn">立即查看</view>
		</view>
	</navigator>
</template>

<script>
	import JobTips from './JobTips'
	export default {
		name: 'IndexJobItem',
		components: { JobTips },
		props: {
			data: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';
	.job-item {
		font-size: 28rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx 30rpx;
		margin: 0 0 30rpx 0;
		display: flex;
		justify-content: space-between;
		.left,
		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.right {
			align-items: flex-end;
			padding: 10rpx 0;
		}
		.title {
			font-size: 32rpx;
			font-weight: bold;
			@include multi-line-overflow(2);
			margin-bottom: 10rpx;
		}
		.salary {
			color: $primaryColor;
			font-size: 36rpx;
			font-weight: bold;
			font-family: Arial, Helvetica, sans-serif;
		}
		.btn {
			color: #fff;
			background: #ff4743;
			padding: 0 20rpx;
			border-radius: 10rpx;
			line-height: 60rpx;
			display: inline-block;
		}
		.region {
			color: #999;
			font-size: 24rpx;
			margin-top: 10rpx;
		}
	}
</style>