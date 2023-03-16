<template>
  <el-table ref="table" :data="visibleList" height="700px" border>
    <el-table-column prop="index" label="序号" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <template #append>
      <div :style="{ height: `${totalHeight}px` }"></div>
    </template>
  </el-table>
</template>
 
<script>
export default {
  name: "ElTableList",
  data() {
    return {
      list: [],
      visibleList: [],
      itemHeight: 48,
      totalHeight: 0,
      scrollTop: 0,
      debounce: false,
    };
  },
  created() {
    for (var i = 0; i < 100; i++) {
      this.list.push({
        index: i,
        name: "lby",
      });
      this.totalHeight += this.itemHeight;
    }
  },
  watch: {
    scrollTop: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          const start = Math.floor(val / this.itemHeight);
          this.visibleList = this.list.slice(start, start + 20);
          this.top = start * this.itemHeight;
          this.$refs.table.$el.getElementsByClassName(
            "el-table__body"
          )[0].style.top = `${start * this.itemHeight}px`;
        });
      },
    },
  },
  mounted() {
    this.$refs.table.bodyWrapper.addEventListener("scroll", (e) => {
      if (this.debounce) return;
      this.debounce = true;
      this.scrollTop = e.target.scrollTop;
      setTimeout(() => {
        this.debounce = false;
      }, 50);
    });
  },
};
</script>
 
<style>
.el-table__body-wrapper {
  overflow-y: auto;
}
.el-table__body {
  position: absolute;
}
</style>
