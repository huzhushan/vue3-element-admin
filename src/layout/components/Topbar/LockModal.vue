<!--
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *      ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                    ~-._      `''        /-~-~
 *                        `\              /  /
 *                          |         ,   | |
 *                           |  '        /  |
 *                            \/;          |
 *                             ;;          |
 *                             `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                           |)     \~-'      |
 *                            |      | \      '
 *                            |      |  \    :
 *                             \     |  |    |
 *                              |    )  (    )
 *                               \  /;  /\  |
 *                               |    |/   |
 *                               |    |   |
 *                                \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                |       |
 *                                |       |
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-23 14:15:50
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-28 09:23:23
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <el-dropdown-item @click="dialogVisible = true">锁定屏幕</el-dropdown-item>
  <el-dialog
    title="锁定屏幕"
    v-model="dialogVisible"
    width="640px"
    custom-class="lock-modal"
    append-to-body
  >
    <Avatar />
    <el-form :model="lockModel" :rules="lockRules" ref="lockForm">
      <el-form-item label="锁屏密码" prop="password">
        <el-input
          type="password"
          v-model.trim="lockModel.password"
          autocomplete="off"
          @keyup.enter="submitForm"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          class="submit-btn"
          type="primary"
          @click="submitForm"
        >
          锁定屏幕
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import Avatar from '@/components/Avatar/index.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const dialogVisible = ref(false)
    const lockForm = ref(null)
    const lockModel = reactive({
      password: '',
    })
    const lockRules = reactive({
      password: [{ required: true, message: '请输入锁屏密码' }],
    })
    const submitForm = () => {
      lockForm.value.validate(valid => {
        if (!valid) {
          return false
        }

        // 对密码加密并跟token保存在一起
        store.dispatch('app/setScreenCode', lockModel.password)

        // 跳转到锁屏页面
        router.push('/lock?redirect=' + router.currentRoute.value.fullPath)
      })
    }

    return {
      dialogVisible,
      lockForm,
      lockModel,
      lockRules,
      submitForm,
    }
  },
})
</script>

<style lang="scss">
.lock-modal[aria-modal] {
  max-width: 90%;
}
</style>
<style lang="scss" scoped>
.submit-btn {
  width: 100%;
}
</style>
