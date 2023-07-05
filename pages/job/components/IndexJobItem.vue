<template>
	<view class="job-item" @click="jumpPage">
		<view class="left">
			<view class="title">{{ data.title }}</view>
			<JobTips :tips="data.tips" noLink />
			<view class="region">[{{ data.region.length ? data.region.join('、') : '不限' }}]</view>
		</view>
		<view class="right">
			<view class="salary">{{ data.salary }}</view>
			<view class="btn">立即查看</view>
		</view>
	</view>

</template>

<script>
	import {
		mapState
	} from 'vuex'
	import JobTips from './JobTips'
	import {
		tomorrowTimestamp
	} from '@/utils/utils.js'

	export default {
		name: 'IndexJobItem',
		components: {
			JobTips
		},
		props: {
			data: {
				type: Object,
				default: () => {}
			}
		},
		computed: {
			...mapState(['config'])
		},
		methods: {
			checkTimes() {
				return new Promise((resolve, reject) => {
					const timesConfig = this.config.times
					if (timesConfig) {
						// 设置默认
						const now = Date.now()
						let expiredTime = uni.getStorageSync('expiredTime')
						expiredTime = expiredTime === undefined || expiredTime.length === 0 ? tomorrowTimestamp() :
							expiredTime
						let times = uni.getStorageSync('times')
						times = times === undefined || times.length === 0 ? Number(timesConfig) : Number(times)
						uni.setStorageSync('times', times)
						uni.setStorageSync('expiredTime', expiredTime)
						console.log(expiredTime)
						// 判断是否过期
						if (expiredTime <= now) {
							uni.setStorageSync('times', timesConfig)
							uni.setStorageSync('expiredTime', tomorrowTimestamp())
						}
						times = uni.getStorageSync('times')
						if (times <= 0) {
							this.$emit('share')
						} else {
							uni.setStorageSync('times', times - 1)
							resolve()
						}
					} else {
						resolve()
					}
				})
			},
			async jumpPage() {
				// await this.checkTimes()
				uni.navigateTo({
					url: `/pages/detail/detail?id=${this.data.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/jobCommon.scss';

	.job-item {
		font-size: 28rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx 30rpx;
		margin: 0 0 30rpx 0;
		display: flex;
		justify-content: space-between;
		box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(0, 0, 0, 0.05);
		min-height: 150rpx;

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
			background: $primaryColor;
			padding: 0 20rpx;
			border-radius: 30rpx;
			line-height: 50rpx;
			display: inline-block;
		}

		.region {
			color: #999;
			font-size: 24rpx;
			margin-top: 10rpx;
		}
	}
</style>