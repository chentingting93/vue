<template>
	<div class="login">
		<header class='header'>
			<router-link to='/index/zhanghu'></rotuer-link>
		</header>
		<div class='denglu'>
			<div class='headimg'>
				<img src="/static/images/head.png" alt="" class='tou'>
			</div>
			<div class='shuru'>
				<div class='pinktext'>
					<img src="/static/images/iphone.png" alt="">
					<input type="text" class='phone' placeholder='请输入您的账号' v-model='phone'>
					<img src="/static/images/close.png" id='close'alt="">
				</div>
				<div class='clear'></div>
				<div class='pinktext hui'>
					<img src="/static/images/lock.png" alt="">
					<input type="password" class='pwd' placeholder='请输入您的密码' v-model='pwd'>
					<img src="/static/images/eye.png" id='eye'alt="">
				</div>
				<div class='clear'></div>
				<div class='btn'>
					<p class='btn1' @click='login'>登录</p>
				</div>
				<p class='pass'>忘记密码？</p>
				<div class='zhuce'>
					<p class='btn2'>注册就送20元红包</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
		name:'login',
    data () {
      return{
        phone:"",
        pwd:""
      }
    },
    methods:{
      login:function(){
        this.$http({
          url:"http://localhost:3333/login",
          params:{'phone':this.phone,'pwd':this.pwd}
        }).then(function(data){
           // console.log(data.body[0])
            if(data.body[0]){
              localStorage.setItem('userName',data.body[0].userName);
              localStorage.setItem('imgUrl',data.body[0].imgUrl);
              localStorage.setItem('nickName',data.body[0].nickName);
              this.$router.push("/index/login_after");
             // console.log(this.href)
            }else{
              alert("请输入的账号或密码有误请重新输入")
            }
       },function(err){
          console.log(err)
        })
       
      }
    }
	}
</script>

<style scoped>
.login{
	width: 100%;
	height: 100%;
}
 .header {
  border: 0;
  height: .44rem;
}

.header a{
	width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    position: absolute;
    top: 0;
    background: url(/static/images/01.png) no-repeat;
    background-size: 0.15rem 0.22rem;
    margin: 10px;
}
 .denglu {
 	width: 100%;
 	height: 100%;
  padding-top: 0.3rem;
  box-sizing:border-box;

}
 .headimg {
  width: 1rem;
  height: 1rem;
  border: 0.03rem solid #ccc;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
 .headimg img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.clear{
	width: 0;
	height: 0;
	clear: both;
}
.shuru {
  width: 100%;
  padding: 0.1rem;
  box-sizing:border-box;

}
.shuru .pinktext {
  height: 0.4rem;
  width: 100%;
  margin-top: 0.15rem;
  border-bottom: 1px solid pink;
  box-sizing:border-box;

}
.shuru .pinktext img {
  float: left;
  width: 0.15rem;
  height: 0.25rem;
  margin-top: 0.1rem;
}
.shuru .pinktext input {
  outline: none;
  float: left;
  margin: 0.1rem;
  border: 0;
  font-size: 0.15rem;
  height: 0.25rem;
}
.shuru .pinktext #close {
  width: 0.2rem;
  height: 0.2rem;
  float: right;
}
.shuru .hui {
  border-bottom: 1px solid #ccc;
  box-sizing:border-box;

}
.shuru .hui img {
  float: left;
  width: 0.2rem;
  height: 0.25rem;
  margin-top: 0.1rem;
}
.shuru .hui #eye {
  width: 0.25rem;
  height: 0.2rem;
  float: right;
}
.shuru .btn {
  width: 100%;
  padding: 0.1rem;
  box-sizing:border-box;
  height: 0.6rem;
}
.shuru .btn .btn1 {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 0.2rem;
  border: 0;
  border-radius: 0.1rem;
  background: #ed5858;
  text-align: center;
  line-height: .44rem;
}
.shuru .pass {
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.15rem;
  color: #5270ab;
}
.shuru .zhuce {
  width: 100%;
  padding: 0.1rem;
  box-sizing:border-box;
  height: 0.6rem;
  margin-top: 0.15rem;
}
.shuru .zhuce .btn2 {
  line-height: .44rem;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #ed5858;
  font-size: 0.2rem;
  border: 0.02rem solid #ed5858;
  border-radius: 0.1rem;
  background: #fff;
}
</style>