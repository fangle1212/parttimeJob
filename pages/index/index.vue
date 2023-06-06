<template>
	<BasicLayout class="page-index">
		<template #top>
			<IndexHeader />
			<IndexSearch ref="search" @search="handleSearch" />
			<view class="job-filters">
				<!-- 地区筛选 -->
				<IndexFilters ref="cityFilter" title="地区筛选" :filtersConfig="regionFiltersConfig" @onclick="handleSearch" />
			</view>
			<view class="job-list">
				<IndexJobItem v-for="item in jobList" :key="item.id" :data="item" />
			</view>
		</template>
	</BasicLayout>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import IndexHeader from './components/IndexHeader.vue'
	import IndexSearch from './components/IndexSearch.vue'
	import IndexFilters from './components/IndexFilters.vue'
	import IndexJobItem from './components/IndexJobItem.vue'
	import { jobList } from '../../api/index.js'
	const app = getApp()
	const regionFiltersConfig =  {
		filterName: '地区',
		filterList: app.globalData.regionArr
	}
	let allJobList = []
	export default {
		name: 'PageIndex',
		components: { BasicLayout, IndexHeader, IndexSearch, IndexFilters, IndexJobItem },
		data() {
			return {
				jobList: [],
				regionFiltersConfig
			}
		},
		onLoad() {
			this.getJobList()
		},
		methods: {
			async getJobList() {
				const list = await jobList()
				this.jobList = list
				allJobList = list
			},
			handleSearch() {
				// 关键字
				const keyword = this.$refs.search.keyword || ''
				// 地区筛选
				const regionId = this.$refs.cityFilter.selected
				this.jobList = allJobList.filter(item => item.title.includes(keyword))
				if (regionId !== '0') {
					const regionName = this.$refs.cityFilter.selectedName
					this.jobList = this.jobList.filter(item => item.region.includes(regionName))
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-index {
	.job-list {
		padding: 0 16px;
	}
	.job-filters {
		position: relative;
	}
}
</style>
