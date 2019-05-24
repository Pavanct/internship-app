<template>
  <div id="app">
    <router-link to="/Login">Login</router-link>
    <router-link to="/LandingPage">LandingPage</router-link>

    <router-view></router-view>
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>

export default{
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
.bg{
  background-image: url('./assets/LandingPageBackground.jpg');
   /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}
head, body,html{
  height: 100%;
  margin: 0;
}
</style>
