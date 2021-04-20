import request from '@/utils/request'

// 测试
export const TestError = () => {
  return request({
    url: '/api/500',
    method: 'get',
  })
}
