    /*
    Environment Configuration

    Dev
    Test
    Prod
 */

const env =  'dev' // import.meta.env.MODE ||


const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/api',
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/api',
    },
    prod:{
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/44c95e0c04975201194d23c9204d83dd/api',
    }
}

export default {
    env,
    // mock 开关
    mock: true,
    ...EnvConfig[env]
}