<template>
  <div id="app">
    <h1>Hello Vue!</h1>

    <p>
      <router-link to="/one">Go to pageone</router-link>
      <router-link to="/two">Go to pagetwo</router-link>
      <router-link to="/three">嵌套路由</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #app{
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
