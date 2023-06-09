<template>
	<view class="page-index">
		<BasicLayout>
			<template #top>
				<IndexHeader />
				<IndexSearch ref="search" @search="handleSearch" />
				<view class="job-filters">
					<!-- 区域筛选 -->
					<IndexFilters v-if="regionFiltersConfig.filterList.length" class="filter" ref="cityFilter" title="区域筛选" selectAllText="全长沙"
						:filtersConfig="regionFiltersConfig" @onclick="handleSearch" />
					<!-- 福利 -->
					<IndexFilters v-if="welfareFilterConfig.filterList.length" class="filter" ref="welfareFilter"
						title="福利筛选" :filtersConfig="welfareFilterConfig" @onclick="handleSearch" />
				</view>
				<view class="job-list">
					<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item" />
				</view>
			</template>
		</BasicLayout>
	</view>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import IndexHeader from './components/IndexHeader.vue'
	import IndexSearch from './components/IndexSearch.vue'
	import IndexFilters from './components/IndexFilters.vue'
	import IndexJobItem from './components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'PageIndex',
		components: {
			BasicLayout,
			IndexHeader,
			IndexSearch,
			IndexFilters,
			IndexJobItem
		},
		data() {
			return {
				filterJobList: []
			}
		},
		computed: {
			...mapState(['config', 'jobList']),
			regionFiltersConfig() {
				const filterList = this.config.regionArr || []
				return {
					filterName: '区域',
					filterList
				}
			},
			welfareFilterConfig() {
				const allFilterList = this.jobList.map(item => item.tips).flat(Infinity)
				const filterList = [...new Set(allFilterList)].map((item, index) => ({
					name: item,
					id: (index + 1).toString()
				}))
				return {
					filterName: '福利',
					filterList
				}
			}
		},
		async onLoad() {
			await this.$onLaunched
			this.filterJobList = this.jobList
		},
		onShareAppMessage() {
			return this.config.shareConfig
		},
		methods: {
			handleSearch() {
				const allJobList = this.jobList
				// 关键字
				const keyword = this.$refs.search.keyword || ''
				this.filterJobList = allJobList.filter(item => item.title.includes(keyword))
				// 地区筛选
				const cityFilter = 'cityFilter'
				const regionId = this.$refs[cityFilter].selected
				if (regionId !== '0') {
					const regionName = this.$refs[cityFilter].selectedName
					this.filterJobList = this.filterJobList.filter(item => item.region.length === 0 || item.region
						.includes(
							regionName))
				}
				// 福利筛选
				const welfareFilter = 'welfareFilter'
				const welfareId = this.$refs[welfareFilter].selected
				if (welfareId !== '0') {
					const welfareName = this.$refs[welfareFilter].selectedName
					this.filterJobList = this.filterJobList.filter(item => item.tips.includes(welfareName))
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
			padding: 20rpx 16px;
			display: flex;
			align-items: center;

			.filter {
				flex: 1;
				text-align: center;
			}
		}
	}
</style>