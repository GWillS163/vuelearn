<template>
  <router-view/>
</template>

<script setup>
// 数据持久化，有了以下三行代码，刷新页面不会丢失
// import { useStore } from "vuex"
// import { useRouter } from "vue-router"
// const store = useStore();
// const router = useRouter();
// store.commit("addMenu", router)
</script>
<style>
#app {
  height: 100%;
}
</style>