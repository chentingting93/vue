<template>
	<div class="product">
		<section class='touzi' id='touzi'>
			<header class="header">
				<a  class='back' id='back'></a>
				<h2 id='title'>我的投资</h2>			
			</header>
				<div class='con' id='con'>
					<div class='item' id='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
					<div class='item'>
						<h2>汽车供应链第73期</h2>
						<p><span>投资期限</span>3个月 (2015.06.16~2015.09.16)</p>
						<ul>
							<li><span>年化收益率</span>12%</li>
							<li><span>投资金额</span>10000元</li>
							<li><span>已收利息</span>100元</li>
							<li><span>待收利息</span>200元</li>
						</ul>
					</div>
				</div>
			
		</section>
	</div>
</template>

<script>
import {Scroller} from 'vux'
	export default{
		name:'product',
		components:{
			Scroller
		}
	}
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.44rem;
  position: relative;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc; 
  text-align: center;
}
  .header a {
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    left: 0.1rem;
    top: 0.12rem;
    background: url(/static/images/return_03.png) no-repeat;
    background-size: contain;
}
  .header h2 {
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.16rem; }
	.product{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		background: #eeeeee;

	}

#touzi{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
	box-sizing:border-box;
}

#touzi .con {
  width: 100%;
  height: 100%;
	flex:1;
  overflow-y:scroll; 
  box-sizing:border-box;
}
#touzi .con .item {
  width: 100%;
  padding: 0 0.1rem;
  margin-top: 0.1rem;
  background: #fff;
  box-sizing:border-box;
}
#touzi .con .item h2 {
  line-height: 0.2rem;
  font-weight: normal;
}
#touzi .con .item p {
  width: 100%;
  line-height: 0.2rem;
  border-bottom: 1px solid #ddd;
  color: #666666;
}
#touzi .con .item p span {
  color: #c1c1c1;
  margin-right: 0.1rem;
}
#touzi .con .item ul {
  width: 100%;
  height: 0.55rem;
}
#touzi .con .item ul li {
  width: 25%;
  float: left;
  line-height: 0.25rem;
  color: #ff8800;
}
#touzi .con .item ul li span {
  display: block;
  color: #c1c1c1;
  width: 100%;
}
</style>