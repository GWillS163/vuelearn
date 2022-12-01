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
    }


}
