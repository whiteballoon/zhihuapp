import request from '@/utils/request'

// 获取首页信息
export function getSwipeListApi() {
  return request({
    url: '/api/4/news/latest',
    method: 'GET',
    data: {}
  })
}
// 根据id获取详情
export function getDetailApi(id) {
  return request({
    url: 'api/4/news/'+id,
    method: 'GET',
    data: {}
  })
}
// 根据id获取点赞数
export function getPopularityApi(id) {
  return request({
    url: 'api/4/story-extra/'+id,
    method: 'GET',
    data: {}
  })
}
// 根据id获取长评论
export function getLongCommentsApi(id) {
  return request({
    url: 'api/4/story/'+id+'/long-comments',
    method: 'GET',
    data: {}
  })
}
// 根据id获取短评论
export function getShortCommentsApi(id) {
  return request({
    url: 'api/4/story/'+id+'/short-comments',
    method: 'GET',
    data: {}
  })
}
// 根据日期获取过往消息
export function getBeforeMsgApi(date) {
  return request({
    url: 'api/4/news/before/'+date,
    method: 'GET',
    data: {}
  })
}