import request from '@/utils/request'

export function getSwipeListApi() {
    return request({
      url: '/api/4/news/latest',
      method: 'GET',
      data: {}
    })
  }