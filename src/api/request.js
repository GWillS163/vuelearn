import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR = 'Network Error(网络错误)'
// 创建axios实例
const service = axios.create({
    baseURL: config.baseApi, // api的base_url

})

// before request hook
service.interceptors.request.use((req) => {
    // jwt-token 认证的时候使用
    return req
})

// after response hook
service.interceptors.response.use((res) => {
    console.log(res.data)
    const { code, data, msg } = res.data
    if (code === 200) {
        return data
    } else {
        // 网络请求错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// request method
function request(options) {
    // { method: 'get', data: { } }

    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    // mock
    let isMock = config.mock // 是否开启mock
    if (typeof options.mock !== 'undefined') { // 针对某个接口是否使用mock
        isMock = options.mock
    }

    // 线上环境不使用mock
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

export default request