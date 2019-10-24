<template>
  <div class="hello">
     <div class="header">
      <van-button plain type="primary" @click="getData()">刷新</van-button>
        <van-cell-group>
          <van-field
            readonly
            label="最大数以内"
            clickable
            :value="max"
            clearable
            @touchstart.native.stop="show = true"
          />

          <van-number-keyboard
            v-model="max"
            :show="show"
            :maxlength="3"
            @blur="show = false"
            @delete="onDelete"
            @close="onClose($event)"
            @input="onInput"
            close-button-text="完成"
          />
        </van-cell-group>
    </div>
    
    <van-cell-group class="list">
      <van-cell v-for="(item, index) in list" :key="index" class="cell">
        <!-- 使用 title 插槽来自定义标题 -->
        <div>
          <span style="float:right;width:20px">{{index + 1}}</span>
          <van-checkbox v-model="item.e" checked-color="#07c160" style="width:65px;float:right">解决</van-checkbox>
        </div>

        <template slot="title">
          <span v-if="item.c > 0">{{item.a}} + {{item.b}} = {{item.d}}</span>
          <span v-else-if="item.a - item.b > 0">{{item.a}} - {{item.b}} = {{item.d}}</span>
          <span v-else>{{item.b}} - {{item.a}} = {{item.d}}</span>
        </template>
      </van-cell>


    </van-cell-group>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field, Button, Cell, CellGroup, NumberKeyboard, Toast, Checkbox} from 'vant';
  Vue.use(Button).use(Field).use(CellGroup).use(NumberKeyboard).use(Cell).use(Toast).use(Checkbox);
  
export default {
     data(){
      return {
        max:'10',
        show: false,
        list:[]
      }
    },
    mounted(){
      this.getData()
    },
    methods: {
      onDelete() {
        this.max = ''
      },
      onInput(value){
        this.max = value
      },
      onClose(){
        if(this.max < 10){
          Toast.fail('不能小于10')
          return false
        }
        this.getData()
      },
      getData(){
        this.list =  []
        for(let i = 0;i<20;i++){
          let a = Math.ceil(Math.random()*1000000000%(this.max-1))
          let c = Math.ceil(Math.random()*1000000000%10)%2
          let b = Math.ceil(Math.random()*1000000000%(c>0?this.max - a:(this.max-1)))
          let d
          let e = false
          if(c > 0){
            d = a + b
          }else{
            a = a + 1
            d = Math.abs(a - b)
          }
          if(a === b || (a >= 8 && c > 0) || (c == 0 && b < 2 ) || (b == 1 && c > 0)){
            i --
            continue
          }
          this.list.push({
            a,b,c,d,e
          })
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
