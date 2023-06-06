<template>
	<BasicLayout class="page-search">
		<template #top>
			<view class="job-list">
				<IndexJobItem v-for="item in jobList" :key="item.id" :data="item" />
			</view>
		</template>
	</BasicLayout>
</template>

<script>
	import BasicLayout from '../../layouts/BasicLayout.vue'
	import IndexJobItem from '../index/components/IndexJobItem.vue'
	import { jobList } from '../../api/index.js'
	export default {
		name: 'PageSearch',
		components: { BasicLayout, IndexJobItem },
		data() {
			return {
				jobList: []
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.text
			})
			this.getJobList(option.text)
		},
		methods: {
			async getJobList(text) {
				const list = await jobList()
				this.jobList = list.filter(item => item.tips.includes(text))
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/common.scss';
	.page-search{
		padding: 16px;
	}
</style>
