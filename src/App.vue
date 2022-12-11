<template>
  <router-view/>
</template>

<script setup>
// 数据持久化，有了以下三行代码，刷新页面不会丢失
import { useStore } from "vuex"
const store = useStore();
store.commit("addMenu")
</script>
<style>
#app {
  height: 100%;
}
</style>