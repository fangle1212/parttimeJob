<template>
	<view class="page-detail">
		<JobBasicLayout ref="layout">
			<template #center>
				<view class="box intro">
					<view class="intro-l">
						<view class="title">{{ info.title }}</view>
						<view class="salary">{{ info.salary }}</view>
						<JobTips :tips="info.tips" />
					</view>
					<!-- <view class="sc" :class="info.sc ? 'cur' : ''" @click="handleShouCang"><view class="icon"></view>{{ info.sc ? '取消收藏' : '收藏' }}</view> -->
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
					<view class="b-title">联系方式<view class="btn" @click="handleCopy(info.contact)">点击复制</view>
					</view>
					<view class="box desc"><uv-parse :content="info.contact" :selectable="true"></uv-parse>
					</view>
				</template>
				<Tips />
			</template>
			<template #bottom>
				<view class="b-title" style="margin-top: 30rpx;">相关信息</view>
				<RelatedList ref="list" v-if="info.id" :jobList="jobList" :info="info" @share="$refs.layout.shareShow()" />
			</template>
		</JobBasicLayout>
	</view>
</template>

<script>
	import JobBasicLayout from '../../layouts/JobBasicLayout.vue'
	import Tips from '../../components/common/Tips.vue'
	import JobTips from '../job/components/JobTips'
	import RelatedList from './components/RelatedList'
	import {
		mapState
	} from 'vuex'
	import {
		timesAdd
	} from '@/utils/utils.js'
	import uniCopy from '@/utils/uni-copy.js'
	import { getJobList } from '@/api/index.js'
	export default {
		name: 'Detail',
		components: {
			JobBasicLayout,
			Tips,
			JobTips,
			RelatedList
		},
		data() {
			return {
				info: {},
				id: '',
				jobList: []
			}
		},
		computed: {
			...mapState(['config']),
		},
		onLoad(option) {
			this.id = option?.id
		},
		onReachBottom() {
			this.$refs.list.reachBottom()
		},
		async onShow() {
			// await this.$onLaunched
			this.getDetail()
		},
		onShareAppMessage() {
			// timesAdd()
			// this.$refs.layout.shareHide()
			const title = `${this.info.title}—${this.info.salary}`
			const config = {
				title: title || this.config.shareConfig?.title,
				path: '/pages/detail/detail?id=' + this.id,
				imageUrl: 'https://baobeizhiku.com/jianzhi/imgs/share3.jpg'
			}
			return config
		},
		methods: {
			async getDetail() {
				if (this.id) {
					uni.showLoading({
						title: '加载中'
					})
					const list = await getJobList()
					this.jobList = list
					const info = list.find(item => item.id === this.id)
					if (info) {
						this.info = info
					} else {
						uni.showToast({
							icon: 'error',
							title: '内容已过期！',
							duration: 1000
						})
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/index/index'
							})
						}, 1000)
					}
					uni.hideLoading()
				}
			},
			handleCopy(content) {
				uniCopy({
					content: content.replace(/<.*?>/g, ''),
					success: (res) => {
						uni.showToast({
							title: res,
							icon: 'none'
						})
					},
					error: (e) => {
						uni.showToast({
							title: e,
							icon: 'none',
							duration: 3000,
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/jobCommon.scss';

	.page-detail {
		/deep/ .basic-layout-box {
			padding: 16px;
		}

		.box {
			padding: 20rpx 30rpx;
			background: #fff;
			border-radius: 10rpx;
			margin: 0 0 30rpx 0;
		}

		.intro {
			display: flex;
			justify-content: space-between;
			align-items: center;

			&-l {
				flex: 1;
				overflow: hidden;
				margin-right: 20rpx;
			}

			.sc {
				display: flex;
				align-items: center;

				.icon {
					width: 50rpx;
					height: 50rpx;
					background: url(../../static/sc_icon.png) no-repeat;
					background-size: 100% 100%;
					margin-right: 10rpx;
				}

				&.cur {
					.icon {
						background-image: url(../../static/sc_cur_icon.png);
					}
				}
			}

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
			display: flex;
			justify-content: space-between;
			align-items: center;

			.btn {
				background: $primaryColor;
				color: #fff;
				text-align: center;
				border-radius: 10rpx;
				margin: 0 0 0 20rpx;
				cursor: pointer;
				font-size: 28rpx;
				padding: 5rpx 20rpx;
				font-weight: normal;
			}
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