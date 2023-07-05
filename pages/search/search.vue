<template>
	<view class="page-search">
		<JobBasicLayout ref="layout" isList>
			<template #top>
				<view class="job-list">
					<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item"
						@share="$refs.layout.shareShow()" />
				</view>
			</template>
		</JobBasicLayout>
	</view>
</template>

<script>
	import config from '@/utils/config.js'
	import JobBasicLayout from '../../layouts/JobBasicLayout.vue'
	import IndexJobItem from '../job/components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	import {
		getJobList
	} from '@/api/index.js'
	const pageSize = 10
	export default {
		name: 'PageSearch',
		components: {
			JobBasicLayout,
			IndexJobItem
		},
		data() {
			return {
				filterList: [],
				filterJobList: [],
				page: 1
			}
		},
		computed: {
			...mapState(['config'])
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.text
			})
			this.getJobList(option)
		},
		onReachBottom() {
			this.reachBottom()
		},
		onShareAppMessage() {
			return this.config.shareConfig
		},
		methods: {
			async getJobList({
				text,
				searchKey = 'tips'
			}) {
				uni.showLoading({
					title: '加载中'
				})
				const list = await getJobList()
				this.filterList = list.filter(item => (searchKey !== 'tips' && item[searchKey].length === 0) ||
					item[
						searchKey].includes(text))
				this.setPage()
				uni.hideLoading()
			},
			setPage() {
				this.filterJobList = this.filterList.slice(0, this.page * pageSize)
			},
			reachBottom() {
				const totalPage = Math.ceil(this.filterList.length / pageSize)
				if (totalPage >= this.page + 1) {
					this.page++
					this.setPage()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/jobCommon.scss';

	.page-search {
		::v-deep .job-list {
			padding: 16px;
		}
	}
</style>