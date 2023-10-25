<template>
    <!---搜索表单-->
    <div class="search-div">
        <el-form label-width="70px" size="small">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="关键字">
                        <el-input v-model="queryDto.keyword"
                                style="width: 100%"
                                placeholder="用户名、姓名、手机号码"
                                ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="创建时间">
                        <el-date-picker v-model="createTimes"
                                        type="daterange"
                                        range-separator="To"
                                        start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        format="YYYY-MM-DD"
                                        value-format="YYYY-MM-DD"
                                        />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row style="display:flex">
                <el-button type="primary" size="small" @click="searchSysUser">
                    搜索
                </el-button>
                <el-button size="small" @click="resetData">重置</el-button>
            </el-row>
        </el-form>
    </div>  

    <!--添加按钮-->
    <div class="tools-div">
        <el-button type="success" size="small" @click="addShow">添 加</el-button>
    </div>

    <el-dialog v-model="dialogVisible" title="添加或修改" width="40%">
        <el-form label-width="120px">
            <el-form-item label="用户名">
                <el-input v-model="sysUser.userName"/>
            </el-form-item>
            <el-form-item v-if="sysUser.id == null" label="密码">
                <el-input type="password" show-password v-model="sysUser.password"/>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="sysUser.name"/>
            </el-form-item>
            <el-form-item label="手机">
                <el-input v-model="sysUser.phone"/>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                        class="avatar-uploader"
                        action="http://localhost:8501/admin/system/fileUpload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :headers="headers"
                        >
                    <img v-if="sysUser.avatar" :src="sysUser.avatar" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="描述">
                <el-input  v-model="sysUser.description"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog> 

    <!---数据表格-->
    <el-table :data="list" style="width: 100%">
        <el-table-column prop="userName" label="用户名" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="手机" />
        <el-table-column prop="avatar" label="头像" #default="scope">
            <img :src="scope.row.avatar" width="50" />
        </el-table-column>
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="status" label="状态" #default="scope">
            {{ scope.row.status == 1 ? '正常' : '停用' }}
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作" :align="center" width="280" #default="scope">
            <el-button type="primary" size="small" @click="editSysUser(scope.row)">
                修改
            </el-button>
            <el-button type="danger" size="small" @click="deleteById(scope.row)">
                删除
            </el-button>
            <el-button type="warning" size="small" @click="showAssignRole(scope.row)">
                分配角色
            </el-button>
        </el-table-column>
    </el-table>


    <el-dialog v-model="dialogRoleVisible" title="分配角色" width="40%">
        <el-form label-width="80px">
            <el-form-item label="用户名">
                <el-input disabled :value="sysUser.userName"></el-input>
            </el-form-item>

            <el-form-item label="角色列表">
                <el-checkbox-group v-model="userRoleIds">
                    <el-checkbox v-for="role in allRoles" :key="role.id" :label="role.id">
                        {{ role.roleName }}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="doAssign">提交</el-button>
                <el-button @click="dialogRoleVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <el-pagination
                v-model:current-page="pageParams.page"
                v-model:page-size="pageParams.limit"
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next"
                :total="total"
                />
    


</template>

<script setup>
import { useApp } from '@/pinia/modules/app'
import { ref , onMounted } from 'vue'; 
import { GetSysUserListByPage , SaveSysUser , UpdateSysUser, DeleteSysUserById, DoAssignRoleToUser} from '@/api/sysUser';
import { GetAllRoleList } from '@/api/sysRole'; 
import { ElMessage, ElMessageBox } from 'element-plus'

// 表格数据模型
const list = ref([
    {"id":1 , "username":"admin" , "name": "admin" , "phone":"13121034567" , "status":1 , "createTime": "2023-05-11"} ,
    {"id":2 , "username":"admin" , "name": "admin" , "phone":"13121034567" , "status":1 , "createTime": "2023-05-11"} 
]);

// 分页条数据模型
const total = ref(0)

// 定义搜索表单数据模型
const queryDto = ref({
    keyword: "" ,
    createTimeBegin: "",
    createTimeEnd: ""
})
const createTimes = ref([])

//分页数据
const pageParamsForm = {
  page: 1, // 页码
  limit: 10, // 每页记录数
}
const pageParams = ref(pageParamsForm)

// onMounted钩子函数
onMounted(() => {
    fetchData() ;
})

// 搜素按钮点击事件处理函数
const searchSysUser = () => {
    fetchData()
}

// 重置按钮点击事件处理函数
const resetData = () => {
    queryDto.value = {}
    createTimes.value = []
}

// 定义分页查询方法
const fetchData = async () => {
    if (createTimes.value.length == 2) {
        queryDto.value.createTimeBegin = createTimes.value[0]
        queryDto.value.createTimeEnd = createTimes.value[1]
    }
    // 请求后端接口进行分页查询
    const { code , message , data } = await GetSysUserListByPage(pageParams.value.page , pageParams.value.limit , queryDto.value)
    list.value = data.list
    total.value = data.total
}


// 添加表单对话框显示隐藏控制变量
const dialogVisible = ref(false)
const addShow = () => {
    sysUser.value = {}
    dialogVisible.value = true 
}

// 定义提交表单数据模型
const defaultForm = {
    userName:"",
    name: "" ,
    phone: "" ,
    password: "" ,
    description:"",
    avatar: ""
}
const sysUser = ref(defaultForm)

// 提交按钮事件处理函数
const submit = async () => {
    if(!sysUser.value.id) {
        const {code , message , data} = await SaveSysUser(sysUser.value) 
        if(code === 200) {
            dialogVisible.value = false
            ElMessage.success('操作成功')
            fetchData()
        }else {
            ElMessage.error(message)
        }
    }else {
        const {code , message , data} = await UpdateSysUser(sysUser.value) 
        if(code === 200) {
            dialogVisible.value = false
            ElMessage.success('操作成功')
            fetchData()
        }else {
            ElMessage.error(message)
        }   
    }    
}

// 修改按钮点击事件处理函数
const editSysUser = (row) => {
    dialogVisible.value = true 
    sysUser.value = {...row}
}

const headers = {
    // 从pinia中获取token，在进行文件上传的时候将token设置到请求头中
    token: useApp().authorization.token    
}

// 图像上传成功以后的事件处理函数
const handleAvatarSuccess = (response, uploadFile) => {
    sysUser.value.avatar = response.data
}

// 删除用户
const deleteById = (row) => {
    ElMessageBox.confirm('此操作将永久删除该记录, 是否继续?', 'Warning', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(async () => {
       const {code } = await DeleteSysUserById(row.id)
       if(code === 200) {
            ElMessage.success('删除成功')
            fetchData()
       }
    })
}

// 角色列表
const userRoleIds = ref([])
const allRoles = ref([])
const dialogRoleVisible = ref(false)
const showAssignRole = async row => {
  sysUser.value = row
  dialogRoleVisible.value = true

   // 查询所有的角色数据
   const {code , message , data } = await GetAllRoleList(row.id) ;
   allRoles.value = data.allRolesList


}


// 角色分配按钮事件处理函数
const doAssign = async () => {
    let assginRoleVo = {
        userId: sysUser.value.id ,
        roleIdList: userRoleIds.value
    }
    const { code , message , data} = await DoAssignRoleToUser(assginRoleVo) ;
    if(code === 200) {
        ElMessage.success('操作成功')
        dialogRoleVisible.value = false 
        fetchData()
    }
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
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>