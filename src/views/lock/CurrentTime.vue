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
 * @LastEditTime: 2022-09-25 11:10:49
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="current-time">
    <div class="time">{{ currentTime }}</div>
    <div class="date">
      {{ currentDate }}
      <span style="margin-left: 16px">{{ $t(week) }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { parseTime } from '@/utils'

export default defineComponent({
  setup() {
    const currentTime = ref(null)
    const getTime = () => {
      currentTime.value = parseTime(new Date(), '{h}:{i}:{s}')
      requestAnimationFrame(getTime)
    }

    onMounted(() => {
      requestAnimationFrame(getTime)
    })

    return {
      currentTime,
      currentDate: parseTime(new Date(), '{y}-{m}-{d}'),
      week: `topbar.lock-week${new Date().getDay()}`,
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
