
<template>
  <div class="mx-8">
 <img class="absolute  my-80 w-2/6 object-center" :src="require('../assets/Topping.png')" alt="image" />
<first-home></first-home>
 <blog-topping></blog-topping>
  </div>
   </template>
<script>
import BlogTopping from './components/BlogTopping.vue'
import FirstHome from './components/FirstHome.vue'
  
export default {
    components: {
      BlogTopping,FirstHome

    }
  }
  </script>

<style>
  .toppics{
    font-family: "Fredoka One", sans-serif;;
  }
  .icecream3{
    font-family: 'Poppins';
  }
  .icecream33{
    color: #5466ED;

  }
  .icecream32{
    color: transparent;
    -webkit-text-stroke: 5px ;
    -webkit-text-stroke-color: #D68BF2;

  }
</style>