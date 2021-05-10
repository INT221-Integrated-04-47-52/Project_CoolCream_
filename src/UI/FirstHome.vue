<template>
  <div
    class="mt-12 w-6/6 bg-white relative border-2 border-black rounded-lg h-full"
  >
    <div class="m-2 md:m-4">
      <div
        class="mx-auto w-full h-5/6 flex bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 bg-white rounded-lg"
      >
        <div class="">
          <img
            class="absolute top-3 -right-44 h-40 md:-top-7 md:-right-32 md:h-96"
            :src="require('../assets/cloudright.png')"
            alt="image"
          />
        </div>

        <div class="my-20 mx-10 md:my-40 md:mx-20">
          <img
            class="md:w-8/12 md:h-48"
            :src="require('../assets/welcome.png')"
            alt="image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="relative h-48 -ml-36 -mt-20 md:h-96 md:-ml-32 md:-mt-40">
    <img
      class="absolute top-0 left-0 h-48 md:h-80"
      :src="require('../assets/cloudright.png')"
      alt="image"
    />
  </div>

  <div class="">
    <img
      class="w-6/6 md:w-5/6"
      :src="require('../assets/letseat.png')"
      alt="image"
    />

    <div class="flex md:justify-center justify-start">
      <div
        class="my-5 h-full bg-white border-4 border-black rounded-lg md:w-2/3 md:my-20"
      >
        <div
          class="m-2 p-5 md:p-12 bg-cover bg-fixed bg-gradient-to-b from-green-400 via-blue-100 to-blue-400 flex rounded-lg h-full"
        >
          <span
            class="toppics bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 topics text-left md:text-5xl text-3xl text-gradient-to-b from-blue-400 via-blue-200 to-green-200"
          >
            Ice cream
            <p
              class="my-2 text-justify text-blue-600 text-sm md:text-2xl md:my-3"
            >
              (derived from earlier iced cream or cream ice)
            </p>
            <p class="text-justify text-sm text-black md:text-2xl">
              Icecream is a sweetened frozen food typically eaten as a snack or
              dessert. It may be made from dairy milk or cream and is flavoured
              with a sweetener.
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div
    class="md:text-9xl md:h-96 text-6xl font-black flex items-center justify-center relative h-52 w-full"
  >
    <div class="icecream3 absolute md:top-10 top-10 text-black">ICECREAM</div>
    <div class="icecream3 icecream32 absolute md:top-28 top-20 text-white">
      ICECREAM
    </div>
    <div
      class="icecream3 icecream33 absolute md:top-48 top-28 text-divurdivle-800"
    >
      ICECREAM
    </div>
  </div>
</template>