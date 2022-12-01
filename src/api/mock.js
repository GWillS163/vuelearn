import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
Mock.mock('/home/getTableData', homeApi.getTableData())
Mock.mock('/home/getCountData', homeApi.getCountData())
Mock.mock('/home/getChartData', homeApi.getChartData())

// 本地获取用户列表
Mock.mock(/user\/getUser/, "get", userApi.getUserList)