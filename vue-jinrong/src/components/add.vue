<template>
	<div class="add">
		<h3>您好:{{userName}}</h3>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name:"add",
		created () {

		},
		computed:{
			...mapGetters([
				'count',
				'userName'
			])
		}	
	}
</script>

<style scoped>
	
</style>