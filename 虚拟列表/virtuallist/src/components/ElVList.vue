<template>
  <!-- 可视区域的容器（监听滚动事件） -->
  <div>
    <div
      ref="list"
      class="infinite-list-container"
      @scroll="scrollEvent($event)"
    >
      <el-table :data="visibleData" style="width: 100%">
        <!-- 容器内的占位（内联样式动态设置高度） -->
        <div
          class="infinite-list-phantom"
          :style="{ height: listHeight + 'px' }"
        >
          <!-- 列表项的渲染区域（内联样式动态设置偏移量） -->
          <div class="infinite-list" :style="{ transform: getTransform }">
            <!-- 渲染区域内的每一列表项（v-for遍历真实显示列表数据（开始索引到结束索引的数据）） -->
            <el-table-column
              class="infinite-list-item"
              prop="value"
              label="日期"
              width="180"
              :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
            >
            </el-table-column>
          </div>
        </div>
      </el-table>
    </div>
  </div>
</template>



<script>
export default {
  props: ["itemSize", "listData"],
  data() {
    return {
      // 当前滚动位置
      scrollTop: 0,
      // 可视区域高度
      screenHeight: 0,
      // 偏移量
      startOffset: 0,
      // 起始&结束索引
      startIndex: 0,
      endIndex: 0,
    };
  },
  computed: {
    //列表总高度（单条数据高度*数据量）
    listHeight() {
      return this.itemSize * this.listData.length;
    },

    //可显示的列表项数（可视区域高度÷单条数据高度）
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },

    //偏移量对应的style（没太懂）
    getTransform() {
      // return null
      return `translate3d(0,${this.startOffset}px,0)`;
    },

    //获取真实显示列表数据（截取开始索引到结束索引）
    visibleData() {
      return this.listData.slice(
        this.startIndex,
        // Math.min 返回一组数之中的最小值（结束索引处已经超出数据列表总长度时，取总长度的值）
        Math.min(this.endIndex, this.listData.length)
      );
    },
  },

  mounted() {
    // 组件挂载完毕时获取可视区域高度
    // $el指向当前组件的DOM元素 ； clientHeight：元素可视区域高度
    this.screenHeight = this.$el.clientHeight;
    this.startIndex = 0;
    this.endIndex = this.startIndex + this.visibleCount;
  },

  methods: {
    // 滚动事件
    scrollEvent() {
      console.log(1);
      // 记录当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      // 起始索引 = 当前滚动的位置 ÷ 列表每项高度
      this.startIndex = Math.floor(scrollTop / this.itemSize);
      // 结束索引 = 起始索引 + 可显示的列表项
      this.endIndex = this.startIndex + this.visibleCount;
      // 偏移量 = 当前滚动位置 - (当前滚动位置÷列表每项高度的余数）
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },
  },
};
</script>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>