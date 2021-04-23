<!--
 * 
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃ 　
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃　　　　　　　　　　　
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug　　
 * 　　　┃　　　┃　　+　　　　　　　　　
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 * 
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-23 15:43:29
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-23 19:11:44
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <!-- <div class="clock" ref="oDiv">
    <div ref="oH" class="hour"></div>
    <div ref="oM" class="min"></div>
    <div ref="oS" class="sec"></div>
    <div class="dot"></div>
    <span
      v-for="(item, i) in 60"
      :key="i"
      :class="i % 5 === 0 ? 'bigScale' : 'scale'"
      :style="{ transform: `rotate(${i * 6}deg)` }"
    >
      <template v-if="i % 5 == 0">
        <em v-if="i === 0" :style="{ transform: `rotate(${-1 * i * 6}deg)` }"
          >12</em
        >
        <em v-else :style="{ transform: `rotate(${-1 * i * 6}deg)` }">{{
          i / 5
        }}</em>
      </template>
    </span>
  </div> -->
  <div class="clock-wrapper">
    <div class="clock-border">
      <div class="clock">
        <ul class="minute-marks">
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="five"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="hour" :style="!!h ? { transform: h } : {}">
          <div class="hand"></div>
        </div>
        <div class="minute" :style="!!m ? { transform: m } : {}">
          <div class="hand"></div>
        </div>
        <div class="second" :style="!!s ? { transform: s } : {}">
          <div class="hand"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const rotate = reactive({
      h: '',
      m: '',
      s: '',
    })

    const getDeg = () => {
      var oDate = new Date()
      var h = oDate.getHours()
      var m = oDate.getMinutes()
      var s = oDate.getSeconds()
      var ms = oDate.getMilliseconds()

      rotate.h =
        'rotate(' + (h + m / 60 + s / 3600 + ms / 3600000) * 30 + 'deg)'
      rotate.m = 'rotate(' + (m + s / 60 + ms / 60000) * 6 + 'deg)'
      rotate.s = 'rotate(' + (s + ms / 1000) * 6 + 'deg)'
    }

    onBeforeMount(() => {
      getDeg()
    })

    return toRefs(rotate)
  },
})
</script>

<style lang="scss">
@import './style/style.css';
// .clock {
//   width: 300px;
//   height: 300px;
//   background: #ccc;
//   border: 1px solid #222;
//   border-radius: 50%;
//   box-shadow: 2px 2px 5px #222, inset 0 0 10px #222;
//   position: relative;
// }

// .clock div {
//   transform-origin: center bottom;
// }
// .clock .hour {
//   width: 8px;
//   height: 60px;
//   background: #222;
//   position: absolute;
//   left: 50%;
//   margin-left: -4px;
//   top: 50%;
//   margin-top: -60px;
// }
// .clock .min {
//   width: 6px;
//   height: 80px;
//   background: #222;
//   position: absolute;
//   left: 50%;
//   margin-left: -3px;
//   top: 50%;
//   margin-top: -80px;
// }
// .clock .sec {
//   width: 4px;
//   height: 100px;
//   background: #f00;
//   position: absolute;
//   left: 50%;
//   margin-left: -2px;
//   top: 50%;
//   margin-top: -100px;
// }

// .clock span {
//   transform-origin: center 150px;
// }
// .clock span.scale {
//   position: absolute;
//   left: 50%;
//   width: 2px;
//   margin-left: -1px;
//   height: 8px;
//   background: #222;
// }

// .clock span.bigScale {
//   position: absolute;
//   left: 50%;
//   width: 4px;
//   margin-left: -2px;
//   height: 12px;
//   background: #222;
// }

// .clock span em {
//   font-style: normal;
//   position: absolute;
//   width: 80px;
//   height: 30px;
//   line-height: 30px;
//   text-align: center;
//   left: 0;
//   top: 0;
//   margin-left: -40px;
//   top: 10px;
// }

// .clock .dot {
//   width: 20px;
//   height: 20px;
//   background: radial-gradient(#999, #222);
//   position: absolute;
//   left: 50%;
//   margin-left: -10px;
//   top: 50%;
//   margin-top: -10px;
//   border-radius: 50%;
// }
</style>
