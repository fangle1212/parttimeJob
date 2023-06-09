<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: async function() {
			await Promise.all([this.$store.dispatch('getConfig'), this.$store.dispatch('getJobList')])
			this.$isResolve()
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound() {
			uni.navigateTo({
				url: 'pages/index/index'
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background: #f5f5f5;
		font-size: 28rpx;
		line-height: 48rpx;
	}

	* {
		-webkit-user-select: text;
	}
</style>