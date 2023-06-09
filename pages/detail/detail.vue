<template>
	<view class="page-detail">
		<BasicLayout>

			<template #top>
				<view class="box intro">
					<view class="title">{{ info.title }}</view>
					<view class="salary">{{ info.salary }}</view>
					<JobTips :tips="info.tips" />
				</view>
				<view class="box requirement">
					<view v-if="info.region" class="p area">
						<view class="label">工作地区：</view>
						<view class="text">
							<JobTips :tips="info.region" searchKey="region" emptyText="不限" />
						</view>
					</view>
					<view v-if="info.area" class="p area">
						<view class="label">工作地点：</view>
						<view class="text">{{ info.area }}</view>
					</view>
					<view v-if="info.deadline" class="p deadline">
						<view class="label">到期时间：</view>
						<view class="text">{{ info.deadline || '不限' }}</view>
					</view>
				</view>
				<view class="b-title">详情</view>
				<view class="box desc"><uv-parse :content="info.des" :selectable="true"></uv-parse></view>
				<template v-if="info.contact">
					<view class="b-title">联系方式</view>
					<view class="box desc"><uv-parse :content="info.contact" :selectable="true"></uv-parse></view>
				</template>
				<Tips />
			</template>
			<template v-if="info.region" #bottom>
				<view class="b-title" style="margin-top: 30rpx;">相关兼职</view>
				<RelatedList v-if="info.id" :info="info" />
			</template>
		</BasicLayout>
	</view>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import Tips from '../../components/common/Tips.vue'
	import JobTips from '../index/components/JobTips'
	import RelatedList from './components/RelatedList'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Detail',
		components: {
			BasicLayout,
			Tips,
			JobTips,
			RelatedList
		},
		data() {
			return {
				info: {},
				id: ''
			}
		},
		computed: {
			...mapState(['jobList', 'config']),
		},
		async onLoad(option) {
			this.id = option?.id
			await this.$onLaunched
			this.getDetail()
		},
		onShareAppMessage() {
			const config = {
				...this.config.shareConfig,
				path: '/pages/detail/detail?id=' + this.id
			}
			delete config['imageUrl']
			return config
		},
		methods: {
			async getDetail() {
				if (this.id) {
					const list = this.jobList
					const info = list.find(item => item.id === this.id)
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
			padding: 20rpx 30rpx;
			background: #fff;
			border-radius: 10rpx;
			margin: 0 0 30rpx 0;
		}

		.intro {
			.title {
				font-weight: bold;
				font-size: 40rpx;
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
			font-size: 36rpx;
			margin-bottom: 30rpx;
		}

		.desc {
			line-height: 60rpx;
			font-size: 28rpx;
		}

		.area {
			/deep/ .job-tips {
				.item {
					background: #fafafa;
					color: #999;
					border: #ddd 1px solid;
				}
			}
		}
	}
</style>