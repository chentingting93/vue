<template>
	<div class="yanzheng">
			<header class="header">
				<router-link to="/index/zhanghu" class="iconfont">&#xe60a;</router-link>
				<h2 id='title'>忘记密码</h2>
			</header>
			<p>已将验证码发送至136911的手机号码</p>
			<div class='yanzhengcon'>
				<i>验证码</i>
				<input type="text" class='yanzhengma'>
				<span class='daojishi'>60秒后重发</span>
			</div>
			<p class='nextto'>下一步</p>
	</div>
</template>

<script>
	export default{
		name:"yanzheng"
	}
</script>

<style scoped>
.yanzheng {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  font-size: .14rem;
}
.header{
	height: .44rem;
	line-height: .44rem;
	text-align: center;
	background: #fff;
	font-weight: 900;
	position: relative;
}

.header h2{
	font-size:0.18rem;
}

.header a{
	position: absolute;
	left:.1rem;
	color: #ccc;

}
.yanzheng p {
  line-height: .3rem;
  color: #fc9e4e;
  text-align: center;
}
.daojishi {
  border: 1px solid #ccc;
  text-align: center;
  line-height: .3rem;
  padding:0 .1rem;
  position: absolute;
  right: .1rem;
  top: 25%;
  color: #666;
  border-radius: .1rem;
}
.yanzhengcon{
	position: relative;
	height: .6rem;
	line-height: .6rem;
	background: #fff;
}
.yanzhengcon i{
	padding: 0 .1rem;
}
.yanzhengcon input{
	width: 40%;
	border: none;
	font-size: .18rem;
	font-weight: 900;
}
.yanzheng .nextto{
	width: 90%;
	height: .44rem;
	margin: .2rem auto;
	line-height: .44rem;
	text-align: center;
	background: #fad937;
	border-radius: 15px;
	color: #000;
}
</style>