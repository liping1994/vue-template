<template>
  <div>
    <div id="one" >我是pageone </div>
    <el-progress :percentage="0"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="80" color="#8e71c7"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #one{
    height: 300px;
    background: darkslategrey;
    line-height: 300px;
    text-align: center;
    font-size: 100px;
    color: #fff;
  }
</style>
