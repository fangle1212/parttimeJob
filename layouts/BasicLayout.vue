<template>
	<view>
		<slot name="top"></slot>
		<slot name="center"></slot>
		<Contact />
	</view>
</template>

<script>
	import Contact from '../components/common/Contact.vue'
	export default {
		name: 'BasicLayout',
		components: { Contact },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
