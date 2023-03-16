<template>
  <div id="app">
    <!-- <virtualList :listData="listData" :itemSize="itemSize" v-if="false"/> -->
    <ElTableList></ElTableList>
  </div>
</template>

<script>
// import virtualList from './components/virtualList.vue'
import ElTableList from './components/ElTableList.vue'

let listData = []
for (let i = 0; i < 1000; i++) {
  listData.push({ id: i, value: `第${i}条数据` })
}

export default {
  name: 'App',
  components: {
    // virtualList,
    ElTableList
    
  },
  data() {
    return {
      // listData: listData,
      // itemSize: 100, //列表每项高度(px)
    }
  }
}
</script>

<style>

html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
#app{
  height:100%;
  text-align: center;
  margin-top: 60px;
}
</style>
