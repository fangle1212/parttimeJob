<template>
	<view class="index-search">
		<view class="search-box">
			<view class="left">
				<icon class="search-icon" type="search" size="14" color="#fff"/>
				<input :value="keyword" confirm-type="search" class="search-input" type="text" placeholder="输入搜索关键词" placeholder-style="color:#fff" @input="handleInput" @confirm="handleConfirm" />
			</view>
			<icon v-if="showClearIcon" class="clear-icon" type="clear" size="12" color="#fff" @click="handleClear"/>
		</view>
	</view>
</template>

<script>
	const app = getApp()
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
			line-height: 70rpx;
			padding: 0 16px;
			.left {
				display: flex;
				align-items: center;
			}
			.search-input {
				font-size: 24rpx;
				margin: 0 0 0 5px;
			}
		}
	}
</style>