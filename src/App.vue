<template>
  <el-config-provider :size="size" :z-index="zIndex">
<!--    make the following elements center-->
    <el-row :gutter="20" justify="center">
<!--      make the following elements center-->
      <el-col :span="12">

      <ElementTest />
<!--      <BSTest/>-->
      </el-col>
    </el-row>
  </el-config-provider>
</template>

<script>
import ElementTest from "./components/Eleme.vue";
// import BSTest from "@/components/BSTest";


export default {
  components: {
    ElementTest,
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