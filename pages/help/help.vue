<template>
	<List ref="list" fileName="help" />
</template>

<script>
	import List from '@/components/common/List.vue'
	export default {
		name: 'Today',
		components: {
			List
		},
		methods: {
			pullDownRefresh () {
				this.$refs.list.pullDownRefresh ()
			},
			reachBottom() {
				this.$refs.list.reachBottom()
			}
		}
	}
</script>
