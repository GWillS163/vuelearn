<template>
  <div class="tags">
    <el-tag
    :key="tag.name"
    v-for="(tag, index) in tags"
    :iscollspse="tag.name !== 'home'"
    :disable-transitions="false"
    :effect="$route.name === tag.name ? 'dark' : 'plain'"
    @click="changeMenu(tag)"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const tags = store.state.tagsList;
    const changeMenu=(item) => {
      router.push({name : item.name})
    };

    return {
      tags,
      changeMenu,
    }
  }
}
</script>

<style lang="less" scoped>
.tags{
  padding: 20px;
  width: 100%;
  .el-tag{
    margin-right:15px;
    cursor: pointer;
  }
}
</style>