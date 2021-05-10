<template>
  <div class="w-5/6 mx-auto">
    <home-view class="w-full"></home-view>

    <div class="bgbrand p-2 mt-24 md:p-8 md:p-24 md:pb-8 md:mt-32 relative">
      <div class="bg-white border-2 border-black rounded-lg h-full">
        <div class="m-2 mb:m-4">
          <div
            class="bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 w-full bg-white flex rounded-lg md:h-5/6"
          >
            <img
              class="absolute -top-20 -right-28 w-6/6 h-40 md:-top-28 md:-right-28 md:w-5/12 md:h-80"
              :src="require('../assets/cloudright.png')"
              alt="image"
            />

            <div class="m-2">
              <base-brand></base-brand>
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-52 -ml-40 -mt-16 md:h-96 md:-ml-64 md:-mt-32">
        <img
          class="absolute top-0 -left-0 w-6/6 h-48 md:w-6/6 md:h-96"
          :src="require('../assets/cloudright.png')"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.bgbrand {
  background-color: #46bce1;
}
</style>
