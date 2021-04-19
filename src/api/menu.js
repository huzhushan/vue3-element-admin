import request from '@/utils/request'

// 获取菜单
export const GetMenus = () => {
  return request({
    url: '/api/menus',
    method: 'get',
  })
}
