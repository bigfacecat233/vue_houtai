<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :type="tag.type"
      @close="handleClose(tag, index)"
      @click="changeMenu(tag)"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.menuList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTags",
    }),
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);

      if (tag.name !== this.$route.name) return;
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
    changeMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tags {
  margin-top: 20px;
  .el-tag {
    margin: 0 10px;
  }
}
</style>
