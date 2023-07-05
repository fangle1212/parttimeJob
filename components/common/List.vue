<template>
	<view class="page-index">
		<view class="job-list">
			<template v-for="item in filterJobList">
				<view class="job-list-item">
					<template v-if="isSlot">
						<slot name="item" :item="item"></slot>
					</template>
					<ListItem v-else :key="item.id" :data="item" />
				</view>
			</template>
			<None v-if="pageInit && filterJobList.length === 0" />
		</view>
	</view>
</template>

<script>
	import ListItem from '@/components/common/ListItem.vue'
	import None from '@/components/common/None.vue'
	import {
		getJobList
	} from '@/api/index.js'
	const pageSize = 10
	export default {
		name: 'List',
		props: {
			fileName: {
				type: String,
				default: 'today'
			},
			isSlot: {
				type: Boolean,
				default: false
			}
		},
		components: {
			ListItem,
			None
		},
		data() {
			return {
				jobList: [],
				filterJobList: [],
				pageInit: false,
				page: 1
			}
		},
		async created() {
			this.handleSearch()
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
			setPage() {
				const filterJobList = this.jobList
				this.filterJobList = filterJobList.slice(0, this.page * pageSize)
			},
			async handleSearch() {
				if (!this.pageInit) {
					uni.showLoading({
						title: '加载中'
					})
				}
				this.page = 1
				this.jobList = await getJobList(this.fileName)
				this.setPage()
				uni.hideLoading()
				uni.stopPullDownRefresh()
				this.pageInit = true
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>