<template>
    <div class="search-div">

        <!-- 搜索表单 -->
        <el-form label-width="70px" size="small">
            <el-form-item label="角色名称">
                <el-input v-model="queryDto.roleName" 
                          style="width: 100%" 
                          placeholder="角色名称"></el-input>
            </el-form-item>
            <el-row style="display:flex">
                <el-button type="primary" size="small" @click="searchSysRole">
                    搜索
                </el-button>
                <el-button size="small" @click="resetData">重置</el-button>
            </el-row>
        </el-form>

        <!-- 添加按钮 -->
        <div class="tools-div">
            <el-button type="success" size="small" @click="addShow">添 加</el-button>
        </div>


        <!-- 添加角色表单对话框 -->
        <el-dialog v-model="dialogVisible" title="添加或修改角色" width="30%">
            <el-form label-width="120px">
                <el-form-item label="角色名称">
                    <el-input v-model="sysRole.roleName"/>
                </el-form-item>
                <el-form-item label="角色代码">
                    <el-input  v-model="sysRole.roleCode"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!--- 角色表格数据 -->
        <el-table :data="list" style="width: 100%">
            <el-table-column prop="roleName" label="角色名称" width="180" />
            <el-table-column prop="roleCode" label="角色代码" width="180" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column label="操作" :align="'center'" width="280" #default="scope">
                <el-button type="primary" size="small" @click="editShow(scope.row)">
                    修改
                </el-button>
                <el-button type="danger" size="small" @click="deleteById(scope.row)">
                    删除
                </el-button>
            </el-table-column>
        </el-table>

        <!--分页条-->
        <el-pagination v-model:current-page="pageParams.page" v-model:page-size="pageParams.limit"
            :page-sizes="[10, 20, 50, 100]" @size-change="fetchData" @current-change="fetchData"
            layout="total, sizes, prev, pager, next" :total="total" />
    </div>
</template>


<script setup>
import { ElMessage,ElMessageBox} from 'element-plus'
import { ref,onMounted } from 'vue';
import { GetSysRoleListByPage ,SaveSysRole, UpdateSysRole, DeleteSysRoleById} from '@/api/sysRole';

// 分页条总记录数
let total = ref(0)

// 定义表格数据模型
let list = ref([])

//分页数据
const pageParamsForm = {
    page: 1, // 页码
    limit: 10, // 每页记录数
}

// 将pageParamsForm包装成支持响应式的对象
const pageParams = ref(pageParamsForm)
 
// 搜索表单数据
const queryDto = ref({ "roleName": "" })

// 控制对话是否展示的变量
const dialogVisible = ref(false)

//进入添加
const addShow = () => {
  	dialogVisible.value = true
}

// 页面加载完毕以后请求后端接口获取数据
onMounted(() => {
    fetchData();
})

// 搜索按钮点击事件处理函数
const searchSysRole = () => {
    //queryDto.value.roleName = ""
    fetchData();
}

// 远程调用后端分页查询接口
const fetchData = async () => {
    const { data, code, message } = await GetSysRoleListByPage(pageParams.value.page, pageParams.value.limit, queryDto.value);
    list.value = data.list;
    total.value = data.total
}




//表单数据模型
const defaultForm = {
    id: "",
    roleCode: "",
    roleName: ""
}
const sysRole = ref(defaultForm)   // 使用ref包裹该对象，使用reactive不方便进行重置
 
// 添加角色
const submit = async () => {
    if(!sysRole.value.id) {
        const { code } = await SaveSysRole(sysRole.value) ;
        if(code === 200) {
            dialogVisible.value = false
            ElMessage.success('操作成功')
            fetchData()
        }
    }else {
        const { code } = await UpdateSysRole(sysRole.value) ;
        if(code === 200) {
            dialogVisible.value = false
            ElMessage.success('操作成功')
            fetchData()
        }
    }
}


// 修改按钮点击事件处理函数
const editShow = (row) => {
    dialogVisible.value = true
    sysRole.value = row
}

//删除数据
const deleteById = (row) => {
    ElMessageBox.confirm('此操作将永久删除记录，是否继续？','Warning',{
        confirmButtonText: "确认",
        cancelButtonText:"取消",
        type: "warning"
    }).then(async() =>{
        const {code} = await DeleteSysRoleById(row.id)
        if(code === 200) {
            ElMessage.success('删除成功')
            pageParams.value.page = 1
            fetchData()
        }
    })
}



</script>

<style scoped>
.search-div {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ebeef5;
    border-radius: 3px;
    background-color: #fff;
}

.tools-div {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ebeef5;
    border-radius: 3px;
    background-color: #fff;
}
</style>