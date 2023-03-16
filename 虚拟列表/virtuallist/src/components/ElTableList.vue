<template>
  <div>
    <el-table
      :data="tableData"
      border
      height="200px"
      style="width: 100%"
      v-el-table-infinite-scroll="loadMore"
    >
      <el-table-column prop="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: [],
      list: [],
      page: 1,
      count: 0,
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    loadMore() {
      this.count = this.count > this.page ? this.page : this.count;
      this.tableData = this.tableData.concat(
        this.list.splice(this.count * 20, this.count * 20 + 20)
      );
    },
    queryData() {
      // axios.get("http://localhost:5000/getDataListStatic").then((res) => {
        let res = {}
        res.data = []
        for(let i = 0 ; i < 200 ; i++){
          res.data.push(i)
        }
        console.log("请求结果200条数据==", res);
        this.list = res.data;
        this.tableData = this.list.splice(0, 20);
        this.page = Math.floor(this.list / 20);
      // });
    },
  },
};
</script>

