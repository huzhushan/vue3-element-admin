<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 18:10:39
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <h2>该页面入口不在菜单中显示</h2>
  <div>
    如果不需要在菜单中显示：
    <br />
    需要配置路由增加属性hidden: true，注意不是在meta中增加该属性，而是跟meta同级
  </div>

  <hr />

  <div style="width: 400px">
    <el-select-tree
      placeholder="请选择角色"
      v-model="roles"
      :multiple="true"
      :data="treeData"
      :tree-props="treeProps"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      roles: ['11', '311'],
      treeData: [
        {
          id: '1',
          label: '一级 1',
          children: [
            {
              id: '11',
              label: '二级 1-1',
              children: [
                {
                  id: '111',
                  label: '三级 1-1-1',
                },
              ],
            },
          ],
        },
        {
          id: '2',
          label: '一级 2',
          children: [
            {
              id: '21',
              label: '二级 2-1',
              children: [
                {
                  id: '211',
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              id: '22',
              label: '二级 2-2',
              children: [
                {
                  id: '221',
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          id: '3',
          label: '一级 3',
          children: [
            {
              id: '31',
              label: '二级 3-1',
              children: [
                {
                  id: '311',
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              id: '32',
              label: '二级 3-2',
              children: [
                {
                  id: '321',
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      treeProps: {
        props: {
          children: 'children',
          label: 'label',
        },
      },
      handleChange(v) {
        console.log('你选择了:', v)
      },
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
