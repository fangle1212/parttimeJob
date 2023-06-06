<template>
	<view class="tips">
		<view class="p"><text class="label">提醒：</text>平台发布的信息不代表平台官方信息，大家自行务必甄别</view>
		<view class="p"><text class="label">切记：</text>不要交任何费用，要收费、押金、对接支付宝/微信验证码的都是骗子！</view>
		<view class="p"><text class="label">警告：</text>微信、闲鱼等个人账号不要出租给他人使用，以免其做违法之事，累及自己</view>
	</view>
</template>

<script>
	export default {
		name: 'Tips'
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/common.scss';
	.tips {
		padding: 20rpx;
		border: $primaryColor dashed 6rpx;
		background: #fff;
		border-radius: 30rpx;
		.p {
			margin: 10rpx 0 0 0;
			&:first-child {
				margin: 0;
			}
			.label {
				font-weight: bold;
				font-style: italic;
				color: green;
			}
			&:nth-child(2) {
				.label {
					color: red;
				}
			}
			&:nth-child(3) {
				.label {
					color: orange;
				}
			}
		}
	}
</style>