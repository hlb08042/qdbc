<template>
  <div >
    <ul class="tree-ul" v-if="false">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div :class="{ 'item-active': item.isActive }">
          <div>
            <!-- 图标 -->
            <span>▶</span>
            <!-- 文字 -->
            <span @click="changeActive(item) ,changeOpen(item)">
              <i></i>
              {{ item.name }}{{ item.isActive }}
            </span>
          </div>
        </div>
        <ul v-if="item.children" v-show="item.isOpen">
          <li class="item" v-for="(item, index) in item.children" :key="index">
            <div :class="{ 'item-active': item.isActive }">
              <div>
                <!-- 图标 -->
                <span>▶</span>
                <!-- 文字 -->
                <span @click="changeActive(item)">
                  <i></i>
                  {{ item.name }}{{ item.isActive }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <Item  :list="list"  ></Item>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components:{Item},
  data() {
    return {
      treeData: [
        {
          id: "1",
          name: "资产单据",
          children: [
            {
              id: "1-1",
              name: "单据类别1",
              children: null,
            },
          ],
        },
        {
          id: "2",
          name: "资产分类",
          children: [
            {
              id: "2-1",
              name: "办公设备",
              children: [
                {
                  id: "2-1-1",
                  name: "打印机",
                  children: null,
                },
                {
                  id: "2-1-2",
                  name: "LED显示屏",
                  children: null,
                },
                {
                  id: "2-1-3",
                  name: "标签机",
                  children: null,
                },
                {
                  id: "2-1-4",
                  name: "其他设备",
                  children: null,
                },
              ],
            },
          ],
        },
        {
          id: "3",
          name: "办公家具",
          children: [
            {
              id: "3-1",
              name: "家具类别1",
              children: null,
            },
            {
              id: "3-2",
              name: "家具类别2",
              children: null,
            },
          ],
        },
      ],
      list: null,
    };
  },

  methods: {
    // 展开状态变更
    changeOpen(item){
      item.isOpen = !item.isOpen
    },

    // 选中状态变更
    changeActive(item) {
      console.log(22)
      // 取消其他（递归）
      this.resetActive(this.list);
      item.isActive = !item.isActive;
      this.$forceUpdate();
      console.log(item);
      console.log(item.isActive);
    },

    resetActive(arr) {
      arr.forEach((item) => {
        item.isActive = false;
        if (item.children) {
          this.resetActive(item.children);
        }
      });
    },

    init(data) {
      // 加载数据/格式化
      console.log(data);
      // 动态添加是否展开&是否选中属性
      this.addPrototy(data);
      console.log(this.treeData);
      this.list = this.treeData;
    },

    addPrototy(arr) {
      arr.forEach((item) => {
        console.log(item, "11");
        item.isOpen = false; //是否展开
        item.isActive = false; //是否选中
        // 递归
        if (item.children) {
          this.addPrototy(item.children);
        }
      });
    },
  },

  mounted() {
    // 初始化数据
    this.init(this.treeData);
  },
};
</script>

<style>
.item-active {
  background: skyblue;
  border: 1px solid red;
  color: #fff;
}
.tree-ul {
  width: 200px;
}
</style>