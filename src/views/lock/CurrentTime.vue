<!--
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-23 16:21:00
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-23 16:50:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="current-time" v-html="currentTime"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { parseTime } from '@/utils'

export default defineComponent({
  setup() {
    const currentTime = ref(null)
    const getTime = () => {
      currentTime.value = parseTime(
        new Date(),
        '<div class="time">{h}:{i}:{s}</div><div class="date">{y}-{m}-{d} 周{a}</div>'
      )
      requestAnimationFrame(getTime)
    }

    onMounted(() => {
      requestAnimationFrame(getTime)
    })

    return {
      currentTime,
    }
  },
})
</script>
<style lang="scss" scoped>
.current-time {
  color: #fff;
  text-align: center;
  ::v-deep {
    .time {
      font-family: Arial;
      font-size: 48px;
      font-weight: 700;
    }
    .date {
      font-size: 20px;
      margin-top: 16px;
    }
  }
}
</style>
