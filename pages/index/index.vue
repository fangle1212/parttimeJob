<template>
	<view class="page-index">
		<HiTabs :tabsConfig="tabsConfig" @handleTabClick="handleTabClick" />
		<TabVideo v-if="currentInfo.type === 'video'" :info="currentInfo" />
	</view>
</template>

<script>
	import HiTabs from './components/HiTabs'
	import TabVideo from './components/TabVideo'
	const tabsConfig = [{
			title: '短视频去水印',
			type: 'video'
		}
		// {
		// 	title: '短视频图集去水印',
		// 	type: 'images'
		// }
	]
	export default {
		components: {
			HiTabs,
			TabVideo
		},
		data() {
			return {
				tabsConfig,
				currentInfo: tabsConfig[0]
			}
		},
		onLoad(options) {
			if(options?.type) {
				const index = this.tabsConfig.findIndex(item => item.type === options.type)
				if (index !== -1) {
					this.currentInfo = this.tabsConfig[index]
				}
			}
		},
		onShareAppMessage() {
			return {
				title: '来吧开心鸟！',
				path: `/pages/index/index?type=${this.currentInfo.type}`
			}
		},
		methods: {
			handleTabClick(index) {
				this.currentInfo = this.tabsConfig[index]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>