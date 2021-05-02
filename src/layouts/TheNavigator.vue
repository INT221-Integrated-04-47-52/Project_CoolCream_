<template>
  <div class="w-full container mx-auto  flex items-center justify-between ">
 
      <a class="flex w-6/12 items-center text-blue-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        <img src="../assets/CoolCreamLogo.png" class="w-6/12"/>
      </a>
    
      <div class="flex w-1/2 justify-end content-right text-black text-xl font-bold">
        <router-link to="/" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Home</router-link>
        <router-link to="/AllProduct" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Products</router-link>
        <router-link to="/AddProduct" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Add Product</router-link>
        <router-link to="/Members" class="mx-4 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
        >Members</router-link> 
      </div>
    
    <!-- </div> -->
  </div>
 
  

</template>
