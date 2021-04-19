<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheList">
      <component :is="Component" :key="key" />
    </keep-alive>
  </router-view>
</template>
<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const route = useRoute()
    const cacheList = computed(() => store.state.tags.cacheList)
    const key = computed(() => route.fullPath)

    return {
      cacheList,
      key,
    }
  },
})
</script>
