<template>
	<view class="tabs-box">
		<view class="tabs-box-title">
			<view class="tabs-box-title-box">
				<view v-for="(item, index) in tabsConfig" :key="index" class="item" :class="[index === current ? 'cur' : '']" @click="handleTabClick(index)">{{ item.title }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Hitabs',
		props: {
			tabsConfig: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				current: 0
			}
		},
		methods: {
			handleTabClick(index) {
				this.$emit('handleTabClick', index, (current = index) => {
					this.current = current
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/common.scss';
	.tabs-box {
		&-title {
			overflow-x: auto;
			padding: 0 16px;
			&-box {
				white-space: nowrap;
				font-size: 0;
				.item {
					display: inline-block;
					font-size: 32rpx;
					margin-right: 16px;
					padding: 20rpx 0;
		
					&.cur {
						color: $primaryColor;
						font-weight: bold;
						position: relative;
						&:after {
							display: block;
							content: '';
							width: 100%;
							height: 4rpx;
							border-radius: 10px;
							overflow: hidden;
							background-color: $primaryColor;
							position: absolute;
							bottom: 0;
							left: 0;
						}
					}
				}
			}
		}
	}
</style>