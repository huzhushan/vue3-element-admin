<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 17:50:59
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div v-if="errorLogs.length > 0" class="errLog-container">
    <el-badge :is-dot="true" @click="dialogTableVisible = true">
      <el-button style="padding: 8px 10px;" size="small" type="danger">
        <svg-icon name="bug" />
      </el-button>
    </el-badge>

    <el-dialog v-model="dialogTableVisible" width="80%" append-to-body>
      <template #title>
        <span style="padding-right: 10px;">错误日志</span>
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-delete"
          @click="clearAll"
        >
          Clear All
        </el-button>
      </template>
      <el-table :data="errorLogs" border>
        <el-table-column label="Message">
          <template #default="{ row }">
            <div style="margin-bottom:10px">
              <span class="message-title" style="padding-right: 16px;">
                页面:
              </span>
              <el-tag type="success">
                {{ row.url }}
              </el-tag>
            </div>

            <div style="margin-bottom:10px">
              <span class="message-title">事件源:</span>
              <el-tag type="primary">
                {{ row.info && row.info }}
              </el-tag>
            </div>

            <div style="margin-bottom:10px">
              <span class="message-title">错误提示:</span>
              <el-tag type="danger">
                {{ row.err && row.err.message }}
              </el-tag>
            </div>

            <div v-if="row.err && row.err.config">
              <span class="message-title" style="padding-right: 16px;">
                接口地址:
              </span>
              <el-tag type="info">
                {{ row.err && row.err.config && row.err.config.url }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template #default="{ row }">
            {{ row.err && row.err.stack }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useErrorlog } from '@/pinia/modules/errorLog'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'ErrorLog',
  setup() {
    const dialogTableVisible = ref(false)
    const errorStore = useErrorlog()
    const { logs: errorLogs } = storeToRefs(errorStore)
    const { clearErrorLog } = errorStore
    const clearAll = () => {
      dialogTableVisible.value = false
      clearErrorLog()
    }

    return {
      dialogTableVisible,
      errorLogs,
      clearAll,
    }
  },
})
</script>

<style scoped>
.errLog-container {
  margin-right: 10px;
}
.message-title {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-right: 8px;
}
</style>
