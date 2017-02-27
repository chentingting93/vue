<template>
	<div class="yinhangka">
		<header class="head head_bank">
			<ul>
				<li>
					<router-link to='/zhanghu' class='iconfont'>&#xe60a;</router-link>
				</li>
				<li>
					绑定银行卡
				</li>
				<li>
					<a href="#" style="display:none">更改</a>
				</li>
			</ul>
		</header>
		<div class="prompt prompt1">
			<p><span>温馨提示：</span>只能绑定**龙本人的银行卡</p>
			<div class="news">
				<form>
					<ul>
						<li><label>开户银行</label><small><a href="#">＞</a></small></li>
						<li><label>支行名称</label><small><input type="text"value="请输入支行名称"></small></li>
						<li><label>卡号</label><small><input type="text"value="请输入银行卡号"></small></li>
						<li><label>预留手机号</label><small>131****985<a href="#" class="send">发送验证码</a></small></li>
						<li><label>验证码</label><small><input type="text"value="请输入手机验证码"></small></li>
					</ul>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"yinhangka"
	}
</script>

<style scoped>
.yinhangka{
	width: 100%;
	height: 100%;
	font-size: .16rem;
}
 .head_bank {
 	width: 100%;
 	height: .44rem;
  background: #f5f5f5;
  color: #000;
  border-bottom: 1px solid #999; 
}

.head_bank ul{
	width: 100%;
	height: 100%;
	line-height: .44rem;
	display: -webkit-flex;
}

.head_bank ul li{
	flex:1;
}

.head_bank ul li:nth-child(1){
	padding-left: .1rem;
	box-sizing:border-box;
}

.head_bank ul li:nth-child(2){
	font-size: .18rem;
	text-align: center;
}
 .prompt {
  width: 100%;
  -webkit-box-flex: 1; }
 .prompt .bind_bank {
  width: 92%;
  height: 0.98rem;
  border: 1px dashed #ccc;
  border-radius: 5px;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem; }
 .prompt .bind_bank a {
  display: block;
  text-align: center; }
  .prompt .bind_bank a:nth-of-type(1) {
    font-size: 80px;
    font-weight: bold;
    color: #ccc; }
  .prompt .bind_bank a:nth-of-type(2) {
    font-size: 0.18rem;
    color: #ccc;
    line-height: 0.18rem; }
 .prompt_text {
  width: 100%;
  padding: 0 0.15rem;
	box-sizing:border-box;
   }
  .prompt_text h3 {
    font-size: 0.16rem;
    color: #ff8800; }
  .prompt_text p {
    font-size: 0.14rem;
    line-height: 0.2rem;
    color: #999; }

/***********绑定银行卡**********/ 
.prompt1 p {
  width: 100%;
  height: 0.43rem;
  line-height: 0.43rem;
  padding-left: 0.1rem;
	box-sizing:border-box;
   }
  .prompt1 p span {
    color: #ff8800; }
 .prompt1 .news {
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-left: 0.1rem; 
  box-sizing:border-box;
}
 .prompt1 .news form ul li {
  width: 100%;
  height: .43rem;
  line-height: .43rem;
  border-bottom: 1px solid #ccc;
  display: -webkit-flex; }
  .prompt1 .news form ul li:last-child {
    border: none; }
  .prompt1 .news form ul li label {
    display: block;
    width: 0.85rem;
    }
  .prompt1 .news form ul li small {
    -webkit-flex-grow: 1;
    border: none;
    padding-left: 0.1rem;
    box-sizing:border-box;
    font-size: 0.16rem;
    position: relative; }
    .prompt1 .news form ul li small input {
      border: none;
      color: #999;
      font-size: 0.14rem;
      outline: none; }
    .prompt1 .news form ul li small a {
      position: absolute;
      right: 0.1rem;
      color: #999;
      font-size: 0.12rem; }
    .prompt1 .news form ul li small .send {
      position: absolute;
      right: 0.1rem;
      top: 50%;
      margin-top: -0.13rem;
      width: 0.83rem;
      height: 0.27rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.27rem;
      border-radius: 5px;
      font-size: 0.14rem; }
</style>