<template>
  <div id="app">
    <div class="topleft">
          <p><img src="./assets/logo.png" alt="logo" height="150px" width="150px"></p>
        </div>
    <div class="routes">
      <router-link to="/Home" id="routes">Home</router-link>
      <router-link to="/Login" id="routes">Login</router-link>
      <router-link to="/Register" id="routes">Register</router-link>
      <router-link to="/Contact" id="routes">Contact</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
export default {
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bgimg {
      background-image: url('./assets/background.png');
      height: 100%;
      background-position: center;
      background-size: cover;
      position: relative;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-size: 25px;
    }

head,
body,
html {
  height: 100%;
  margin: 0;
}
#routes {
  margin: 3.5pt;
}
.routes {
  position: absolute;
      top: 0;
      right: 16px;
}
.topleft {
      position: absolute;
      top: 0;
      left: 16px;
    }   
</style>
