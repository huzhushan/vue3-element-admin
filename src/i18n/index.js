import { createI18n } from 'vue-i18n'

const getMessage = modules => {
  return Object.entries(modules).reduce((module, [path, mod]) => {
    const moduleName = path.replace(/^\.\/locales\/[\w-]+\/(.*)\.\w+$/, '$1')
    module[moduleName] = mod.default
    return module
  }, {})
}

export default createI18n({
  locale: localStorage.getItem('__VEA__lang') || 'zh-cn',
  messages: {
    'zh-cn': getMessage(import.meta.glob('./locales/zh-cn/**/*.js', { eager: true })),
    en: getMessage(import.meta.glob('./locales/en/**/*.js', { eager: true })),
  },
  legacy: false,
  globalInjection: true,
})
