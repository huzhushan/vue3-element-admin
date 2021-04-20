//index.js
import { createStore } from 'vuex'

const modulesFiles = import.meta.globEager('./modules/*.js')
const modules = Object.entries(modulesFiles).reduce((modules, [path, mod]) => {
  const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  modules[moduleName] = mod.default
  return modules
}, {})

export default createStore({
  modules,
})
