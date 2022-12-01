<template>
  <div class="tags">
    <el-tag
    :key="tag.name"
    v-for="(tag, index) in tags"
    :iscollspse="tag.name !== 'home'"
    :disable-transitions="false"
    :effect="$route.name === tag.name ? 'dark' : 'plain'"
    @click="changeMenu(tag)"

    closable
    @close="handleClose(tag, index)"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const tags = store.state.tagsList;
    const changeMenu=(item) => {
      router.push({name : item.name})
    };
    const handleClose = (tag, index) => {
      let length = tags.length - 1;
      // 处理vuex中的tagsList
      store.commit("closeTag", tag);
      // 处理路由 判断
      if (tag.name !== route.name) {
        return; // 如果关闭的不是当前路由，不做跳转处理
      }
      if (index === length) {  // 关闭的是最后一个
        router.push({
          name: tags[index - 1].name });
      } else { // 关闭的不是最后一个
        router.push({
          name: tags[index ].name }); // 跳转到下一个
      }
    };

    return {
      tags,
      changeMenu,
      handleClose,
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