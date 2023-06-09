<template>
	<view class="page-search">
		<BasicLayout>
			<template #top>
				<view class="job-list">
					<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item" />
				</view>
			</template>
		</BasicLayout>
	</view>
</template>

<script>
	import config from '@/utils/config.js'
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import IndexJobItem from '../index/components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'PageSearch',
		components: {
			BasicLayout,
			IndexJobItem
		},
		data() {
			return {
				filterJobList: []
			}
		},
		computed: {
			...mapState(['jobList']),
		},
		async onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.text
			})
			await this.$onLaunched
			this.getJobList(option)
		},
		onShareAppMessage() {
			return config.shareConfig
		},
		methods: {
			async getJobList({
				text,
				searchKey = 'tips'
			}) {
				const list = this.jobList
				this.filterJobList = list.filter(item => (searchKey !== 'tips' && item[searchKey].length === 0) || item[
					searchKey].includes(text))
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/common.scss';

	.page-search {
		padding: 16px;
	}
</style>