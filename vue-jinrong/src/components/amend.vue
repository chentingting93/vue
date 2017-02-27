<template>
<div class="amend">
	<header class="header">
			<router-link to="/set"><img src="/static/images/01.png"></router-link>
			<h2>修改登录密码</h2>
		</header>
		<section class="main">
			<form>
				<p class="nn">
					<span>原密码</span>
					<input type="text" placeholder="请输入原密码">
				</p>
				<p>
					<span>新密码</span>
					<input type="text" placeholder="请输入新密码" class="inp1">
				</p>
				<p>
					<span>确认新密码</span>
					<input type="text" placeholder="请再次输入新密码" class="inp2">
				</p>
			</form>
			<div class="aniu" @click='amend'>
        确认修改
			</div>
      <Alert></Alert>
		</section>
</div>
</template>

<script>
import Vue from 'vue'
import {Alert,AlertPlugin} from 'vux'
	export default{
		name:"amend",
    methods:{
      amend(){
        
      }
    }
	}
</script>

<style scoped>
.amend{
	width: 100%;
	height: 100%;
	font-size: .16rem;
	display:flex;
	flex-direction:column;
	position: relative;
}
.header {
  width: 100%;
  height: 48px;
  background: #f5f5f5;
  position: relative;
  border-bottom: 1px solid #aaaaaa;
}
.header a {
  display: block;
  width: 15px;
  height: 25px;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  margin-left: 10px;
}
.header a img {
  width: 100%;
  height: 100%;
}
.header h2 {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
}
/*----- main ------*/
.main {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  -webkit-box-flex: 1;
}
.main form {
  width: 100%;
  margin-top: 10px;
}
.main form p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.main form p span {
  display: block;
  font-size: 16px;
  width: 26%;
  position: absolute;
  left: 0;
  text-align: right;
  color: #666666;
}
.main form p input {
  width: 68%;
  height: 50px;
  border: none;
  position: absolute;
  right: 0;
  background: none;
  outline: none;
}
.main form .nn {
  margin-bottom: 12px;
}
.main .aniu {
  width: 90%;
  height: 48px;
  padding: 0 10px;
  margin: 20px auto;
  background: #fad937;
  border-radius: 6px;
  box-shadow: 0 3px 1px #fab937;
   font-weight: bold;
   font-size: 16px;
   text-align: center;
   line-height: 48px;
}
/*----- bj ------*/
.bj {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
/*----- tip ------*/
.tip {
  width: 92%;
  height: 161px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  margin-top: -80.5px;
  left: 50%;
  margin-left: -46%;
  display: none;
}
.tip .p1 {
  width: 100%;
  height: 48px;
  color: #aaaaaa;
  line-height: 48px;
  padding-left: 10px;
  border-bottom: 1px solid #2ea8e6;
}
.tip .p2 {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 65px;
  position: relative;
}
.tip .p2 span {
  position: absolute;
  width: 25px;
  height: 25px;
  margin-right: 15px;
  top: 50%;
  margin-top: -26px;
}
.tip .p2 span img {
  width: 100%;
  height: 100%;
}
.tip .p2 time {
  margin-left: 35px;
}
.tip .p3 {
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #5270ab;
}

</style>