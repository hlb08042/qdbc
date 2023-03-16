<template>
  <div>
    <!-- 
    要使用 Radio 组件，只需要设置v-model绑定变量，
    选中意味着变量的值为相应 Radio label属性的值，
    label可以是String、Number或Boolean。 
-->

    <el-radio v-model="sex" label="1">男</el-radio>
    <el-radio v-model="sex" label="2">女</el-radio>

    <br /><br />
    <!-- 建议：除非特别简单，否则都做成单选框组 -->
    <!-- v-model可以在外层组容器进行绑定 -->

    <el-radio-group v-model="city">
      <el-radio label="1">广州</el-radio>
      <el-radio label="2">深圳</el-radio>
      <el-radio label="3">佛山</el-radio>
    </el-radio-group>

    <!-- 也可以用v-bind绑定label（简写：:label) 参考文档写法-->
    <!-- v-bind绑定后，""内视为表达式，解决数据类型不一问题（data中的value可写数值型） -->
    <br /><br />
    <!-- 按钮型单选框 -->
    <!-- 只需要把el-radio元素换成el-radio-button元素即可 -->

    <el-radio-group v-model="city">
      <el-radio-button label="1">广州</el-radio-button>
      <el-radio-button label="2">深圳</el-radio-button>
      <el-radio-button label="3">佛山</el-radio-button>
    </el-radio-group>
    <br /><br />

    <!-- 复选框 -->
    <!-- 使用 min 和 max 属性能够限制可以被勾选的项目的数量。 -->
    <el-checkbox-group v-model="checkList" :min="1" :max="3">
      <el-checkbox label="音乐"></el-checkbox>
      <el-checkbox label="体育"></el-checkbox>
      <el-checkbox label="画画"></el-checkbox>
      <el-checkbox label="打游戏" disabled></el-checkbox>
      <el-checkbox label="学习" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: "1",
      city: "1",
        //配置复选框   
      checkList: ['音乐','学习']
    };
  },
};
</script>

<style>
</style>