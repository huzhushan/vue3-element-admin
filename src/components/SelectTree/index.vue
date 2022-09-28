<!--
 *  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 *  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 *  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 *  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 *  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 *  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 *  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 *  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 *  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 *  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 *  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 *  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 *  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 *  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-18 17:17:46
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 17:17:59
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <el-popover
    ref="popover"
    placement="bottom-start"
    trigger="click"
    :popper-options="{ boundariesElement: 'viewport' }"
    v-model:visible="visible"
    :disabled="disabled"
  >
    <tree
      ref="tree"
      :value="is_multiple ? modelValue : modelValue ? [modelValue] : []"
      :data="data || treeProps.data"
      :multiple="is_multiple"
      :tree-props="treeProps"
      @tree-change="handleTreeChange"
      @close="visible = false"
    />

    <template #reference>
      <custom-select
        ref="select"
        :value="modelValue"
        :data="data || treeProps.data"
        :multiple="is_multiple"
        :tree-props="{ children, label, nodeKey }"
        @select-change="handleSelectChange"
      />
    </template>
  </el-popover>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, onMounted, provide } from 'vue'

import Tree from './Tree.vue'
import CustomSelect from './Select.vue'

export default defineComponent({
  name: 'el-select-tree',
  components: {
    Tree,
    CustomSelect,
  },
  props: {
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
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
    provide('placeholder', props.placeholder)
    const { treeProps, multiple } = props
    const state = reactive({
      popover: ref(null),
      visible: false,
      select: ref(null),
      tree: ref(null),
      is_multiple: multiple || treeProps['show-checkbox'],
      label:
        treeProps.props && treeProps.props.label
          ? treeProps.props.label
          : 'label',
      children:
        treeProps.props && treeProps.props.children
          ? treeProps.props.children
          : 'children',
      nodeKey: treeProps['node-key'] || 'id',
      handleTreeChange(value) {
        emit('update:modelValue', value)
        emit('change', value)
      },
      handleSelectChange(value) {
        // state.tree.updateValue(value)
        emit('update:modelValue', value)
        emit('change', value)
      },
      initPopoverStyle(width) {
        state.popover.popperRef.style.minWidth = width
        state.popover.popperRef.style.boxSizing = 'border-box'
        state.popover.popperRef.style.maxHeight = '400px'
        state.popover.popperRef.style.overflow = 'auto'
      },
    })

    onMounted(() => {
      state.initPopoverStyle(
        state.select.select.selectWrapper.offsetWidth + 'px'
      )
    })

    return toRefs(state)
  },
})
</script>
