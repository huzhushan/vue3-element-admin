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
 * @LastEditTime: 2022-09-27 18:36:16
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="header" :class="{ 'no-border': isHorizontalMenu }">
    <div class="navigation">
      <logo
        v-if="isShowLogo"
        class="mobile"
        :class="{ 'show-title': isHorizontalMenu }"
      />
      <hamburger v-if="isShowHamburger" />
      <breadcrumbs v-if="isShowBreadcrumbs" />
    </div>
    <div class="action">
      <error-log />
      <userinfo />
      <change-lang />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Logo from '@/layout/components/Sidebar/Logo.vue'
import Hamburger from './Hamburger.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Userinfo from './Userinfo.vue'
import ChangeLang from './ChangeLang.vue'
import ErrorLog from '@/components/ErrorLog/index.vue'
import { useLayoutsettings } from '@/pinia/modules/layoutSettings'
import { storeToRefs } from 'pinia'
import { useApp } from '@/pinia/modules/app'

export default defineComponent({
  components: {
    Logo,
    Hamburger,
    Breadcrumbs,
    Userinfo,
    ChangeLang,
    ErrorLog,
  },
  setup() {
    const defaultSettings = useLayoutsettings()

    const { device } = storeToRefs(useApp())

    const isHorizontalMenu = computed(
      () => defaultSettings.menus.mode === 'horizontal'
    )

    const isShowLogo = computed(
      () => isHorizontalMenu.value || device.value === 'mobile'
    )

    const isShowHamburger = computed(() => !isHorizontalMenu.value)

    const isShowBreadcrumbs = computed(
      () => defaultSettings.breadcrumbs.isShow && !isHorizontalMenu.value
    )

    return {
      device,
      isHorizontalMenu,
      isShowLogo,
      isShowHamburger,
      isShowBreadcrumbs,
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  height: 48px;
  border-bottom: 1px solid #e0e4ef;
  display: flex;
  justify-content: space-between;
  &.no-border {
    border: none;
  }
  .navigation {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .action {
    display: flex;
    align-items: center;
  }
}
.mobile {
  padding-right: 0;
  ::v-deep(.logo) {
    max-width: 24px;
    max-height: 24px;
  }
  ::v-deep(.title) {
    display: none;
  }
}
.show-title {
  ::v-deep(.title) {
    display: block;
    color: #333;
  }
}
</style>
