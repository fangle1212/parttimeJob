<template>
	<view class="page-index">
		<JobBasicLayout ref="layout" isList>
			<template #top>
				<!-- <IndexHeader /> -->
				<!-- <IndexBanner /> -->
				<IndexSearch ref="search" @search="handleSearch" />
				<!-- </template>
			<template #center> -->
				<view class="job-filters">
					<!-- 区域筛选 -->
					<IndexFilters v-if="regionFiltersConfig.filterList.length" class="filter" ref="cityFilter"
						title="区域筛选" selectAllText="全长沙" :filtersConfig="regionFiltersConfig" @onclick="handleSearch" />
					<!-- 福利 -->
					<IndexFilters v-if="welfareFilterConfig.filterList.length" class="filter" ref="welfareFilter"
						title="福利筛选" :filtersConfig="welfareFilterConfig" @onclick="handleSearch" />
				</view>
				<view class="job-list">
					<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item"
						@share="$refs.layout.shareShow()" />
				</view>
			</template>
		</JobBasicLayout>
	</view>
</template>

<script>
	import JobBasicLayout from '../../layouts/JobBasicLayout.vue'
	// import IndexHeader from './components/IndexHeader.vue'
	// import IndexBanner from './components/IndexBanner.vue'
	import IndexSearch from './components/IndexSearch.vue'
	import IndexFilters from './components/IndexFilters.vue'
	import IndexJobItem from './components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	import {
		timesAdd
	} from '@/utils/utils.js'
	import {
		getJobList
	} from '@/api/index.js'
	const pageSize = 10
	export default {
		name: 'Job',
		components: {
			JobBasicLayout,
			// IndexHeader,
			// IndexBanner,
			IndexSearch,
			IndexFilters,
			IndexJobItem,
			page: 1
		},
		data() {
			return {
				jobList: [],
				filterJobList: [],
				pageInit: false,
				page: 1,
				total: 0
			}
		},
		computed: {
			...mapState(['config']),
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
		async created() {
			console.log(this.config)
			this.handleSearch()
		},
		onPullDownRefresh() {
			this.pullDownRefresh()
		},
		onReachBottom() {
			this.reachBottom()
		},
		onShareAppMessage() {
			// timesAdd()
			// this.$refs.layout.shareHide()
			
			return this.config.shareConfig
		},
		methods: {
			pullDownRefresh() {
				uni.startPullDownRefresh()
				this.handleSearch()
			},
			reachBottom() {
				const totalPage = Math.ceil(this.jobList.length / pageSize)
				if (totalPage >= this.page + 1) {
					this.page++
					this.setPage()
				}
			},
			filter() {
				const allJobList = this.jobList
				let filterJobList = []
				// 关键字
				const keyword = this.$refs.search.keyword || ''
				filterJobList = allJobList.filter(item => item.title.includes(keyword))
				// 地区筛选
				const cityFilter = 'cityFilter'
				const regionId = this.$refs[cityFilter]?.selected
				if (regionId && regionId !== '0') {
					const regionName = this.$refs[cityFilter]?.selectedName
					filterJobList = filterJobList.filter(item => item.region.length === 0 || item.region
						.includes(
							regionName))
				}
				// 福利筛选
				const welfareFilter = 'welfareFilter'
				const welfareId = this.$refs[welfareFilter]?.selected
				if (welfareId && welfareId !== '0') {
					const welfareName = this.$refs[welfareFilter]?.selectedName
					filterJobList = filterJobList.filter(item => item.tips.includes(welfareName))
				}
				return filterJobList
			},
			setPage() {
				const filterJobList = this.filter()
				console.log(this.page * pageSize)
				this.filterJobList = filterJobList.slice(0, this.page * pageSize)
			},
			async handleSearch() {
				if (!this.pageInit) {
					uni.showLoading({
						title: '加载中'
					})
				}
				this.page = 1
				this.jobList = await getJobList()
				this.setPage()
				uni.hideLoading()
				uni.stopPullDownRefresh()
				this.pageInit = true
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
			padding: 20rpx 0;
			display: flex;
			align-items: center;

			.filter {
				flex: 1;
				text-align: center;
			}
		}
	}
</style>