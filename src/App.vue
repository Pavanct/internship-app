<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "./pages/LandingPage"

export default{
  components: {
    LandingPage
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
