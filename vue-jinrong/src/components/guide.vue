<template>
  <div class="guide" >
    <span class='tiao' @click='tiao'></span>
    <span class='tiyan' @click='tiao' v-show='isShow'></span>
    <Swiper height='100%' :list='banner' dotsPosition='center' :showDescMask='false' :showDots='true' dotsClass='dots_color' @on-index-change='indexChange'></Swiper>
  </div>
</template>

<script>

import { Swiper } from 'vux'
import Vue from 'vue'
import _$ from 'jquery'
Vue._$ = _$;

export default {
  name: 'guide',
  data () {
    return{
      banner:[
        {img:"/static/images/index1.png"},
        {img:"/static/images/index2.png"}
      ],
    isShow:false
    }
  },
  components:{
    Swiper
  },
  created(){
  },
  methods:{
    tiao:function(){
      this.$router.push('/index/home');
    },
    indexChange:function(index){
      if(index == 1){
        this.isShow=true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guide{
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  position: relative;
}

.vux-slider{
  width: 100%;
  height: 100%;
}
.dots_color{
  background-color: #fff;
}

span{
  position: absolute;
}

.tiao{
  right: 0.20rem;
  top: 0.2rem;
  z-index:99999;
  display: block;
  width: 0.6rem;
  height: 0.25rem;
}

.tiyan{
  display: block;
  width: 1.8rem;
  height: 0.5rem;
  top: 60%;
  bottom: 0;
  right: 0;
  left: 0;
  margin:auto;
  z-index: 99999;
}

</style>
