<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {sayHello,people} from './test.js'
export default {
  name: 'app'

}
</script>

<style>
@import "../css/reset.css";
@import "../css/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.vux-slider > .vux-indicator > a > .vux-icon-dot{
  width:.1rem !important;
  height: .1rem !important;
  border-radius: 50% !important;
}
.vux-slider > .vux-indicator > a > .active{
  background:#eee !important;
}
</style>
