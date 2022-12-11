import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
import permissionApi from './mockData/permission'

Mock.mock('/home/getTableData', homeApi.getTableData())
Mock.mock('/home/getCountData', homeApi.getCountData())
Mock.mock('/home/getChartData', homeApi.getChartData())

// 本地获取用户列表
Mock.mock(/user\/getUser/, "get", userApi.getUserList)
Mock.mock(/user\/add/, "post", userApi.createUser)
Mock.mock(/user\/edit/, "post", userApi.editUser)
Mock.mock(/user\/delete/, "get", userApi.deleteUser)

Mock.mock(/permission\/getMenu/, "post", permissionApi.getMenu)
