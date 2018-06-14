<template>
  <div>
    <div id="two">我是pagetwo</div>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #two{
    height: 300px;
    background: darkgrey;
    line-height: 300px;
    text-align: center;
    font-size: 100px;
    color: #fff;
  }
</style>
