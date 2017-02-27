<template>
<div class="zhanghu">
	<div class="bigBox" id="bigBox">
			<div class="main" id="main">
				<div class="header">
					<div class="head_img_box">
						<div class="head_img acquiesce">
						</div>
						<div class="btn">
							<span><router-link to="/login">登录</router-link></span>
							<span><router-link to="/register">注册</router-link></span>
						</div>
					</div>
				</div>
				<div class="content">
					<div class="img_list">
						<p>
							<img src="/static/images/lb.png" alt="">
							<i>推荐有礼</i>
						</p>
						<p>
							<img src="/static/images/sign.png" alt="">
							<i>签到</i>
						</p>
						<p>
							<img src="/static/images/lq.png" alt="">
							<i>礼券</i>
						</p>
						<p>
							<img src="/static/images/jf.png" alt="">
							<i>积分</i>
						</p>
					</div>
					<ul class="item">
						<li><router-link to='/jiaoyi'><p>交易记录<label for=""><span></span><i class="iconfont">&#xe6a0;</i></label></p></router-link></li>
						<li><router-link to='/yanzheng'><p>身份验证<label for=""><span>已认证</span><i class="iconfont">&#xe6a0;</i></label></p></router-link></li>
						<li><router-link to='/yinhangka'><p>我的银行卡<label for=""><span>未绑定</span><i class="iconfont">&#xe6a0;</i></label></p></router-link></li>
						<li id="set"><router-link to='/set'><p>设置<label for=""><span></span><i class="iconfont">&#xe6a0;</i></label></p></router-link></li>
					</ul>
				</div>
			</div>
		</div>
</div>
</template>

<script>
	export default{
		name:'zhanghu'
	}
</script>

<style scoped>
.zhanghu{
	width: 100%;
	flex: 1;
	overflow-y: scroll;
}
.zhanghu, .bigBox, .imgBox {
  width: 100%;
  height: 100%;
  display:flex; }

.zhanghu .bigBox {
  position: relative; }

.zhanghu .bigBox .imgBox img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-box-flex: none; }


.zhanghu .bigBox .scroll_Btn {
  position: fixed;
  left: 50%;
  bottom: .37rem;
  width: 36%;
  height: .19rem;
  display: -webkit-flex;
  margin: 0 auto;
  margin-left: -18%; }

