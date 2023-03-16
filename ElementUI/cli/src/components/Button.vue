<template>
  <div>
    <!-- 使用type、plain、round和circle属性来定义 Button 的样式。 -->
    <!-- round椭圆 circle圆 plain朴素按钮 -->
    <!-- type='text'纯文本按钮（看起来像超链接但其实是按钮） -->
    <!-- disabled禁用 -->

    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <br><br>
    <el-button plain >朴素按钮</el-button>
    <el-button type="primary" circle>圆按钮</el-button>
    <el-button type="primary" round >椭圆按钮</el-button>
    <el-button type="info" circle class="el-icon-search"></el-button>
    <el-button type="danger" disabled>危险按钮（按不下）</el-button>

    <br><br>

    <!-- 按钮组 -->
    <!-- 使用el-button-group包裹多个按钮即可 -->

    <el-button-group>
        <el-button type="primary ">←</el-button>
        <el-button type="primary ">→</el-button>
    </el-button-group>

    <br><br>

    <!-- 按钮加载中 -->
    <el-button :loading="true" type="info">加载中</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>