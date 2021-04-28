<template>
  <div class="w-full container mx-auto  flex items-center justify-between ">
    <!-- <div class="w-full  flex items-center justify-between"> -->
      <a class="flex items-center text-blue-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        Cool<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500">Cream</span>
      </a>
    
      <div class="flex w-1/2 justify-end content-right text-black text-xl font-bold">
        <router-link to="/" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Products</router-link>
        <router-link to="/AddProduct" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Add Product</router-link>
        <router-link to="/Members" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Members</router-link> 
      </div>
    
    <!-- </div> -->
  </div>
 
  

</template>
