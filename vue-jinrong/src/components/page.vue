<template>
	<div class="page">
		<Add></Add>
		<Cut></Cut>
		<Click ></Click>

	</div>
</template>

<script>
import Add from './add'
import Click from './click'
import store from '../vuex/store.js'
import Cut from "./cut"
export default{
	name:"page",
	components:{
		Add,
		Click,
		Cut
	},
	store
}
</script>

<style scoped>
	.page{
		font-size: 26px;
		text-align: center;
		padding: 50px;
	}
</style>