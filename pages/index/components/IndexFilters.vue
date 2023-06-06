<template>
	<view class="filters">
		<text class="item" @click="open">{{ selectedName || filtersConfig.filterName }}</text>
		<uni-popup ref="popup" background-color="#fff" :class="{ 'popup-height': type === 'left' || type === 'right' }">
			<view class="popup-content">
				<view class="title">{{ title }}</view>
				<view class="list">
					<view class="item" :class="item.id === select ? 'cur' : ''" v-for="item in filtersConfig.filterList" :key="item.id">
						<text class="text" @click="select = item.id">{{ item.name }}</text>
					</view>
				</view>
				<view class="btn" @click="handleClick">确定</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: 'IndexFilters',
		props: {
			title: {
				type: String,
				default: ''
			},
			filtersConfig: {
				type: Object,
				default: () => {}
			},
			type: {
				type: String,
				default: 'top'
			}
		},
		data() {
			return {
				selected: this.filtersConfig.filterList[0].id,
				select: this.filtersConfig.filterList[0].id
			}
		},
		computed: {
			selectedName() {
				return this.filtersConfig.filterList.find(item => item.id === this.selected)?.name || ''
			}
		},
		methods: {
			open() {
				this.select = this.selected
				this.$refs.popup.open(this.type)
			},
			close() {
				this.$refs.popup.close()
			},
			handleClick() {
				this.selected = this.select
				this.close()
				this.$emit('onclick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';
	.popup-content {
		padding: 40rpx 22rpx;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			color: $primaryColor;
			padding: 0 10rpx;
		}
		.list {
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			.item {
				flex-basis: 25%;
				line-height: 60rpx;
				margin: 30rpx 0 0 0;
				.text {
					margin: 0 15rpx;
					border: #ddd 1px solid;
					border-radius: 10rpx;
					display: block;
					cursor: pointer;
				}
				&:hover,
				&.cur {
					.text {
						color: $primaryColor;
						background-color: rgba($primaryColor, 0.1);
						border-color: $primaryColor;
					}
				}
			}
		}
		.btn {
			box-sizing: border-box;
			text-align: center;
			background: $primaryColor;
			border-radius: 10rpx;
			line-height: 80rpx;
			color: #fff;
			margin: 50rpx 10rpx 0 10rpx;
			font-size: 32rpx;
			cursor: pointer;
		}
	}
</style>