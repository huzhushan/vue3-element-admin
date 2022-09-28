import { createI18n } from 'vue-i18n'

const ZhLocales = import.meta.globEager('./locales/zh/**/*.js')
const EnLocales = import.meta.globEager('./locales/en/**/*.js')
const getMessage = modules => {
  return Object.entries(modules).reduce((module, [path, mod]) => {
    const moduleName = path.replace(/^\.\/locales\/\w+\/(.*)\.\w+$/, '$1')
    module[moduleName] = mod.default
    return module
  }, {})
}

export default createI18n({
  locale: localStorage.getItem('__VEA__lang') || 'zh-cn',
  messages: {
    'zh-cn': getMessage(ZhLocales),
    'en-us': getMessage(EnLocales),
  },
  legacy: false,
  globalInjection: true,
})
