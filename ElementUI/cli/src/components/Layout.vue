<template>
  <div>
    111

    <!-- el-row表示一行 -->
    <!-- el-col表示一列 -->

    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="18">18</el-col>
    </el-row>

    <el-row>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <!-- 对齐方式 -->
    <!-- 将 type 属性赋值为 'flex'，可以启用 flex 布局，
    并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。 -->
    <el-row type="flex" justify="center">
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>

    </el-row>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .el-row{
        background-color:#42b983 ;
        margin: 20px 0;
    }

    .el-col{
        background-color: #2c3e50;
        color: white;
        padding:10px 0 
    }


</style>