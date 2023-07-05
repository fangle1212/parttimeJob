<template>
	<view class="page-index">
		<BasicLayout ref="layout">
			<template #top>
				<HiTabs :tabsConfig="tabsConfig" @handleTabClick="handleTabClick" />
				<Today v-if="key === 'today'" ref="list" />
				<Help v-if="key === 'help'" ref="list" />
				<Nav v-if="key === 'nav'" ref="list" />
				<Temp v-if="key === 'temp'" ref="list" />
				<!-- <List v-if="key === 'list'" ref="list" /> -->
			</template>
		</BasicLayout>
	</view>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import HiTabs from './components/HiTabs'
	import Today from '../today/today.vue'
	import Help from '../help/help'
	import Nav from '../nav/nav.vue'
	import Temp from '../temp/temp.vue'
	import List from '../job/job.vue'
	const tabsConfig = [{
		title: '今日信息差',
		key: 'today'
	}, {
		title: '生活求助',
		key: 'help'
	}, {
		title: '工具导航',
		key: 'nav'
	}, {
		title: '二手闲置',
		key: 'temp'
	}]
	export default {
		components: {
			BasicLayout,
			HiTabs,
			Today,
			Help,
			Nav,
			Temp,
			List
		},
		data() {
			return {
				tabsConfig,
				key: tabsConfig[0].key
			}
		},
		onPullDownRefresh() {
			this.$refs.list.pullDownRefresh()
		},
		onReachBottom() {
			this.$refs.list.reachBottom()
		},
		onShareAppMessage() {
			return {
				title: '来吧开心鸟！',
				path: '/pages/index/index'
			}
		},
		methods: {
			handleTabClick(index, callback) {
				this.key = tabsConfig[index].key
				callback && callback()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {}
</style>