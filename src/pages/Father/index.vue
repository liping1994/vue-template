<template>
  <div id="three">

    <h1>Father</h1>

    <p>
      <router-link to="/three/son1">Go to pageone</router-link>
      <router-link to="/three/son2">Go to pagetwo</router-link>
    </p>

    <router-view></router-view>

  </div>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #three{
    h1, p, a{
      text-align: center;
    }
    h1, p{
      margin-top: 100px;
    }
    a{
      display: inline-block;
      width: 200px;
      height: 40px;
      background: darkslategrey;
      margin-right: 20px;
      line-height: 40px;
      color: white;
    }
  }
</style>
