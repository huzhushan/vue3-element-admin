<template>
  <el-config-provider :locale="locales[lang]">
    <router-view />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import useLang from '@/i18n/useLang'

export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const { lang } = useLang()
    return {
      lang,
      locales: {
        'zh-cn': localeZH,
        en: localeEN,
      },
    }
  },
})
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  * {
    outline: none;
  }
}
</style>
