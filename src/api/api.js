// 所有 api 经过此管理
import request from './request'


export default {
    getHomeData(params) {
        return request({
            url: '/home/getTableData', // 本地mock数据
            method: 'get',
            data: params,
            mock: true
        })
    },
    getCountData() {
        return request({
            url: '/home/getCountData', // 本地mock数据
            method: 'get',
            mock: true
        })
    },
    // 获得Echarts数据
    getChartData() {
        return request({
            url: '/home/getChartData', // 本地mock数据
            method: 'get',
            mock: true
        })
    },
    // 获得用户列表
    getUserData(params) {
        return request({
            url: '/user/getUser', // 本地mock数据
            method: 'get',
            data: params,
            mock: false  // 如果是fastMock环境，需要改为true
        })
    },
    addUser(params){
    return request({
      url: '/user/add',
      method: 'post',
      // 这个mock
      mock: false,
      data:params

    })
    },
    editUser(params){
    return request({
      url: '/user/edit',
      method: 'post',
      // 这个mock
      mock: false,
      data: params

    })
    },
    deleteUser(params){
    return request({
      url: '/user/delete',
      method: 'get',
      // 这个mock
      mock: false,
      data: params

    })
    },
    // 获得菜单列表
    getMenu(params) {
        return request({
            url: '/permission/getMenu', // 本地mock数据
            method: 'post',
            mock: false,
            data: params
        })
    }


}
