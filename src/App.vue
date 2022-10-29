<template>
  <router-view/>
</template>

<script>
// import ElementTest from "./components/Eleme.vue";
// import BSTest from "@/components/BSTest";


export default {
  components: {
    // ElementTest,
    // BSTest,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
}
</script>
<style>
#app {
  height: 100%;
}
</style>