.zhanghu .bigBox .scroll_Btn li {
  -webkit-flex-grow: 1;
  background: #fff; }
  .zhanghu .bigBox .scroll_Btn li::after {
    content: "";
    display: block;
    width: .19rem;
    height: .19rem;
    background: red;
    border-radius: 50%;
    margin: 0 auto; }
.zhanghu {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  }

.zhanghu .bigBox {
  width: 100%; }

.zhanghu .bigBox .main {
  width: 100%;
  flex: 1;

  overflow-y: scroll; }

.zhanghu .bigBox .main .header {
  background: #ed5858;
  padding: .1rem 0;
  width: 100%;}

.zhanghu .bigBox .main .header .head_img_box {
  width: 100%;
  position: relative; }

.zhanghu .bigBox .main .header .head_img_box .head_img {
	margin: 0 auto;
  border: 1px solid #ccc;
  background: url(/static/images/head_img1.png) no-repeat;
  background-size: contain;
 }

.zhanghu .bigBox .main .header .head_img_box .acquiesce {
  width: .84rem;
  height: .84rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: url(/static/images/mrtx.png) no-repeat;
  background-size: contain;
  margin-top: 18px; }
.zhanghu li{
  box-sizing: border-box;
}
.zhanghu .bigBox .main .header .head_img_box .price, .property, .income {
  width: 100%; }
  .zhanghu .bigBox .main .header .head_img_box .price p, .property p, .income p {
    line-height: 24px; }
  .zhanghu .bigBox .main .header .head_img_box .price small, .property small, .income small {
    color: #fff;
    font-size: 14px;
    text-align: center;
    display: block; }
  .zhanghu .bigBox .main .header .head_img_box .price b, .property b, .income b {
    color: #fff;
    font-size: 20px;
    text-align: center;
    display: block; }

.zhanghu .bigBox .main .header .head_img_box .price, .income {
  margin-top: 0.05rem; }

.zhanghu .bigBox .main .header .head_img_box .price .income {
  width: 100%;
  display: -webkit-flex; }

.zhanghu .bigBox .main .header .head_img_box .price .income p {
  -webkit-flex-grow: 1; }

.zhanghu .bigBox .main .header .head_img_box .btn {
  width: 100%;
  height: .3rem;
  display: flex;
  margin-top: 0.05rem; }

.zhanghu .bigBox .main .header .head_img_box .btn span {
 width: 36%;
  margin: 0 7%;
  height: .32rem;
  line-height: .32rem;
  border: 1px solid #fff;
  text-align: center;
  display: block;
  border-radius: 5px;
  background: #ffbb00;
  font-size: 20px;}
.zhanghu .bigBox .main .header .head_img_box .btn span a{
	color: #fff;
}
.zhanghu .bigBox .main .header .head_img_box .btn input.white_btn {
  border: 1px solid #ccc; }

.zhanghu .bigBox .main .content {
  width: 100%;
  margin-top: 10px;
  padding-bottom: 50px;
  background: #fff; }

.zhanghu .bigBox .main .content .img_list {
  width: 100%;
  height: 1rem;
  display:flex; 
  border-bottom: 1px solid #ccc;
  
  }

.zhanghu .bigBox .main .content .img_list p {
  flex: 1; }

.zhanghu .bigBox .main .content .img_list p img {
  width: .4rem;
  height: .4rem;
  display: block;
  margin: 0 auto;
  margin-top: .2rem; }

.zhanghu .bigBox .main .content .img_list p i {
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: .3rem; }

.zhanghu .item {
  width: 100%; }

.zhanghu .item li {
  width: 100%;
  height: .43rem;
  border-bottom: 1px solid #ccc;
  padding-left: 20px; }
  .zhanghu .item li:nth-of-type(1) {
    background: #fff url(/static/images/tz.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item li:nth-of-type(2) {
    background: #fff url(/static/images/list_img.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item li:nth-of-type(3) {
    background: #fff url(/static/images/yz.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item li:nth-of-type(4) {
    background: #fff url(/static/images/yhk.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item li:nth-of-type(5) {
    background: #fff url(/static/images/sz.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item li:nth-of-type(6) {
    background: #fff url(/static/images/sz.png) no-repeat 10px center;
    background-size: .17rem .17rem; }

.zhanghu .item1 li {
  width: 100%;
  height: .43rem;
  border-top: 1px solid #ccc;
  padding-left: 20px; }
  .zhanghu .item1 li:nth-of-type(1) {
    background: #fff url(/static/images/gg.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item1 li:nth-of-type(2) {
    background: #fff url(/static/images/th.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item1 li:nth-of-type(3) {
    background: #fff url(/static/images/about.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item1 li:nth-of-type(4) {
    background: #fff url(/static/images/call.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item1 li:nth-of-type(5) {
    background: #fff url(/static/images/use.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .zhanghu .item1 li:nth-of-type(6) {
    background: #fff url(/static/images/help.png) no-repeat 10px center;
    background-size: .17rem .17rem; }

.zhanghu .item2 li {
  width: 100%;
  height: .43rem;
  line-height: .43rem;
  border-top: 1px solid #ccc;
  padding-left: 20px;
  background: #fff; }

.zhanghu .item2 li p {
  line-height: .43rem; }

.zhanghu .item3 li {
  width: 100%;
  height: .43rem;
  line-height: .43rem;
  border-top: 1px solid #ccc;
  padding-left: 20px;
  background: #fff;
  display: -webkit-flex; }

.zhanghu .item3 li label {
  width: 20%;
  display: inline-block;
  text-align: right;
  padding-right: .1rem; }

.zhanghu .item3 li small {
  -webkit-flex-grow: 1;
  font-size: 14px;
  position: relative; }
  .zhanghu .item3 li small a {
    position: absolute;
    right: .1rem;
    color: #999;
    font-size: 12px; }

.zhanghu .item2 li p label {
  display: inline-block;
  position: absolute;
  right: .1rem;
  color: #cacaca; }
  .zhanghu .item2 li p label a {
    font-size: 12px;
    color: #cacaca;
    padding-left: 5px; }

.zhanghu .item2 li p .phone {
  color: #ff8800; }

.zhanghu .item li p {
  line-height: .43rem;
  padding-left: 15px; }

.zhanghu .item li p label {
  display: inline-block;
  position: absolute;
  right: .1rem;
  color: #cacaca; }
  .zhanghu .item li p label a {
    font-size: 12px;
    color: #cacaca;
    padding-left: 5px; }

/******更多********/
.zhanghu .head {
  width: 100%;
  height: .42rem;
  background: #ed5858;
  color: #fff;
  line-height: .42rem;
  position: relative; }
  .zhanghu .head a {
    position: absolute; }
    .zhanghu .head a:nth-of-type(1) {
      left: .1rem;
      font-size: 18px;
      margin-top: -9px; }
  .zhanghu .head h1 {
    padding: 0 .2rem;
    font-size: 20px;
    text-align: center;
    line-height: .42rem; }

.zhanghu .content1 {
  width: 100%;
  background: #eeeeee;
  -webkit-box-flex: 1;
  overflow-y: scroll;
  margin-bottom: 53px; }
</style>