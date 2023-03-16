<template>
  <div>
    <!-- gutter	栅格间隔 -->
    <el-row :gutter="5">
      <el-col :span="6">
        <div>
          <el-input v-model="input1" placeholder="请输入"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
            <!-- 带清空按钮clearable -->
          <el-input v-model="input2" placeholder="请输入" clearable ></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
            <!-- 密码框show-password -->
          <el-input v-model="input3" placeholder="请输入" show-password></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input v-model="input4" placeholder="请输入(限10)" maxlength="10" show-word-limit></el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input1:"",
            input2:"",
            input3:"",
            input4:""
        }
    },
};
</script>

<style>
</style>