<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Three</router-link>
      <router-link to="/fish-game">FishGame</router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
