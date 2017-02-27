import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter.js'
import * as actions from './actions.js'
Vue.use(Vuex)
const state = {
	count: 0,
	userName:""
}
const mutations = {
	add (state,num) {
		state.count += num; 
	},
	cut (state,num) {
		state.userName = num;
	}
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})