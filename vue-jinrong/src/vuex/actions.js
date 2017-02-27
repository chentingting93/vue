import Vue from 'vue'
//actions 执行变更操作所需逻辑
const add = function({commit,state}){
	commit('add',1) //派发事件 可手动派发 stroe.commit('add',1)
}

const cut = function({commit,state}){
		Vue.Tool.ajax({
			url:"api.Demo.tests",
			data:{name:'zhangsan'},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
			success (data,res) {
				//console.log(res.data.err_code)
				if(res.data.err_code === '8888'){
					commit('cut',res.data.result)
				}
			},
			error (res) {
				console.log(res)
			}
		})
		
}

export {
	add,
	cut
}