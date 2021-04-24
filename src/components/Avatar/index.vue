<template>
  <div class="userinfo">
    <template v-if="!userinfo">
      <i class="el-icon-user" />
      <h3>admin</h3>
    </template>
    <template v-else>
      <img class="avatar" :src="userinfo.avatar" />
      <h3>{{ userinfo.name }}</h3>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useUserinfo } from './hooks/useUserinfo'

export default defineComponent({
  setup() {
    const { userinfo } = useUserinfo()

    return { userinfo }
  },
})
</script>
<style lang="scss" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    font-size: 48px;
    color: $mainColor;
  }
  h3 {
    font-size: 14px;
    font-weight: normal;
    margin: 8px 0;
  }
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}
</style>
