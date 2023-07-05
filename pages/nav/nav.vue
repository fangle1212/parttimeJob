<template>
	<view class="page-nav">
		<view class="title">点击可复制工具链接</view>
		<List ref="list" fileName="nav" isSlot>
			<template v-slot:item="{ item }">
				<view class="nav-item-box" @click="handleCopy(item.des)">{{item.title}}</view>
			</template>
		</List>
	</view>
</template>

<script>
	import List from '@/components/common/List.vue'
	import uniCopy from '@/utils/uni-copy.js'
	export default {
		name: 'Today',
		components: {
			List
		},
		methods: {
			pullDownRefresh() {
				this.$refs.list.pullDownRefresh()
			},
			reachBottom() {
				this.$refs.list.reachBottom()
			},
			handleCopy(content) {
				uniCopy({
					content: content.replace(/<.*?>/g, ''),
					success: () => {
						uni.showToast({
							title: '复制成功，粘贴到浏览器使用吧！',
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
	@import '../../assets/css/common.scss';

	.page-nav {
		padding: 0 16px;

		.title {
			font-size: 32rpx;
			font-weight: bold;
			padding: 20rpx 0;
		}

		/deep/ .job-list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}

		/deep/ .job-list-item {
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			padding: 0 5%;
			margin-top: 30rpx;

			.nav-item-box {
				border: 1px solid rgba($primaryColor, 0.15);
				padding: 15rpx;
				border-radius: 10rpx;
				cursor: pointer;
				background: rgba($primaryColor, 0.08);
			}
		}
	}
</style>