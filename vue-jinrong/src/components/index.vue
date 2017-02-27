<template>
	<div id='index' class='wrap'>
			<router-view></router-view>
			<footer class="footer">
					<ul>
						<li>
							<router-link to='home'>
							<i class='iconfont'>&#xe675;</i>
							<b>首页</b>
							</rotuer-link>
						</li>
						<li>
							<router-link to='product'>
							<i class='iconfont'>&#xe600;</i>
							<b>我的投资</b>
							</router-link>
						</li>
						<li>
							<router-link :to="hrefs" :href="hrefs">
							<i class='iconfont'>&#xe607;</i>
							<b>我的账户<b>
							</router-link>
						</li>
					</ul>
			</footer>
	</div>	
</template>

<script>
	export default{
		name:'index',
		data(){
			return {
				hrefs:'456456'
			}
		},
		props:["href"],
	    created(){
	     	let link = localStorage.getItem('userName')
	    	//console.log(link)
	      	this.hrefs=link?'/index/login_after':"/index/zhanghu"
	    
	    }
	}
</script>

<style scoped>
.wrap{
	width: 100%;
	height: 100%;
	font-size: .14rem;
    overflow: hidden;
    display: -webkit-flex;
    flex-direction:column;
}
index{
	display: flex;
	width: 100%;
	height: 100%;
	overflow-y:scroll; 
}
.footer{
	width: 100%;
	height: .5rem;
	font-size: .16rem;
	background: #fff;
	z-index: 1000000;
}

.footer ul{
	display: flex;
	width: 100%;
	height: 100%;
}
.footer ul li{
	flex:1;
	font-size: .16rem;
	text-align: center;
}

.footer ul li i{
	display: block;
	font-size: .24rem;
}

.router-link-active{
	color: #ed5858;
}

</style>