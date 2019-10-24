<template>
  <div id="app">
    <van-tabs v-model="active">
      <van-tab title="数学">
        <HelloWorld />
      </van-tab>
      <van-tab title="语文">
        <Pinyin />
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Pinyin from './components/Pinyin.vue'

  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab).use(Tabs);

  export default {
    components: {
      HelloWorld,
      Pinyin
    },
    data(){
      return {
        active:0
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cell{
  background: #eee;
  border-bottom: 1px solid #fff;
}
.header{
  position: sticky;
  top:0;
  padding-top:20px;
  z-index: 10;
  background: #fff;
}
.van-checkbox__icon .van-icon{
  border: 1px solid #c5c5c5;
}
</style>
