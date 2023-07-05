<template>
	<view class="tips">
		<view class="p"><text class="label">提醒：</text>发布的信息不代表平台官方信息，虽然大部分都已人工审核，但仍不排除多种原因出现问题，大家务必自行甄别，因为不能真实参与能做的毕竟有限。只能反复提醒大家: 一定要靠自己多留心，并谨慎选择。</view>
		<view class="p"><text class="label">切记：</text>不要交任何费用，要收费、押金、对接支付宝/微信验证码的都是骗子！</view>
		<view class="p"><text class="label">警告：</text>微信、闲鱼等个人账号不要出租给他人使用，以免其做违法之事，累及自己</view>
	</view>
</template>
平
<script>
	export default {
		name: 'Tips'
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/jobCommon.scss';
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