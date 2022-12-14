<template>
  <el-header>
    <div class="l-content">
      <el-button value="Menu" icon="menu" size="small"
      @click="handleCollapse"
      ></el-button>
      <el-breadcrumb separator="/" class="bread">
<!--        首页一定存在，所以写死-->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>

    </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImageUrl()" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
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
import {  computed, defineComponent } from "vue-demi";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup(){
    const store = useStore();
    const router = useRouter();
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
    // 面包屑 通信
    const current = computed(() => {
      return store.state.currentMenu;
    });

    let handleLogout = () => {
      store.commit("cleanMenu");
      router.push({
        path: "/login"
      })
    }

    return {
      getImageUrl,
      handleCollapse,
      current,
      handleLogout
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
deep(.bread span) {
  color: #ffffff !important;
  cursor: pointer;
}
</style>
