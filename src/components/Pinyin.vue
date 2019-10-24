<template>
  <div>
    <div class="header">
      <van-button plain type="primary" @click="getData()">刷新</van-button>
      <van-checkbox-group v-model="result">
        <van-checkbox name="2">两字</van-checkbox>
        <van-checkbox name="3">三字</van-checkbox>
        <van-checkbox name="4">四字</van-checkbox>
      </van-checkbox-group>
    </div>
    <van-cell-group class="list">
      <van-cell v-for="(item, index) in list" :key="index" class="cell">
        <!-- 使用 title 插槽来自定义标题 -->
        <div>
          <span style="float:right;width:20px">{{index + 1}}</span>
        </div>

        <template slot="title">
            <div style="text-align:center">
                <span>{{item.zh}}</span> <span style="margin-left:15px;">{{item.pinyin}}</span>

            </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>



<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";
import Axios from 'axios'
Vue.use(Checkbox).use(CheckboxGroup);

export default {
  data() {
    return {
      result: ["2", "3"],
      list:[]
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
        Axios.get('http://localhost:3000/pinyin/get',{params: {number:this.result}}).then(res=>{
            if(res.data.success){
                this.list = res.data.data
            }
        })
    }
  }
};
</script>


<style scoped>
.van-checkbox {
  width: 30%;
  margin-top: 10px;
  display: inline-block;
}
.header /deep/ .van-checkbox__icon {
  width: 30px !important;
  display: inline-block;
}
</style>