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
    getCountData(params) {
        return request({
            url: '/home/getCountData', // 本地mock数据
            method: 'get',
            data: params,
            mock: true
        })
    }
}
