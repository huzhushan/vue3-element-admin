import request from '@/utils/request'

// 分页查询角色数据
export const GetSysRoleListByPage = (pageNum , pageSize , queryDto) => {
    return request({
        url: '/admin/system/sysRole/findByPage/' + pageNum + "/" + pageSize,
        method: 'post',
        data: queryDto
    })
}

// 添加角色请求方法
export const SaveSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/saveSysRole',
        method: 'post',
        data
    })
}


// 保存修改
export const UpdateSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/updateSysRole',
        method: 'put',
        data
    })
}


// 删除角色
export const DeleteSysRoleById = (roleId) => {
    return request({
        url: '/admin/system/sysRole/deleteById/' + roleId,
        method: 'delete'
    })
}


// 查询用户的所有角色数据
export const GetAllRoleList = (userId) => {
    return request({
        url: '/admin/system/sysRole/findAllRoles/' + userId,
        method: 'get'
    })
}