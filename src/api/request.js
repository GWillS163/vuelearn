import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR = 'Network Error(网络错误)'
// 创建axios实例
const service = axios.create({
    baseURL: config.baseApi, // api的base_url
    timeout: 3000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use((req) => {
    // Do something before request is sent
    // When jwt authenticate
    return req
})

// response拦截器
service.interceptors.response.use((res) => {
    // Do something before response is sent
  const { code, data, msg } = res.data
    if (code == 200) {
        return data
    } else {
        // Prompt that
        ElMessage.error(msg || NETWORK_ERROR )
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// 封装get请求
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    // judge mock switch for following if statement
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') { // If mock is not undefined, use mock
        isMock = options.mock
    }

    // set baseURL of service
    if (config.env === 'prod') {
        // 线上不准使用mock
        service.defaults.baseURL = config.baseApi
    } else {
        // 开发环境
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)

}

export default request

// request = service(options), service(options) is a promise
//