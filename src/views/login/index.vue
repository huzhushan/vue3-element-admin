<template>
  <div class="login">
    <el-form
      class="form"
      :model="model"
      :rules="rules"
      ref="loginForm"
    >
      <h1 class="title">欢迎登录ERP系统</h1>
      <el-form-item prop="userName">
        <el-input
          class="text"
          v-model="model.userName"
          prefix-icon="el-icon-user-solid"
          clearable
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="text"
          v-model="model.password"
          prefix-icon="el-icon-lock"
          show-password
          clearable
          @input.enter="submit"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="btn"
          @click="submit"
        >{{btnText}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  ref,
  computed,
} from "vue";
import { Login } from "@/api/login";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "login",
  setup() {
    const { ctx } = getCurrentInstance(); // 可以把ctx当成vue2中的this
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      model: {
        userName: "admin",
        password: "123456",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
      loading: false,
      btnText: computed(() => (state.loading ? "登录中..." : "登录")),
      loginForm: ref(null),
      submit: () => {
        if (state.loading) {
          return;
        }
        state.loginForm.validate(async (valid) => {
          if (valid) {
            state.loading = true;
            const { code, data, message } = await Login(state.model);
            state.loading = false;
            if (+code === 200) {
              ctx.$message.success({
                message: "登录成功",
                duration: 500,
                onClose: () => {
                  const targetPath = route.query.redirect;
                  router.push(!!targetPath ? targetPath : "/");
                },
              });
              store.commit("app/setToken", data);
            } else {
              ctx.$message.error(message);
            }
          }
        });
      },
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  transition: transform 1s;
  transform: scale(1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #2d3a4b;
  .form {
    width: 520px;
    max-width: 100%;
    margin: 160px auto 0;
    .title {
      color: #fff;
      text-align: center;
      font-size: 24px;
      margin: 0 0 24px;
    }
    .text {
      font-size: 16px;
      :deep(.el-input__inner) {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        color: #fff;
        height: 48px;
        line-height: 48px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>