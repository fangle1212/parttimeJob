<template>
	<BasicLayout class="page-detail">
		<template #top>
			<view class="box intro">
				<view class="title">{{ info.title }}</view>
				<view class="salary">{{ info.salary }}</view>
				<JobTips :tips="info.tips" />
			</view>
			<view class="box requirement">
				<view class="p area">
					<view class="label">工作地点：</view>
					<view class="text">{{ info.area }}</view>
				</view>
			</view>
			<view class="b-title">职位详情</view>
			<uv-parse class="box desc" :content="info.des" :selectable="true"></uv-parse>
			<Tips />
		</template>
	</BasicLayout>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import Tips from '../../components/common/Tips.vue'
	import JobTips from '../index/components/JobTips'
	import { jobList } from '../../api/index.js'
	export default {
		name: 'Detail',
		components: { BasicLayout, Tips, JobTips },
		data() {
			return {
				info: {}
			}
		},
		onLoad(option) {
			this.getDetail(option?.id)
		},
		methods: {
			async getDetail(id = '') {
				if (id) {
					const list = await jobList()
					const info = list.find(item => item.id === id)
					this.info = info
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/common.scss';
	.page-detail {
		padding: 16px;
		.box {
			padding: 20rpx;
			background: #fff;
			border-radius: 30rpx;
			margin: 0 0 30rpx 0;
		}
		.intro {
			.title {
				font-weight: bold;
				font-size: 38rpx;
			}
			.salary {
				font-weight: bold;
				font-size: 36rpx;
				font-family: Arial, Helvetica, sans-serif;
				color: $primaryColor;
				margin: 20rpx 0;
			}
		}
		.requirement {
			.p {
				padding: 20rpx 0 0 0;
				display: flex;
				align-items: center;
				&:first-child {
					padding: 0;
				}
				.label {
					color: #999;
				}
				.text {
					flex: 1;
					overflow: hidden;
				}
			}
		}
		.b-title {
			font-weight: bold;
			font-size: 32rpx;
		}
		.desc {
			line-height: 60rpx;
			font-size: 28rpx;
		}
	}
</style>
