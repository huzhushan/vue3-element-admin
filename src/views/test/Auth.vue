<template>
  <h2>
    当前用户角色:{{
      $store.state.account.userinfo && $store.state.account.userinfo.role
    }}
  </h2>
  <h4><mark>刷新页面可切换随机角色</mark></h4>
  <router-link to="/test/noauth">点击进入只有admin才能访问的页面</router-link>
</template>
