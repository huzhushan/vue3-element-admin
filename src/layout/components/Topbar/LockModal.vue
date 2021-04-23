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
 * @LastEditTime: 2021-04-23 15:24:54
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
    <el-form :model="lockModel" :rules="lockRules" ref="lockForm">
      <el-form-item label="锁屏密码" prop="password">
        <el-input
          type="password"
          v-model.trim="lockModel.password"
          autocomplete="off"
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
import { useUserinfo } from './hooks/useUserinfo'
import { setItem } from '@/utils/storage'
import { AesEncryption } from '@/utils/encrypt'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const dialogVisible = ref(false)
    const { userinfo } = useUserinfo()
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

        // 对密码加密
        const encryption = new AesEncryption()
        const pwd = encryption.encryptByAES(lockModel.password)
        // 存储到localStorage
        setItem('__VEA_SCREEN_LOCKED__', pwd)
        // 跳转到锁屏页面
        router.push('/lock')
      })
    }

    return {
      dialogVisible,
      userinfo,
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
.submit-btn {
  width: 100%;
}
</style>
