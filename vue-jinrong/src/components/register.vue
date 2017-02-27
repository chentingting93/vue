<template>
	<div class="register">
		<header class='header'>
			<ul>
				<li>
					<router-link to='/index/zhanghu'></rotuer-link>
				</li>
				<li>
					注册
				</li>
				<li></li>
			</ul>		
		</header>
		<section>
			<div class='pinktext'>
				<img src="/static/images/iphone.png" alt="">
				<input type="text" class='phone' placeholder='请输入6-12位数字字母下划线' v-model='phone' v-on:blur='reg1' v-on:focus='none'>
				<img src="/static/images/close.png" id='close'alt="">
			</div>
			<div class='clear'></div>
			<p class='isuser' v-show='isUser'>您注册的账号不合法</p>
			<div class='pinktext hui'>
				<img src="/static/images/lock.png" alt="">
				<input type="password" class='pwd' placeholder='请设置不少于6位数的密码' v-model='pwd' v-on:blur='reg2' v-on:focus='none' >
				<img src="/static/images/eye.png" id='eye'alt="">
			</div>
			<p class='ispwd' v-show='isPwd'>您注册的密码不合法</p>
			<div class='pinktext hui'>
				<img src="/static/images/lock.png" alt="">
				<input type="password" class='pwd' placeholder='确认密码' v-model='pwd2'>
				<img src="/static/images/eye.png" id='eye'alt="">
			</div>
			<div class='clear'></div>
			<div class='btn' @click='register'>
				<button class='btn1'>注册</button>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name:"register",
		data () {
			return{
				phone:"",
				pwd:"",
				pwd2:"",
				isPwd:false,
				isUser:false
			}
		},
		methods:{
			reg1:function(){
				var reg1 = /^[a-zA-Z0-9_]{3,16}$/;
				if(!(reg1).test(this.phone)){				
					this.isUser="您注册的账号不合法";
					return "";

				}
			},
			reg2:function(){
				var reg2 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]{6,12})$/;
				if(!(reg2).test(this.phone)){				
					this.isUser="您注册的账号不合法";			
					return ""
				}
			},
			none:function(){
				this.isUser=false;
				this.isPwd=false;
			}
			,
			register:function(){
				if(!this.isPwd && !this.isUser){
					this.$http({
						url:"http://localhost:3333/register",
						params:{'phone':this.phone,'pwd':this.pwd}
					}).then(function(data){
						if(data.body==='ok'){
							this.$router.push("/login")
						}else{
							alert("注册失败")
						}
					},function(err){
						console.log('err')
					})
				}
			}
		}

		
	}
</script>

<style scoped>
	.register{
		width: 100%;
		height: 100%;
		box-sizing:border-box;
		font-size: .14rem;
	}
	.header{
		height: .44rem;
		width: 100%;
		line-height: .44rem;
	}
	.header ul{
		display: -webkit-flex;
	}
	.header ul li {
		-webkit-flex:1;
	}
	.header ul li:nth-child(2){
		text-align: center;
		font-size: .20rem;
		font-weight: 600;
		color:#ed5858;
	}
.header a{
	width: 0.3rem;
    height: 0.4rem;
    line-height: 0.3rem;
    position: absolute;
    top: 0;
    background: url(/static/images/01.png) no-repeat;
    background-size: 0.15rem 0.22rem;
    margin: 10px;
}

section{
	width: 100%;
	padding:0 0.1rem;
	box-sizing:border-box;
}


 .isuser,.ispwd{
 	color: orange;
 	font-size: .16rem;
 	line-height: .16rem;
 	position:absolute;
 	
 }
 .pinktext {
  height: 0.4rem;
  width: 100%;
  margin-top: 0.25rem;
  border-bottom: 1px solid pink;
  box-sizing:border-box;
  position: relative;
}
 .pinktext img {
  float: left;
  width: 0.15rem;
  height: 0.25rem;
  margin-top: 0.1rem;
}
 .pinktext input {
  outline: none;
  float: left;
  margin: 0.1rem;
  border: 0;
  font-size: 0.15rem;
  height: 0.25rem;
}
 .pinktext #close {
  width: 0.2rem;
  height: 0.2rem;
  float: right;
}
 .hui {
  border-bottom: 1px solid #ccc;
  box-sizing:border-box;

}
 .hui img {
  float: left;
  width: 0.2rem;
  height: 0.25rem;
  margin-top: 0.1rem;
}
 .hui #eye {
  width: 0.25rem;
  height: 0.2rem;
  float: right;
}
 .btn {
  width: 100%;
  padding: 0.1rem;
  margin-top: .6rem;
  box-sizing:border-box;
  height: 0.6rem;
}

.btn1 {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 0.2rem;
  border: 0;
  border-radius: 0.1rem;
  background: #ed5858;
}

</style>