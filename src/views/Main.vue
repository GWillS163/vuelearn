<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside />
      <el-container>
        <common-header/>
        <common-tab/>
        <el-main class="right-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue"
import CommonAside from "../components/CommonAside.vue"
import CommonTab from "@/components/CommonTab.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  // name: 'Main',
  // props:{
  //   msg: String,
  // },
  components:{
    CommonHeader,
    CommonAside,
    CommonTab,
  }
})

</script>

<style lang="less" scoped>

.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
}


.common-layout {
  height: 100%;
  .lay-container{
    flex-wrap: nowrap;
    .right-main {
      //height: 100%;
      height: calc(100% - 124px) !important;
    }
  }

  & > .el-container {
    height: 100%;
     & > .el-aside {
       height: 100%;
       background-color: #545c64;
     }
  }
}

.el-aside {
   height: 100%;
}

</style>