<template>
	<div class="login_after">
		<div class="bigBox" id="bigBox">
			<div class="main" id="main">
				<div class="header">
					<div class="head_img_box">
						<a></a>
						<div class="head_img">
							
						</div>
						<a></a>
						<div class="price">
							<div class="property">
								<p>
									<small>总资产(元)</small>
									<b>209,089.00</b>
								</p>
							</div>
							<div class="income">
								<p>
									<small>今日收益(元)</small>
									<b>515.33</b>

								</p>
								<p>
									<small>今日收益(元)</small>
									<b>515.33</b>

								</p>
							</div>
						</div>
						<div class="btn">
							<input type="submit" value="充值" class="yellow_btn">
							<input type="submit" value="提现" class="white_btn">
						</div>
					</div>
				</div>
				<div class="content">
					<div class="img_list">
						<p>
							<img src="/static/images/lb.png" alt="">
							<a>推荐有礼</a>
						</p>
						<p>
							<img src="/static/images/sign.png" alt="">
							<a>签到</a>
						</p>
						<p>
							<img src="/static/images/lq.png" alt="">
							<a>礼券</a>
						</p>
						<p>
							<img src="/static/images/jf.png" alt="">
							<a>积分</a>
						</p>
					</div>
					<ul class="item item1">
						<li>
              <router-link to='/index/product'>
                <p>我的投资<label for=""><span>¥195,000.00 </span><a>＞</a></label></p>
              </router-link>
            </li>
						<li id="jiaoyi">
              <router-link to='/jiaoyi'>
                <p>交易记录<label for=""><span></span><a>＞</a></label></p>
              </router-link>
            </li>
						<li id="rank">
              <router-link to='/yanzheng'>
                <p>身份验证<label for=""><span>已认证</span><a>＞</a></label></p>
              </router-link>
            </li>
						<li>
              <router-link to='/yinhangka'>
               <p>我的银行卡<label for=""><span>未绑定</span><a>＞</a></label></p>
              </router-link>
            </li>
						<li id="set">
              <router-link to='/set'>
                <p>设置<label for=""><span></span><a>＞</a></label></p>
              </router-link>
            </li>
					</ul>
				</div>
        <Confirm ></Confirm>
        <div class='exit' @click="exit">退出登录</div>
			</div>
		</div>
		
	</div>
</template>

<script>
 import Vue from 'vue';
 import {Confirm,ConfirmPlugin} from 'vux'
  Vue.use(ConfirmPlugin)
	export default{
		name:"login_after",
    components:{
      Confirm
    },
    props:["hrefs"],
    created(){
      console.log(this,111)
    },
    methods:{
      exit(){
        var _this = this;
        this.$vux.confirm.show({
          title:"你确定要退出登录吗？",
          onConfirm(){
            localStorage.removeItem('userName');
            localStorage.removeItem('imgUrl');
            localStorage.removeItem('nickName');
             _this.$router.push("/index/zhanghu");
             // console.log( localStorage.getItem('userName'))
          }
        })
      }
    }
	}
</script>

