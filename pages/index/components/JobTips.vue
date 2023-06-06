<template>
	<view class="job-tips">
		<navigator :url="'/pages/search/search?text='+tip" hover-class="none" class="item" v-for="(tip, index) in tips" :key="tip">{{ tip }}</navigator>
		<text v-if="tips.length === 0 && emptyText">{{ emptyText }}</text>
	</view>
</template>

<script>
	export default {
		name: 'JobTips',
		props: {
			tips: {
				type: Array,
				default: () => []
			},
			emptyText: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';
	.job-tips {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 18rpx 0;
		.item {
			font-size: 24rpx;
			border-radius: 5rpx;
			line-height: 40rpx;
			padding: 0 10rpx;
			margin: 0 10rpx 0 0;
			color: $primaryColor;
			background: rgba($primaryColor, 0.1);
		}
	}
</style>