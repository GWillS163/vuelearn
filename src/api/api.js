// 所有 api
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
    getUserList(params) {
        return request({
            url: '/user/getUser', // 本地mock数据
            method: 'get',
            data: params,
            mock: true
        })
    }


}
