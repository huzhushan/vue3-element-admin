<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    class="scroll-container"
  >
    <slot />
  </el-scrollbar>
</template>


<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;

  ::v-deep(.el-scrollbar__bar) {
    bottom: 0px;
  }
  ::v-deep(.el-scrollbar__wrap) {
    height: 49px;
  }
}
</style>
