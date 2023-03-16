<template>
  <div>
    <ul>
      <!-- 使用这个组件，并绑定数据 -->
      <Item :model="treeData"></Item>
    </ul>
  </div>
</template>
<script>
// 导入递归组件
import Item from "./Item";
export default {
  name: "App",
  data() {
    return {
      // 需要实现递归的数据，上面已经给出
      treeData: [{
        title: "Web全栈架构师",
        children: [
          {
            title: "Java架构师"
          },
          {
            title: "JS高级",
            children: [
              {
                title: "ES6",
                children: [
                  {
                    title: "Promise"
                  },
                ],
              },
              {
                title: "动效"
              }
            ]
          },
          {
            title: "Web全栈",
            children: [
              {
                title: "Vue训练营",
                expand: true,
                children: [
                  {
                    title: "组件化"
                  },
                  {
                    title: "源码"
                  },
                  {
                    title: "docker部署"
                  }
                ]
              },
              {
                title: "React",
                children: [
                  {
                    title: "JSX"
                  },
                  {
                    title: "虚拟DOM"
                  }
                ]
              },
              {
                title: "Node"
              }
            ]
          }
        ]
      },
      {
        title:'1',
        children: [
          {
            title: "Java架构师"
          },
        ]
      }
    ]
    };
  },
  components: {
    // 注册组件
    Item
  }
};
</script>
