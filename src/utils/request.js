/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 18:17:20
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useApp } from '@/pinia/modules/app'

const service = axios.create({
  baseURL: '/',
  timeout: 10000,
  withCredentials: true,
})

// 拦截请求
service.interceptors.request.use(
  config => {
    const { authorization } = useApp()
    if (authorization) {
      config.headers.Authorization = `Bearer ${authorization.token}`
    }
    return config
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use(
  // 响应成功进入第1个函数，该函数的参数是响应对象
  response => {
    return response.data
  },
  // 响应失败进入第2个函数，该函数的参数是错误对象
  async error => {
    // 如果响应码是 401 ，则请求获取新的 token
    // 响应拦截器中的 error 就是那个响应的错误对象
    if (error.response && error.response.status === 401) {
      // 校验是否有 refresh_token
      const { authorization, clearToken, setToken } = useApp()
      if (!authorization || !authorization.refresh_token) {
        if (router.currentRoute.value.name === 'login') {
          return Promise.reject(error)
        }
        const redirect = encodeURIComponent(window.location.href)
        router.push(`/login?redirect=${redirect}`)
        // 清除token
        clearToken()
        setTimeout(() => {
          ElMessage.closeAll()
          try {
            ElMessage.error(error.response.data.msg)
          } catch (err) {
            ElMessage.error(error.message)
          }
        })
        // 代码不要往后执行了
        return Promise.reject(error)
      }
      // 如果有refresh_token，则请求获取新的 token
      try {
        const res = await axios({
          method: 'PUT',
          url: '/api/authorizations',
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${authorization.refresh_token}`,
          },
        })
        // 如果获取成功，则把新的 token 更新到容器中
        // console.log('刷新 token  成功', res)
        setToken({
          token: res.data.data.token, // 最新获取的可用 token
          refresh_token: authorization.refresh_token, // 还是原来的 refresh_token
        })
        // 把之前失败的用户请求继续发出去
        // config 是一个对象，其中包含本次失败请求相关的那些配置信息，例如 url、method 都有
        // return 把 request 的请求结果继续返回给发请求的具体位置
        return service(error.config)
      } catch (err) {
        // 如果获取失败，直接跳转 登录页
        // console.log('请求刷新 token 失败', err)
        const redirect = encodeURIComponent(window.location.href)
        router.push(`/login?redirect=${redirect}`)
        // 清除token
        clearToken()
        return Promise.reject(error)
      }
    }

    // console.dir(error) // 可在此进行错误上报
    ElMessage.closeAll()
    try {
      ElMessage.error(error.response.data.msg)
    } catch (err) {
      ElMessage.error(error.message)
    }

    return Promise.reject(error)
  }
)

export default service
