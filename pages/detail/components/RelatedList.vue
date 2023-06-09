<template>
	<view class="related-list">
		<view class="job-list">
			<IndexJobItem v-for="item in filterJobList" :key="item.id" :data="item" />
		</view>
	</view>
</template>

<script>
	import IndexJobItem from '../../index/components/IndexJobItem.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'RelatedList',
		components: { IndexJobItem },
		props: {
			info: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				filterJobList: []
			}
		},
		computed: {
			...mapState(['jobList']),
		},
		created() {
			this.getJobList()
		},
		methods: {
			async getJobList() {
				const list = this.jobList
				const regionArr = this.info?.region || []
				this.filterJobList = list.filter(item => (item.region.length === 0 || item?.region.some(region => regionArr.includes(region))) && item.id !== this.info.id)
			}
		}
	}
</script>

<style>
</style>