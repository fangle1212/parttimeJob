<template>
	<view class="none">
		<view class="none-img"><image src="../../static/none.png" mode="widthFix" style="width: 100%;"></image></view>
		<view class="text">暂无信息，等待管理员添加...</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.none {
		text-align: center;
		color: #666;
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 100rpx 0;
		&-img {
			width: 60%;
			margin: 0 auto 30rpx auto;
		}
	}
</style>