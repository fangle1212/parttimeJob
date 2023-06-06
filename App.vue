<script>
	import config from 'utils/config.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			...config
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background: #fafafa;
		font-size: 28rpx;
		line-height: 48rpx;
	}
</style>
