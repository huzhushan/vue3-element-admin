<template>
  <pro-table
    ref="table"
    title="列表"
    :request="getList"
    :columns="columns"
    :search="searchConfig"
    :pagination="paginationConfig"
    @selectionChange="handleSelectionChange"
  >
    <!-- 工具栏 -->
    <template #toolbar>
      <el-button type="primary" icon="el-icon-delete" @click="batchDelete">
        批量删除
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="$router.push('/test/add')"
      >
        添加一条
      </el-button>
      <el-button type="primary" icon="el-icon-refresh" @click="refresh">
        刷新
      </el-button>
    </template>
    <template #operate="scope">
      <el-button
        size="mini"
        type="primary"
        @click="$router.push(`/test/edit/${scope.row.id}`)"
      >
        编辑
      </el-button>
      <el-button size="mini" type="danger">删除</el-button>
    </template>
  </pro-table>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'testList',
  setup() {
    const state = reactive({
      // 表格列配置，大部分属性跟el-table-column配置一样
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '名称', prop: 'nickName', sortable: true, width: 180 },
        { label: '邮箱', prop: 'userEmail' },
        {
          label: '操作',
          width: 180,
          align: 'center',
          tdSlot: 'operate', // 自定义单元格内容的插槽名称
        },
      ],
      // 搜索配置
      searchConfig: {
        labelWidth: '90px', // 必须带上单位
        inputWidth: '360px', // 必须带上单位
        fields: [
          {
            type: 'text',
            label: '账户名称',
            name: 'nickName',
            defaultValue: 'abc',
          },
          {
            type: 'textarea',
            label: '描述',
            name: 'description',
          },
          {
            label: '状态',
            name: 'status',
            type: 'select',
            defaultValue: 1,
            options: [
              {
                name: '已发布',
                value: 1,
              },
              {
                name: '未发布',
                value: 0,
              },
            ],
          },
          {
            label: '性别',
            name: 'sex',
            type: 'radio',
            options: [
              {
                name: '男',
                value: 1,
              },
              {
                name: '女',
                value: 0,
              },
            ],
          },
          {
            label: '城市',
            name: 'city',
            type: 'radio-button',
            options: [
              {
                name: '北京',
                value: 'bj',
              },
              {
                name: '上海',
                value: 'sh',
              },
              {
                name: '广州',
                value: 'gz',
              },
              {
                name: '深圳',
                value: 'sz',
              },
            ],
          },
          {
            label: '爱好',
            name: 'hobby',
            type: 'checkbox',
            defaultValue: ['吃饭'],
            options: [
              {
                name: '吃饭',
                value: '吃饭',
              },
              {
                name: '睡觉',
                value: '睡觉',
              },
              {
                name: '打豆豆',
                value: '打豆豆',
              },
            ],
            // transform: (val) => val.join(","),
          },
          {
            label: '水果',
            name: 'fruit',
            type: 'checkbox-button',
            options: [
              {
                name: '苹果',
                value: '苹果',
              },
              {
                name: '香蕉',
                value: '香蕉',
              },
              {
                name: '橘子',
                value: '橘子',
              },
              {
                name: '葡萄',
                value: '葡萄',
              },
            ],
            transform: val => val.join(','),
          },
          {
            label: '日期',
            name: 'date',
            type: 'date',
          },
          {
            label: '时间',
            name: 'datetime',
            type: 'datetime',
            defaultValue: '2020-10-10 8:00:00',
          },
          {
            label: '日期范围',
            name: 'daterange',
            type: 'daterange',
            trueNames: ['startDate', 'endDate'],
          },
          {
            label: '时间范围',
            name: 'datetimerange',
            type: 'datetimerange',
            trueNames: ['startTime', 'endTime'],
            style: { width: '360px' },
            defaultValue: ['2020-10-10 9:00:00', '2020-10-11 18:30:00'],
          },
          {
            label: '数量',
            name: 'num',
            type: 'number',
            min: 0,
            max: 10,
          },
        ],
      },
      // 分页配置
      paginationConfig: {
        layout: 'total, prev, pager, next, sizes', // 分页组件显示哪些功能
        pageSize: 5, // 每页条数
        pageSizes: [5, 10, 20, 50],
        style: { textAlign: 'left' },
      },
      selectedItems: [],
      batchDelete() {
        console.log(state.selectedItems)
      },
      // 选择
      handleSelectionChange(arr) {
        state.selectedItems = arr
      },
      // 请求函数
      async getList(params) {
        console.log(params)
        // params是从组件接收的，包含分页和搜索字段。
        const { data } = await new Promise(rs => {
          setTimeout(() => {
            rs({
              code: 200,
              data: {
                list: [
                  {
                    id: 1,
                    nickName: 'zhangsan',
                    userEmail: 'zhangsan@xx.com',
                  },
                  {
                    id: 2,
                    nickName: 'lisi',
                    userEmail: 'lisi@xx.com',
                  },
                ],
                total: 100,
              },
            })
          }, 3000)
        })

        // 必须要返回一个对象，包含data数组和total总数
        return {
          data: data.list,
          total: +data.total,
        }
      },
    })
    const table = ref(null)
    const refresh = () => {
      table.value.refresh()
    }

    return { ...toRefs(state), refresh, table }
  },
})
</script>
