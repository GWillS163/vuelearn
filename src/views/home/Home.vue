<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user.png" alt="" />
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2022-7-11</span></p>
          <p>上次登录的地点:<span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key" :prop="key" :label="val">

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <component
            class="icons"
            :is="item.icon"
            :style="{ background: item.color }"
          >

            {{item.icon}}
          </component>
          <div class="details">
            <p class="num">$ {{ item.value}}</p>
            <p class="txt"> {{item.name}}</p>
          </div>
        </el-card>
      </div>

    </el-col>
  </el-row>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
} from "vue";


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  setup() {
    const { proxy } = getCurrentInstance();
    let tableData = ref([]);
    let countData = ref([]);

    const tableLabel = {
      name: "课程",
      todayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    }

    const getTableData = async () => {
      // await axios.get("/home/getData").then((res) => {
      //   console.log(res);
      //   tableData.value = res.data.data.tableData
      // })
      tableData.value = await proxy.$api.getHomeData()
    }

    const getCountData = async () => {
      countData.value = await proxy.$api.getCountData()
    }

    onMounted(() => {
      getTableData();
      // getTableListOnline();
      getCountData();
    })
    return {
      tableData,
      tableLabel,
      countData,
    }

  }
})
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
}

.login-info{
  p {
    line-height: 30px;
    font-size: 14px;
    color: #999 ;
    span{
      color: #666;
      margin-left: 60px;
    }
  }
}
.num{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .icons{
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .details{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .num{
      font-size: 30px;
      margin-bottom: 10px;
    }

    .txt{
      font-size: 14px;
      text-align: #999;
    }
  }
}
</style>
