<template>
  <el-dropdown trigger="hover">
    <div class="change-lang">
      <svg-icon name="language" class="icon"></svg-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          @click="changeLang(item.value)"
          v-for="item in langlist"
          :key="item.value"
        >
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import useLang from '@/i18n/useLang'
const langlist = [
  {
    name: '简体中文',
    value: 'zh-cn',
  },
  {
    name: 'English',
    value: 'en',
  },
]
const { changeLang } = useLang()
</script>

<style lang="scss" scoped>
.change-lang {
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  .icon {
    font-size: 18px;
  }
}
</style>
