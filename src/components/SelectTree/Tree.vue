<!--
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-18 17:17:46
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 18:20:15
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div v-if="data.length <= 0" style="text-align:center;padding: 16px">
    暂无数据
  </div>
  <el-tree
    v-else
    class="common-tree"
    ref="tree"
    :data="data"
    :node-key="nodeKey"
    :show-checkbox="multiple"
    :check-strictly="treeProps['check-strictly'] || true"
    :expand-on-click-node="false"
    :check-on-click-node="true"
    :default-expanded-keys="treeProps['default-expanded-keys'] || value"
    :default-checked-keys="value"
    @node-click="handleNodeClick"
    @check-change="handleCheckChange"
    v-bind="treeProps"
  ></el-tree>
</template>
<script>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
    multiple: {
      type: Boolean,
      default() {
        return false
      },
    },
    treeProps: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props, { emit }) {
    const { multiple, treeProps } = props
    const state = reactive({
      nodeKey: treeProps['node-key'] || 'id',
      tree: ref(null),
      handleNodeClick(node) {
        if (!multiple) {
          state.tree.setCheckedKeys([node[state.nodeKey]])
          state.hanelEmit()
          emit('close')
        }
      },
      handleCheckChange() {
        if (!multiple) {
          return
        }
        state.hanelEmit()
      },
      hanelEmit() {
        const res = state.tree.getCheckedKeys()
        emit('tree-change', multiple ? res : res[0] || '')
      },
      updateValue(value) {
        if (state.tree) {
          state.tree.setCheckedKeys(value)
          // state.hanelEmit()
        }
      },
    })

    watch(
      () => props.value,
      v => {
        state.updateValue(v)
      },
      {
        immediate: true,
      }
    )

    return toRefs(state)
  },
})
</script>
<style lang="scss" scoped>
.common-tree {
  overflow: auto;
  :deep {
    .el-tree-node {
      &.is-checked {
        > .el-tree-node__content {
          color: $mainColor;
        }
      }
    }
  }
}
</style>
