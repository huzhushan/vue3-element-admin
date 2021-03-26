import router from '@/router'
import store from '@/store'
import { TOKEN } from '@/store/modules/app' // TOKEN变量名
// 白名单，里面是路由对象的name
const WhiteList = ['login']

// vue-router4的路由守卫不再是通过next放行，而是通过return返回false或者一个路由地址
router.beforeEach(async (to) => {
  if (!window.localStorage[TOKEN]) {
    if (!WhiteList.includes(to.name)) {
      return {
        name: 'login',
        query: {
          redirect: to.path // redirect是指登录之后可以跳回到redirect指定的页面
        },
        replace: true
      }
    }
  } else {
    if (!store.state.login.userinfo) {
      // 获取用户信息，根据用户角色生成菜单和动态路由
      const userinfo = await store.dispatch("login/getUserinfo");
      const routes = await store.dispatch("menu/generateMenus", userinfo && userinfo.role)
      routes.forEach((item) => {
        router.addRoute(item);
      });
      return to.fullPath
    }


  }
})