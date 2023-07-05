<template>
	<view class="related-list">
		<view class="job-list">
			<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item" @share="$emit('share')" />
		</view>
	</view>
</template>

<script>
	import IndexJobItem from '../../job/components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	const pageSize = 10
	export default {
		name: 'RelatedList',
		components: { IndexJobItem },
		props: {
			info: {
				type: Object,
				default: () => {}
			},
			jobList:  {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				filterList: [],
				filterJobList: [],
				page: 1
			}
		},
		created() {
			this.getJobList()
		},
		methods: {
			async getJobList() {
				const list = this.jobList
				const regionArr = this.info?.region || []
				this.filterList = list.filter(item => (item.region.length === 0 || item?.region.some(region => regionArr.includes(region))) && item.id !== this.info.id)
				this.setPage()
			},
			setPage() {
				this.filterJobList = this.filterList.slice(0, this.page * pageSize)
			},
			reachBottom() {
				const totalPage = Math.ceil(this.filterList.length / pageSize)
				if(totalPage >= this.page + 1) {
					this.page++
					this.setPage()
				}
			}
		}
	}
</script>

<style>
</style>