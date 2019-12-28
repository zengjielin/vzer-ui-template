<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "PingFang SC", "Rajdhani-Medium", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  box-sizing: border-box;
  position: relative;
  user-select: none;
}
</style>
