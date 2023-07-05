<template>
	<view class="list-item" @click="jumpPage">
		<view class="avatar"><uv-parse :content="avatar"></uv-parse></view>
		<view class="right">
			<view class="name">{{ nickName }}
				<view v-if="showView" class="btn">查看</view>
			</view>
			<view class="title">{{ data.title }}</view>
			<JobTips v-if="data.tips.length" class="tips" :tips="data.tips" noLink />
			<view class="desc"><uv-parse :content="des" :selectable="true"></uv-parse></view>
			<view v-if="showView" class="more">...</view>
			<view v-if="showView" class="moreText">全文</view>
		</view>
	</view>

</template>

<script>
	import JobTips from '../../pages/job/components/JobTips'
	import multiavatar from '@multiavatar/multiavatar'
	const faker = require('faker/locale/zh_CN')
	export default {
		name: 'ListItem',
		components: {
			JobTips
		},
		props: {
			data: {
				type: Object,
				default: () => {}
			},
			desLimit: {
				type: Number,
				default: Infinity
			}
		},
		computed: {
			avatar() {
				return multiavatar(this.nickName)
			},
			nickName() {
				return faker.internet.userName()
			},
			des() {
				return this.data.des?.slice(0, this.desLimit)
			},
			showView() {
				return this.desLimit !== Infinity
			}
		},
		methods: {
			async jumpPage() {
				this.$emit('jumpPage', this.data.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/common.scss';

	.list-item {
		font-size: 28rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx 30rpx;
		margin: 0 0 30rpx 0;
		display: flex;
		// box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(0, 0, 0, 0.05);
		border-top: #ddd 1px solid;
		.avatar {
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
		}

		.right {
			flex: 1;
			overflow: hidden;
			margin-left: 30rpx;
		}

		.name {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #97abd1;
			font-size: 32rpx;
			padding-bottom: 20rpx;
		}

		.title {
			font-size: 32rpx;
			font-weight: bold;
			padding-bottom: 20rpx;
		}

		.tips {
			padding-bottom: 20rpx;
		}

		.desc {
			/deep/ {
				* {
					font-size: 28rpx !important;
					line-height: 48rpx;
				}
				strong {
					color: red;
					font-weight: bold;
				}
			}
		}

		.btn {
			color: #fff;
			background: #ff4743;
			padding: 0 20rpx;
			border-radius: 10rpx;
			line-height: 50rpx;
			display: inline-block;
			font-size: 28rpx;
		}
		.moreText {
			color: #758096;
		}
	}
</style>