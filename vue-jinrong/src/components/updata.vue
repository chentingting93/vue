<template>
<div class="updata">
	<header class="header">
		<router-link to="/set"><img src="/static/images/01.png"></router-link>
		<h2>版本更新</h2>
	</header>
	<section class="main">
		<div class="cont">
			<img src="/static/images/update.png">
			<p>正在检查新版本</p>
		</div>
	</section>
</div>
</template>

<script>
	export default{
		name:"updata"
	}
</script>

<style scoped>
.updata{
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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
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
  -webkit-box-flex: 1;
  background: #eeeeee;
}
/*----- cont ------*/
.cont {
  width: 60%;
  height: 250px;
  position: absolute;
  top: 50%;
  margin-top: -125px;
  left: 50%;
  margin-left: -30%;
}
.cont img {
  position: absolute;
  left: 50%;
  margin-left: -31px;
  top: 50%;
  margin-top: -35px;
}
.cont p {
  text-align: center;
  color: #afafaf;
  line-height: 350px;
}
</style>