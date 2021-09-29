<!--
 * ......................................&&.........................
 * ....................................&&&..........................
 * .................................&&&&............................
 * ...............................&&&&..............................
 * .............................&&&&&&..............................
 * ...........................&&&&&&....&&&..&&&&&&&&&&&&&&&........
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............
 * ................&...&&&&&&&&&&&&&&&&&&&&&&&&&&&&.................
 * .......................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ...................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...............
 * ..................&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ...............&&&&&@  &&&&&&&&&&..&&&&&&&&&&&&&&&&&&&...........
 * ..............&&&&&&&&&&&&&&&.&&....&&&&&&&&&&&&&..&&&&&.........
 * ..........&&&&&&&&&&&&&&&&&&...&.....&&&&&&&&&&&&&...&&&&........
 * ........&&&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&....&&&.......
 * .......&&&&&&&&.....................&&&&&&&&&&&&&&&&.....&&......
 * ........&&&&&.....................&&&&&&&&&&&&&&&&&&.............
 * ..........&...................&&&&&&&&&&&&&&&&&&&&&&&............
 * ................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&&&............
 * ..............&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&....&&&&&............
 * ...........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&......&&&&............
 * .........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........&&&&............
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&............
 * ......&&&&&&&&&&&&&&&&&&&...&&&&&&...............&&&.............
 * .....&&&&&&&&&&&&&&&&............................&&..............
 * ....&&&&&&&&&&&&&&&.................&&...........................
 * ...&&&&&&&&&&&&&&&.....................&&&&......................
 * ...&&&&&&&&&&.&&&........................&&&&&...................
 * ..&&&&&&&&&&&..&&..........................&&&&&&&...............
 * ..&&&&&&&&&&&&...&............&&&.....&&&&...&&&&&&&.............
 * ..&&&&&&&&&&&&&.................&&&.....&&&&&&&&&&&&&&...........
 * ..&&&&&&&&&&&&&&&&..............&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ..&&.&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&&&&&&&&&&&&.......
 * ...&&..&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&...&&&&&&&&&&&&......
 * ....&..&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&.....
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............&&&&&&&....
 * .......&&&&&.&&&&&&&&&&&&&&&&&&..&&&&&&&&...&..........&&&&&&....
 * ........&&&.....&&&&&&&&&&&&&.....&&&&&&&&&&...........&..&&&&...
 * .......&&&........&&&.&&&&&&&&&.....&&&&&.................&&&&...
 * .......&&&...............&&&&&&&.......&&&&&&&&............&&&...
 * ........&&...................&&&&&&.........................&&&..
 * .........&.....................&&&&........................&&....
 * ...............................&&&.......................&&......
 * ................................&&......................&&.......
 * .................................&&..............................
 * ..................................&..............................
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-08-30 14:19:46
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 18:18:35
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->
<template>
  <el-select
    ref="select"
    class="select"
    style="width:100%"
    clearable
    :multiple="multiple"
    v-model="selectValue"
    :value-key="treeProps.label"
    @remove-tag="handleRemove"
    @clear="handleClear"
    popper-class="select-popover"
    :popper-append-to-body="false"
    collapse-tags
    :placeholder="placeholder"
  >
    <el-option
      v-for="(item, index) in selectOptions"
      :key="index"
      :label="item[treeProps.label]"
      :value="item"
    />
  </el-select>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  reactive,
  ref,
  watch,
  toRefs,
  inject,
} from 'vue'

export default defineComponent({
  props: {
    value: {},
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
    const {
      multiple,
      treeProps: { label, children, nodeKey },
    } = props
    const state = reactive({
      select: ref(null),
      newValue: null,
      selectValue: '',
      selectOptions: [],
      placeholder: inject('placeholder'),
      updateSelectValue(values) {
        if (!values || state.selectOptions.length <= 0) {
          return
        }
        state.selectValue = multiple
          ? state.selectOptions.filter(item => values.includes(item[nodeKey]))
          : state.selectOptions.find(item => values === item[nodeKey]) || {}
      },
      updateSelectOptions(data) {
        state.selectOptions = state.flatTree(data)
      },
      flatTree(tree) {
        const res = []
        tree.forEach(item => {
          res.push({
            [nodeKey]: item[nodeKey],
            [label]: item[label],
          })
          if (item[children] && item[children].length > 0) {
            res.push(...state.flatTree(item[children]))
          }
        })
        return res
      },
      handleRemove() {
        emit(
          'select-change',
          multiple
            ? state.selectValue.map(item => item[nodeKey])
            : state.selectValue[nodeKey]
        )
      },
      handleClear() {
        emit('select-change', multiple ? [] : '')
      },
    })

    watch(
      () => props.data,
      v => {
        state.updateSelectOptions(v)
        state.updateSelectValue(state.newValue)
      },
      {
        immediate: true,
      }
    )

    watch(
      () => props.value,
      v => {
        state.newValue = v
        state.updateSelectValue(state.newValue)
      },
      {
        immediate: true,
      }
    )

    onBeforeMount(() => {
      state.updateSelectOptions(props.data)
    })

    return toRefs(state)
  },
})
</script>

<style lang="scss" scoped>
.select {
  :deep(.select-popover) {
    display: none;
  }
}
</style>
