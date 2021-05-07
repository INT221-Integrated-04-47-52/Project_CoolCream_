<template>
  <div class="w-full container mx-auto  flex items-center justify-between ">
 
      <a class="flex w-6/12 items-center text-blue-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        <router-link to="/"> <img src="../assets/CoolCreamLogo.png" class="md:w-64 w-96"/></router-link>
      </a>
      <div class="my-auto md:hidden">
        <div v-if="navBar" @click="navBar=false" class="material-icons text-right  w-1/12  text-black text-3xl cursor-pointer">
          menu
        </div>
        <div v-else  @click="navBar=true" class="material-icons text-right   text-black text-3xl cursor-pointer">
          close
        </div>
     
      </div>
    <div>
      <div class="hidden md:flex md:flex-row justify-end content-right -mr4 text-black text-xl font-bold">
        <router-link to="/" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Home</router-link>
        <router-link to="/AllProduct" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Products</router-link>
        <router-link to="/AddProduct" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Add Product</router-link>
        <router-link to="/Members" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Members</router-link> 
      </div>
     
     
    </div>
    <div v-if="!navBar" @click="navBar=true" class="mt-72 px-8 md:hidden pt-2 w-screen h-52 absolute bg-white font-extrabold  items-center shadow-2xl z-10 text-gray-800 text-xl">
      <router-link to="/" class="w-full h-12 hover:text-pink-500 flex items-center cursor-pointer"
        >Home</router-link>
        <router-link to="/AllProduct" class="w-full h-12 hover:text-pink-500  flex items-center  cursor-pointer"
        >Products</router-link>
        <router-link to="/AddProduct" class="w-full h-12   hover:text-pink-500 flex items-center cursor-pointer"
        >Add Product</router-link>
        <router-link to="/Members" class="w-full h-12   hover:text-pink-500 flex items-center cursor-pointer"
        >Members</router-link> 
     
    </div>

  </div>
 
  

</template>
<script>

export default {
  name: 'TheNavigator',
  data: () => {
  return {
    navBar: true,
  }
},
  components: {
  }
}
</script>