<template>
	<div class="cut">
		<button @click='cut'>count --</button>
	</div>
</template>

<script>
	//import {mapActions} from 'vuex'
	export default{
		name:"cut",
		created () {

		},
		methods:{
			// ...mapActions([
			// 	'cut'
			// ])
			cut(){
				this.$store.dispatch('cut')
			}	
		}	
	}
</script>

<style scoped>
	
</style>