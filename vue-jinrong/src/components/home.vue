<template>
	<div class="home">
		<header class="header">
			<h1><span><img src="/static/images/11_03.jpg" alt=""></span>开财宝</h1>
			<a></a>
		</header>
		<section class="main">
			<div class="title">
				<Swiper :list='banner' :showDots='true' dotsPosition='center' :showDescMask='false' height='100%' auto loop :interval='3000' ></Swiper>
			</div>
			<div class="info">
				<ul>
					<li>累计成交金额</li>
					<li><b>29,089.80 <small>万元</small></b></li>
				</ul>
				<ul>
					<li>为投资人赚取利益</li>
					<li><b>594.89<small>万元</small></b></li>
				</ul>
			</div>
			<div class="con">
				<div class="car">
					<p><span>押车宝</span><time>汽车供应链第75期</time></p>
					<div class="qang">
						<h1><b>12<small>.0%</small></b><time>年化收益</time></h1>
						<ul>
							<li>期限</li>
							<li><b>3</b>个月</li>
						</ul>
						<dl>
							<dt><a>抢购</a></dt>
							<dd>163人购买</dd>
						</dl>
					</div>
				</div>
				<div class="water">
					<p><span>流水宝</span><time>餐饮供应链第73期</time></p>
					<div class="qang">
						<h1><b>14<small>.0%</small></b><time>年化收益</time></h1>
						<ul>
							<li>期限</li>
							<li><b>15</b>天</li>
						</ul>
						<dl>
							<dt><a>抢购</a></dt>
							<dd>163人购买</dd>
						</dl>
					</div>
				</div>
				<div class="car">
					<p><span>押车宝</span><time>汽车供应链第75期</time></p>
					<div class="qang">
						<h1><b>12<small>.0%</small></b><time>年化收益</time></h1>
						<ul>
							<li>期限</li>
							<li><b>3</b>个月</li>
						</ul>
						<dl>
							<dt><a>抢购</a></dt>
							<dd>163人购买</dd>
						</dl>
					</div>
				</div>
				<div class="water">
					<p><span>流水宝</span><time>餐饮供应链第73期</time></p>
					<div class="qang">
						<h1><b>14<small>.0%</small></b><time>年化收益</time></h1>
						<ul>
							<li>期限</li>
							<li><b>15</b>天</li>
						</ul>
						<dl>
							<dt><a>抢购</a></dt>
							<dd>163人购买</dd>
						</dl>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {Swiper} from 'vux'
export default{
	name:'home',
	components:{
    Swiper
  },
	data(){
		return{
			banner:[
				{img:'/static/images/shou_turn.jpg'},
				{img:'/static/images/shou_turn.jpg'},
				{img:'/static/images/shou_turn.jpg'},
				{img:'/static/images/shou_turn.jpg'}
			]	
		}
	}
}
</script>

<style scoped>
.home{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
	box-sizing:border-box;
}
.header {
  width: 100%;
  height: 45px;
  position: relative;
  background: #ed5858; }
  .header h1 {
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    position: relative; }
    .header h1 span {
      display: block;
      width: 25px;
      height: 25px;
      top: 5px;
      left: 35%;
      position: absolute; }
      .header h1 span img {
        width: 25px;
        height: 25px; }
  .header a {
    position: absolute;
    width: 25px;
    height: 25px;
    background: url(/static/images/img_03.jpg) no-repeat;
    background-size: contain;
    right: 10px;
    top: 50%;
    margin-top: -10px; }

/*-------------主体-----------*/
.main {
	width: 100%;
	-webkit-flex-grow: 1;
	display: -webkit-flex;
	flex-direction: column;
}
.main .title {
	width: 100%;
	height: 2.8rem;
	position: relative;
	overflow: hidden; 
}
.main .title .pics {
  width: 100%;
  height: 1.4rem;
}
  .main .title .pics img {
    width: 100%;
    height: 100%;
}
  .main .info {
    width: 100%;
    height: 158px;
    border-bottom: 1px solid #ccc;
    display: -webkit-flex;
}
    .main .info ul {
      width: 50%;
      text-indent: 15px;
      height: 60px;
      margin-top: 10px;
      border-right: 1px solid #ccc;

    }
      .main .info ul:nth-of-type(2) {
        border: none; 
    }
      .main .info ul li {
        line-height: 25px;
        font-size: 14px; 
    }
        .main .info ul li:nth-of-type(2) {
          color: #ed5858;
          font-size: 20px; 
      }
  .main .con {
    -webkit-flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
     }
    .main .con .car, .main .con .water {
      width: 100%;
      height: 160px;
      margin-top: 14px;
      background: #e5f6ff;
      display: -webkit-flex;
      flex-direction: column;
       }
      .main .con .car p, .main .con .water p {
        width: 100%;
        height: 40px;
         }
        .main .con .car p span, .main .con .water p span {
          width: 25%;
          height: 100%;
          background: #29b8e8;
          color: #fff;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
          float: left; 
      }
        .main .con .car p time, .main .con .water p time {
          display: block;
          float: right;
          margin-right: 15px;
          margin-right: 15px;
          line-height: 40px;
          color: #aaa; 
      }
      .main .con .car .qang, .main .con .water .qang {
        width: 100%;
      	display: -webkit-flex;
        padding: 10px;
        box-sizing:border-box;
        margin-top: 10px; 
    }
        .main .con .car .qang h1, .main .con .water .qang h1 {
          width: 33%;
          float: left;
          text-align: center;
          position: relative;
          left: -20px; 
      }
          .main .con .car .qang h1 b, .main .con .water .qang h1 b {
            color: #ff8800;
            font-size: 60px; 
        }
            .main .con .car .qang h1 b small, .main .con .water .qang h1 b small {
              font-size: 16px; }
          .main .con .car .qang h1 time, .main .con .water .qang h1 time {
            position: absolute;
            font-size: 14px;
            right: -18px;
            top: 15px;
            color: #aaa; }
        .main .con .car .qang ul, .main .con .water .qang ul {
          width: 33%;
          float: left;
          margin: 0 auto;
          text-align: center;
          color: #aaa;
          line-height: 30px; }
          .main .con .car .qang ul b, .main .con .water .qang ul b {
            font-size: 22px;
            color: #333; }
        .main .con .car .qang dl, .main .con .water .qang dl {
          width: 33%;
          float: left;
          margin: 0 auto;
          text-align: center; }
          .main .con .car .qang dl dt, .main .con .water .qang dl dt {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #ed5858;
            margin: 0 auto;
            line-height: 50px;
            text-align: center; }
            .main .con .car .qang dl dt a, .main .con .water .qang dl dt a {
              color: #fff; }
          .main .con .car .qang dl dd, .main .con .water .qang dl dd {
            color: #aaa;
            text-align: center;
            line-height: 25px; }
    .main .con .water {
      background: #fffde0; }
      .main .con .water p span {
        background: #ff8800; }

       .vux-slider{
       	width: 100%;
       	height: 1.4rem;
       }
</style>