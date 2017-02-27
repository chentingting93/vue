<template>
<div class="opinion">
	<header class="header">
			<router-link to="/set"><img src="/static/images/01.png"></router-link>
			<h2>意见反馈</h2>
		</header>
		<section class="main">
      <Alert></Alert>
			<div>
				<textarea rows='10' cols='40' autofocus='true' placeholder='请填写反馈意见' v-model='values'></textarea>
				<a @click='submit'>提交</a>
			</div>
		</section>
</div>
</template>

<script>
import Vue from 'vue'
import {Alert,AlertPlugin} from 'vux'
Vue.use(AlertPlugin)
	export default{
		name:"opinion",
    data(){
      return{
        values:""
      }
    },
    components:{
      Alert
    },
    methods:{
      submit(){
        var _this = this;
        if(this.values){
          this.$http({
          url:"http://localhost:3333/opinion",
          params:{'values':this.values}
        }).then(function(res){
          if(res.body===0){
             this.$vux.alert.show({
              title: '已提交',
              content: '虚心接受您的意见',
              onHide () {
                _this.$router.push('/set')
              }
            })
           }
         
        },function(err){
          console.log(err)
        })
        }else{
            this.$vux.alert.show({
              title:'请填写反馈意见再提交'
            })
        }
        
      }
    }
	}
</script>

<style scoped>
.opinion{
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
  border-bottom: 1px solid #aaa;
  position: relative;
}
.header a {
  position: absolute;
  width: 15px;
  height: 25px;
  left: 10px;
  top: 50%;
  margin-top: -12px;
}
.header a img {
  width: 100%;
  height: 100%;
}
.header h2 {
  line-height: 48px;
  text-align: center;
  font-size: 16px;
}
/*------ main -----*/
.main {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  -webkit-box-flex: 1;
}
.main div {
  padding: 0 10px;
}
.main div p {
  width: 100%;
  height: 145px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  margin: 10px 0;
  background: #fff;
  color: #ccc;
  line-height: 30px;
  padding-left: 8px;
}
.main div a {
  display: block;
  width: 100%;
  height: 48px;
  background: #fad937;
  box-shadow: 0 3px 1px #fab937;
  border-radius: 10px;
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  font-weight: bold;
  color: #000;
}

</style>