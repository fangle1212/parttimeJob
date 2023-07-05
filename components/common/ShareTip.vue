<template>
	<view v-show="visible" class="share-mask">
		<image src="../../static/point_bg.png" style="width: 100%;" mode="widthFix"></image>
		<view class="btn">
			<image class="img" @click="hide" src="../../static/point_btn_l.png"></image>
			<button class="img" open-type="share"><image class="img" src="../../static/point_btn_r.png"></image></button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ShareTip',
		data() {
			return {
				visible: false
			}
		},
		methods: {
			show() {
				this.visible = true
			},
			hide() {
				this.visible = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.share-mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		text-align: right;
		background: rgba(0, 0, 0, 0.6);
		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			.img {
				width: 300rpx;
				height: 100rpx;
				margin: 0 20rpx;
				cursor: pointer;
				padding: 0;
				box-sizing: border-box;
				background: transparent;
				box-shadow: none;
				border: 0;
				&:after {
					display: none;
				}
				.img {
					margin: 0;
				}
			}
		}
	}
</style>