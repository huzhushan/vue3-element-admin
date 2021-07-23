<!--
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-07-23 15:04:58
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-07-23 16:54:26
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->
<template>
  <el-button
    class="btn-switch"
    type="primary"
    icon="el-icon-setting"
    @click="drawer = true"
  ></el-button>
  <el-drawer title="布局设置" :size="320" v-model="drawer" destroy-on-close>
    <div class="box">
      <div class="list">
        <div class="item">
          <div>内容宽度</div>
          <el-select class="select" size="mini" v-model="layout.isFluid">
            <el-option :value="true" label="流式布局" />
            <el-option :value="false" label="固定宽度" />
          </el-select>
        </div>
        <div class="item">
          <div>菜单栏排列方式</div>
          <el-select class="select" size="mini" v-model="menus.mode">
            <el-option value="horizontal" label="水平排列" />
            <el-option value="vertical" label="垂直排列" />
          </el-select>
        </div>
        <el-divider />
        <div class="item">
          <div>显示标签栏</div>
          <el-switch v-model="tagsbar.isShow" />
        </div>
        <div class="item">
          <div>显示面包屑导航</div>
          <el-switch v-model="breadcrumbs.isShow" />
        </div>
        <el-divider />
        <div class="item">
          <div>固定头部</div>
          <el-switch v-model="topbar.isFixed" />
        </div>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import { defineComponent, reactive, ref, toRaw, toRefs, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const drawer = ref(false)
    const settings = reactive({
      ...store.state.layoutSettings,
    })
    watch(settings, value => {
      store.commit('layoutSettings/SAVE_SETTINGS', toRaw(value))
    })
    return {
      drawer,
      ...toRefs(settings),
    }
  },
})
</script>

<style lang="scss" scoped>
.btn-switch {
  position: fixed;
  top: 100px;
  right: -6px;
  font-size: 20px;
}
.box {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .list {
    flex: 1;
    padding: 0 16px;
    .item {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .select {
      width: 100px;
    }
  }
}
</style>
