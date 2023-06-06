<template>
	<view class="job-item">
		<view class="left">
			<navigator :url="'/pages/detail/detail?id='+data.id" hover-class="none" class="title">{{ data.title }}</navigator>
			<JobTips :tips="data.tips" />
			<view class="area">{{ data.area }}</view>
		</view>
		<view class="right">
			<view class="salary">{{ data.salary }}</view>
			<navigator :url="'/pages/detail/detail?id='+data.id" hover-class="none" class="btn">立即报名</navigator>
		</view>
	</view>
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
		border-radius: 30rpx;
		padding: 30rpx;
		margin: 30rpx 0 0 0;
		display: flex;
		justify-content: space-between;
		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
		}
		.title {
			font-size: 32rpx;
			font-weight: bold;
			@include multi-line-overflow(2);
			margin: 0 0 12rpx 0;
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
		.area {
			color: #999;
		}
	}
</style>