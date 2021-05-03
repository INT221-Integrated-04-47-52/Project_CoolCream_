<template>
  <the-navigator></the-navigator>
  <router-view />

</template>

<script>
import TheNavigator from './layouts/TheNavigator.vue'

export default {
  name: 'App',
  components: {
    TheNavigator



  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif ,"Fredoka One",'Poppins',cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
