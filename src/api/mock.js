import Mock from 'mockjs'
import homeApi from './mockData/home'
Mock.mock('/home/getTableData', homeApi.getTableData())
Mock.mock('/home/getCountData', homeApi.getCountData())
Mock.mock('/home/getChartData', homeApi.getChartData())

Mock.mock(/user\/getUser/, "get", homeApi.getUserList())