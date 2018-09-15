<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Three</router-link>
      <router-link to="/fish-game">FishGame</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
#app {
  // height 100%
  // width 100%
  .nav{
    position fixed
    a{
      color rgb(34,105,254)
    }
  }
}
</style>
