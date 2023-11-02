<template>
  <div class="app-container">
    <router-view />
    <nav class="bottom-nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/index">首頁</router-link>|
      <router-link to="/hire">招聘</router-link>|
      <router-link to="/Community">社區</router-link>|
      <router-link to="/profile">我的</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom-nav {
  padding: 30px;
  background-color: #e47f7f;
  width: 100%;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  name: "App",
  setup() {
    return {};
  },
};
</script>
