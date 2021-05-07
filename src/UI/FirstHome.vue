<template>
  
  <div class="w-6/6  bg-white border-2 border-black my-12 rounded-lg h-full">
    <div class="m-4">
      <div
        class="mx-auto bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 w-full bg-white flex rounded-lg h-5/6"
      >
        <div class="w-1/6">
          <img
            class="md:w-2/6  md:h-96 md:absolute md:bottom-24 md:right-18 md:justify-right md:object-right-bottom
            w-2/6 h-32 absolute right-0 justify-right "
            :src="require('../assets/cloudright.png')"
            alt="image"/>
        </div>
        <div
          class="flex m-4 my-48 justify-start text-left place-items-start md:flex md:justify-left"
        >
          <div>
            <img
              class="md:w-8/12 md:h-48 w-12/12 h-8/12 flex "
              :src="require('../assets/welcome.png')"
              alt="image"
            />
          </div>
          <div>
            <img
              class="md:w-6/6 md:h-96 md:absolute md:top-96 md:mt-48 md:left-0
              w-3/6 h-48 absolute left-0 bottom-2 justify-left  "
              :src="require('../assets/cloudright.png')"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <img
      class="md:flex md:top-96 md:mt-48 md:left-0 md:w-5/6 "
      :src="require('../assets/letseat.png')"
      alt="image"
    />
 
      
    <div class="flex md:justify-center justify-start ">
      <div
        class="transition ease-in duration-700 md:w-3/6  py-2 bg-white border-4 border-black my-12 rounded-lg h-full"
      >
        <div
          class="md:px-12  px-2 space-y-2 mx-2 bg-cover bg-fixed bg-gradient-to-b from-green-400 via-blue-100 to-blue-400 flex rounded-lg h-full"
        >
          <p
            class="toppics  bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 md:py-8 py-2 topics text-left md:text-5xl text-3xl text-gradient-to-b from-blue-400 via-blue-200 to-green-200"
          >
            Ice cream
            <br />
            <span class="text-blue-600 text-sm md:text-2xl "
              >(derived from earlier iced cream or cream ice)</span
            >
            <span class="md:text-2xl pl-8 text-sm text-black ml-16">
              <br><span class="pl-8">Icecream is a sweetened frozen food</span>
              <span class="text-sm md:text-2xl">
                typically eaten as a snack or dessert. It may be made from dairy
                milk or cream and is flavoured with a sweetener.
              </span>
            </span>
          </p>
        </div>
      </div>
  
      
    </div>
   
  </div>
  
  <div class="md:text-9xl text-7xl font-black flex items-center justify-center relative h-96 w-full mt-20 mb-16">
    <div
      class="icecream3 absolute md:top-10 top-14 text-black "
    >
      ICECREAM
    </div>
    <div
      class="icecream3 icecream32 absolute md:top-28  top-24 text-white"
    >
      ICECREAM
    </div>
    <div
      class="icecream3 icecream33 absolute md:top-48 top-32 text-divurdivle-800"
    >
      ICECREAM
    </div>
  </div>
</template>
