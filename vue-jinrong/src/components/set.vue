<template>
	<div class="set">
		<header class="head">
			<router-link to="/index/zhanghu" class="iconfont">&#xe60a;</router-link>
			<span>设置</span>
		</header>
		<div class="content">
			<ul class="item2">
				<li style="margin-top:10px;" id="check"><router-link to='/updata'>检查更新<i class="iconfont">&#xe6a0;</i><span>版本已更新</span></router-link></li>
				<li>关于我们<i class="iconfont">&#xe6a0;</i></li>
				<li id="idea"><router-link to='/opinion'>意见反馈<i class="iconfont">&#xe6a0;</i></router-link></li>
				<li style="margin-top:10px;"><router-link to='/amend'>登录密码<i class="iconfont">&#xe6a0;</i></router-link></li>
				<li>交易密码<i class="iconfont">&#xe6a0;</i></li>
				<li>手势密码<i class="iconfont">&#xe6a0;</i><span>未开启</span></li>
				<li style="margin-top:10px;">客服电话<i class="iconfont">&#xe6a0;</i><span class="phone">400-8919-629</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"set"
	}
</script>

<style scoped>
.set{
	width: 100%;
	height: 100%;
	font-size: .16rem;
	display:flex;
	flex-direction:column;
	position: relative;
}
.head{
	height: .44rem;
	line-height: .44rem;
	text-align: center;
}
.head a{
	color: #ccc;
	position: absolute;
	left: .1rem;
	font-size:0.18rem;
}
.content{
	flex: 1;
	width: 100%;
	overflow-y:scroll;
	background: #eee;
}
.item2{
	width: 100%;
	margin: 0 auto;
}
.item2 li{
	line-height: .40rem;
	border-bottom: 1px solid #ccc;
	background: #fff;
	padding: 0 .15rem;
}
.item2 li i,.item2 li span{
	float: right;
	color: #ccc;
	font-size: .14rem;
}
.item2 li span{
	font-size: .12rem
}
.item2  .phone{
	color: orange;
}
</style>