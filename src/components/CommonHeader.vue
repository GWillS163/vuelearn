<template>
  <el-header>
    <div class="l-content">
      <el-button value="Menu" icon="menu" size="small"
      @click="handleCollapse"
      ></el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImageUrl()" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
<!--  create a common button with a menu icon-->
<!--  <el-button type="primary"-->
<!--             icon="el-icon-menu"-->
<!--             @click="toggleSideBar"></el-button>-->
</template>


<script>
import {  defineComponent } from "vue-demi";
// import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup(){
    const store = useStore();
    // const imgSrc = require('../assets/images/user.png')
    let getImageUrl = () => {
      // console.log(import.meta.url);
      // console.log(new URL("../assets/images/user.png", import.meta.url));
      return new URL(`../assets/images/user.png`, import.meta.url).href;
      // return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    }

    let handleCollapse = () => {
      store.commit("updateIsCollapse", "233");
    }

    return {
      getImageUrl,
      handleCollapse
    }
  },
  name: 'CommonHeader'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/* lang="less" */
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
  margin-right: 0;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
    margin: 0;
  }
}

.r-content {
  .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
