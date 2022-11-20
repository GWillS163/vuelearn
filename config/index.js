// 环境配置文件

const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/getHomeData/api'
        // 3dd/getHomeData/api/getHomePage
    },
    test: {
        baseApi: 'test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/getHomeData/api'
    },
    prod: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/getHomeData/api'
    }
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
};