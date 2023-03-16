<template>
  <div>
    <i class="el-icon-edit"></i>
    <!-- 带icon的按钮 -->
    <el-button type="primary" class="el-icon-search">搜索</el-button>

<br><br>

    <!-- Link文字链接 -->
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告</el-link>
    <!-- :underline="false" 无下划线 -->
    <el-link type="danger" :underline="false">危险</el-link>
    <!-- disabled 禁用 -->
    <el-link type="info" disabled>信息</el-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .el-icon-edit{
        /* 改变icon图标的大小（视作文字） */
        font-size: 30px;
        color:red
    }
    .el-link{
        margin: 10px;
    }
</style>