<style scoped>
	
 .login_after{
  width: 100%;
  height: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-y: scroll;
  ing: touch; }
 #bigBox {
  width: 100%; }
 #bigBox .main {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  background: #ed5858;
  overflow-y: scroll; }
 .bigBox .main .header {
  width: 100%;
  padding: 0 .1rem; 
  box-sizing:border-box;
}
 .bigBox .main .header .head_img_box {
  width: 100%;
  position: relative; }
 .bigBox .main .header .head_img_box a {
  position: absolute;
  top: -.08rem;
  display: block; }
  .bigBox .main .header .head_img_box a:nth-of-type(1) {
    width: .30rem;
    height: .25rem;
    background: url(/static/images/icon_email.png) no-repeat;
    background-size: contain;
    left: 0; }
  .bigBox .main .header .head_img_box a:nth-of-type(2) {
    width: .30rem;
    height: .25rem;
    background: url(/static/images/write.png) no-repeat;
    background-size:contain;
    right: 0; }
 .bigBox .main .header .head_img_box .head_img {
  width: .84rem;
  height: .84rem;
  margin:0 auto;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: url(/static/images/head_img1.png) no-repeat;
  background-size: contain;
  margin-top: .18rem; }
 .bigBox .main .header .head_img_box .acquiesce {
  width: .84rem;
  height: .84rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  background: url(/static/images/mrtx.png) no-repeat;
  background-size: contain;
  margin-top: .18rem; }
 .bigBox .main .header .head_img_box .price, .property, .income {
  width: 100%; }
  .bigBox .main .header .head_img_box .price p, .property p, .income p {
    line-height: .24rem; }
  .bigBox .main .header .head_img_box .price small, .property small, .income small {
    color: #fff;
    font-size: .14rem;
    text-align: center;
    display: block; }
  .bigBox .main .header .head_img_box .price b, .property b, .income b {
    color: #fff;
    font-size: .20rem;
    text-align: center;
    display: block; }
 .bigBox .main .header .head_img_box .price, .income {
  margin-top: 0.05rem; }
 .bigBox .main .header .head_img_box .price .income {
  width: 100%;
  display: -webkit-flex; }
 .bigBox .main .header .head_img_box .price .income p {
  -webkit-flex-grow: 1; }
 .bigBox .main .header .head_img_box .btn {
  width: 100%;
  height: .3rem;
  display: -webkit-box;
  margin-top: 0.05rem; }
 .bigBox .main .header .head_img_box .btn input {
  display: block;
  -webkit-box-flex: 1;
  background: none;
  border: none;
  margin: 0 .10rem;
  height: .3rem;
  color: #fff;
  border-radius: 5px;
  font-size: .20rem;
  outline: none; }
 .bigBox .main .header .head_img_box .btn input.yellow_btn {
  background: #ffbb00; }
 .bigBox .main .header .head_img_box .btn input.white_btn {
  border: 1px solid #ccc; }
 .bigBox .main .content {
  width: 100%;
  margin-top: .10rem;
	box-sizing:border-box;

  background: #fff; }
 .bigBox .main .content .img_list {
  width: 100%;
  height: 1.0rem;
  display: -webkit-flex; }
 .bigBox .main .content .img_list p {
  -webkit-flex-grow: 1; }
 .bigBox .main .content .img_list p img {
  width: .4rem;
  height: .4rem;
  display: block;
  margin: 0 auto;
  margin-top: .2rem; }
 .bigBox .main .content .img_list p a {
  display: block;
  text-align: center;
  font-size: .14rem;
  line-height: 0.3rem; }
 .item {
  width: 100%; }
 .item li {
  width: 100%;
  height: 0.43rem;
  border-top: 1px solid #ccc;
  padding-left: .20rem; 
	box-sizing:border-box;
	
}
  .item li:nth-of-type(1) {
    background: #fff url(/static/images/tz.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item li:nth-of-type(2) {
    background: #fff url(/static/images/list_img.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item li:nth-of-type(3) {
    background: #fff url(/static/images/yz.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item li:nth-of-type(4) {
    background: #fff url(/static/images/yhk.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item li:nth-of-type(5) {
    background: #fff url(/static/images/sz.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item li:nth-of-type(6) {
    background: #fff url(/static/images/sz.png) no-repeat .10rem center;
    background-size: .17rem 17rem; }
 .item1 li {
  width: 100%;
  height: 0.43rem;
  border-top: 1px solid #ccc;
  padding-left: .20rem;
	box-sizing:border-box;
	
   }
  .item1 li:nth-of-type(1) {
    background: #fff url(/static/images/gg.png) no-repeat 10px center;
    background-size: .17rem .17rem; }
  .item1 li:nth-of-type(2) {
    background: #fff url(/static/images/th.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item1 li:nth-of-type(3) {
    background: #fff url(/static/images/about.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item1 li:nth-of-type(4) {
    background: #fff url(/static/images/call.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item1 li:nth-of-type(5) {
    background: #fff url(/static/images/use.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
  .item1 li:nth-of-type(6) {
    background: #fff url(/static/images/help.png) no-repeat .10rem center;
    background-size: .17rem .17rem; }
 .item2 li {
  width: 100%;
  height: 0.43rem;
  line-height: 0.43rem;
  border-top: 1px solid #ccc;
  padding-left: 0.20rem;
	box-sizing:border-box;

  background: #fff; }
 .item2 li p {
  line-height: 0.43rem; }
 .item3 li {
  width: 100%;
  height: 0.43rem;
  line-height: 0.43rem;
  border-top: 1px solid #ccc;
  padding-left: 0.20rem;
	box-sizing:border-box;
  background: #fff;
  display: -webkit-flex; }
 .item3 li label {
  width: 20%;
  display: inline-block;
  text-align: right;
  padding-right: 0.1rem;
	box-sizing:border-box;
	
   }
 .item3 li small {
  -webkit-flex-grow: 1;
  font-size: 0.14rem;
  position: relative; }
  .item3 li small a {
    position: absolute;
    right: 0.1rem;
    color: #999;
    font-size: 0.12rem; }
 .item2 li p label {
  display: inline-block;
  position: absolute;
  right: 0.1rem;
  color: #cacaca; }
  .item2 li p label a {
    font-size: 0.12rem;
    color: #cacaca;
    padding-left: 0.05rem;
	box-sizing:border-box;
	
     }
 .item2 li p .phone {
  color: #ff8800; }
 .item li p {
  line-height: 0.43rem;
  padding-left: 0.15rem;
	box-sizing:border-box;
	
   }
 .item li p label {
  display: inline-block;
  position: absolute;
  right: 0.1rem;
  color: #cacaca; }
  .item li p label a {
    font-size: 0.12rem;
    color: #cacaca;
    padding-left: 0.05rem;
	box-sizing:border-box;
     }
  .exit{
    width:100%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    color: #fff;
    font-size: .20rem;
    font-weight: bold;
    border-radius: 10px;
  }


</style>