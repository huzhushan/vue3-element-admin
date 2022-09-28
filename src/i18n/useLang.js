import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default function useLang() {
  const i18n = useI18n()
  const lang = computed(() => i18n.locale.value)
  const changeLang = value => {
    i18n.locale.value = value
    localStorage.setItem('__VEA__lang', value)
  }
  return {
    i18n,
    lang,
    changeLang,
  }
}
