<template>
	<view class="job-tips">
		<template v-if="noLink">
			<view class="item" v-for="(tip, index) in tips" :key="tip">{{ tip }}</view>
		</template>
		<template v-else>
			<navigator :url="'/pages/search/search?text='+tip+'&searchKey='+searchKey" hover-class="none" class="item"
				v-for="(tip, index) in tips" :key="tip">{{ tip }}</navigator>
		</template>
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
			},
			searchKey: {
				type: String,
				default: 'tips'
			},
			noLink: {
				type: Boolean,
				default: false
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