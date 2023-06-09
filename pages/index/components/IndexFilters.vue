<template>
	<view class="filters">
		<text class="filters-title"
			@click="open">{{ selectedName === '不限' ? formatFilterConfig.filterName : selectedName }}</text>
		<uni-popup ref="popup" background-color="#fff" :class="{ 'popup-height': type === 'left' || type === 'right' }">
			<view class="popup-content">
				<view class="title">{{ title }}</view>
				<view class="list">
					<view class="item" :class="item.id === select ? 'cur' : ''"
						v-for="item in formatFilterConfig.filterList" :key="item.id">
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
			},
			selectAllText: {
				type: String,
				default: '不限'
			}
		},
		data() {
			return {
				formatFilterConfig: {},
				selected: '',
				select: ''
			}
		},
		computed: {
			selectedName() {
				return this.formatFilterConfig?.filterList?.find(item => item.id === this.selected)?.name || ''
			}
		},
		created() {
			this.formatFilterConfig = {
				...this.filtersConfig,
				filterList: [{
					name: this.selectAllText,
					id: '0'
				}, ...this.filtersConfig.filterList]
			}
			this.selected = this.formatFilterConfig.filterList[0].id
			this.select = this.selected
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

	.filters {
		&-title {
			position: relative;
			padding: 0 50rpx 0 10rpx;
			cursor: pointer;

			&:after {
				display: block;
				content: '';
				width: 30rpx;
				height: 30rpx;
				background: url('data:image/png;base64,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');
				background-size: 100% 100%;
				position: absolute;
				right: 10rpx;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
	}

	.popup-content {
		padding: 40rpx 22rpx;

		.title {
			font-size: 32rpx;
			font-weight: bold;
			color: $primaryColor;
			padding: 0 10rpx;
			text-align: left;
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