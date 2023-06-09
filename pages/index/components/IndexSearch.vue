<template>
	<view class="index-search">
		<view class="search-box">
			<view class="left">
				<view class="icon-box">
					<icon class="icon" type="search" size="14" color="#fff" />
				</view>
				<input :value="keyword" confirm-type="search" class="search-input" type="text" placeholder="输入搜索关键词"
					placeholder-style="color:#fff" @input="handleInput" @confirm="handleConfirm" />
			</view>
			<view class="icon-box clear-icon" v-show="showClearIcon" @click="handleClear">
				<icon class="icon" type="clear" size="16" color="#fff" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'IndexSearch',
		data() {
			return {
				keyword: '',
				showClearIcon: false
			}
		},
		methods: {
			handleInput(event) {
				this.keyword = event.detail.value
				if (event.detail.value.length > 0) {
					this.showClearIcon = true
				} else {
					this.showClearIcon = false
				}
			},
			handleClear() {
				this.keyword = ''
				this.showClearIcon = false
				this.handleConfirm()
			},
			handleConfirm() {
				this.$emit('search')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';

	.index-search {
		background: $primaryColor;
		color: #fff;
		padding: 30rpx 16px;

		.search-box {
			background: rgba(255, 255, 255, 0.3);
			border-radius: 30px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 0 0 16px;

			.left {
				display: flex;
				align-items: center;
				flex: 1;
				overflow: hidden;


				.search-input {
					font-size: 24rpx;
					margin: 0 0 0 5px;
					display: block;
					flex: 1;
					overflow: hidden;
					line-height: 70rpx;
					height: 70rpx;
				}
			}

			.icon-box {
				.icon {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
			.clear-icon {
				padding: 0 16px;
			}
		}
	}
</style>