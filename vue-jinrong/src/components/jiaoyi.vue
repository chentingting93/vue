<template>
	<div class="jiaoyi">
			<header class="header">
				<router-link to="/index/zhanghu" class="iconfont">&#xe60a;</router-link>
				<h2 id='title'>交易记录</h2>
				<a id='tools'></a>
			</header>
			<div id='count' class='count'>
				<ul id='list'>
					<li>提现<span style='color:red;'>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
					<li>提现<span>-15450</span><p>13:36</p></li>
				</ul>
			</div>
	</div>
</template>

<script>
	export default{
		name:"jiaoyi"
	}
</script>

<style scoped>
.jiaoyi{
	width: 100%;
	height: 100%;
	font-size: .16rem;
	display:flex;
	flex-direction:column;
	position: relative;
}
.header {
 position: relative;
  width: 100%;
  height: 0.44rem;
  background: #fff;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.header h2{
	margin: 0 auto;
}
.header a {
  line-height: 0.44rem;
  padding:0 15px;
  color: #ccc;
}
.header #tools {
  right: 0;
  background: url(/static/images/03.png) no-repeat;
  background-size: 0.17rem 0.17rem;
  margin: 10px 0;
}
.header h2 {
  line-height: 0.44rem;
  text-align: center;
  font-size: .18rem;
}
/*-------count--------*/
#count {
  flex: 1;
  width: 100%;
  box-sizing:border-box;
   overflow-y:scroll; 
}
#count ul {
  width: 100%;
  height: 100%;
 
}
#count ul li {
  height: 0.5rem;
  line-height: 0.4rem;
  position: relative;
  text-indent: 0.1rem;
  border-bottom: 1px solid #ccc;
}
#count ul li span {
  float: right;
  margin-right: 0.1rem;
  line-height: 0.3rem;
  color: green;
}
#count ul li p {
  position: absolute;
  top: 0.17rem;
}
.zhezhao {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0.3rem;
  left: 0;
  display: none;
}
.zhezhao ul {
  width: 100%;
  background: #fff;
  display: none;
}
.zhezhao ul li {
  height: 0.4rem;
  font-size: 0.18rem;
  line-height: 0.4rem;
  border-bottom: 1px solid #ccc;
  text-indent: 0.3rem;
  position: relative;
}
.zhezhao ul li p {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  top: 50%;
  left: 0.3rem;
  margin-top: -0.1rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.1rem;
}
.zhezhao ul li input {
  position: absolute;
  top: 50%;
  margin-top: -0.1rem;
  width: 0.2rem;
  height: 0.2rem;
  opacity: 0;
  z-index: 999;
}
.zhezhao ul li input:checked + p {
  background: url(/static/images/checked.png) no-repeat;
  background-size: 100% 100%;
}
.zhezhao ul li label {
  float: left;
  margin-left: 0.3rem;
}

#count ul li:last-child{
  border-bottom: none;
}


</style>