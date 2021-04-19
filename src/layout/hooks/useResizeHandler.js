import { onBeforeMount, onBeforeUnmount /*watch*/ } from 'vue'
// import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const WIDTH = 768
export const useResizeHandler = () => {
  const store = useStore()
  // const router = useRouter();
  // const route = router.currentRoute;

  const isMobile = () => {
    return window.innerWidth < WIDTH
  }

  const resizeHandler = () => {
    if (isMobile()) {
      store.commit('app/setDevice', 'mobile')
      store.commit('app/setCollapse', 1)
    } else {
      store.commit('app/setDevice', 'desktop')
      store.commit('app/setCollapse', 0)
    }
  }

  onBeforeMount(() => {
    if (isMobile()) {
      store.commit('app/setDevice', 'mobile')
      store.commit('app/setCollapse', 1)
    }
    window.addEventListener('resize', resizeHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  // // 监听路由的时候不能使用useRoute获取路由，否则会有警告
  // watch(route, () => {
  //   if (store.state.app.device === 'mobile' && !store.state.app.sidebar.collapse) {
  //     store.commit('app/setCollapse', 1)
  //   }
  // })
}
