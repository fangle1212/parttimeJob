<template>
	<view class="info-list">
		<view v-for="item in list" :key="item.id" class="item">
			<view class="left"></view>
			<view class="right">
				<view class="top">
					<view class="name">发布人姓名</view>
					<view class="btn">查看</view>
				</view>
				<view class="tags"></view>
				<view class="area"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getJobList } from '@/api/index.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			async load(fileName = 'list') {
				const list = await getJobList(fileName)
				this.list = list
			}
		}
	}
</script>

<style>
</style>