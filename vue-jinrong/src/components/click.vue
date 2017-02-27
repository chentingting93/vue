<template>
	<div class="click">
		<button @click='add'>count ++</button>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		name:"click",
		methods:{
			...mapActions([
					'add'
				]),
			add(){
				//console.log(this)
			}
		}
	}
</script>

<style scoped>
	
</style>