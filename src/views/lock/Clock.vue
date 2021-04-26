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
 * @LastEditTime: 2021-04-26 11:43:08
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
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
      rotate.s = 'rotate(' + Math.ceil(s + ms / 1000 + 2) * 6 + 'deg)'
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
.clock-wrapper {
  transform: scale(0.7);
  margin: 0;
}
</style>
