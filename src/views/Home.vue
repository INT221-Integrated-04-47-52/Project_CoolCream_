<template>
  <home-view></home-view>

  <div class="bgbrand p-8 md:p-24 md:pb-8 mt-24 relative ">
    <div class="bg-white border-2 border-black rounded-lg h-full">
      <div class="m-4 ">
        <div
          class="bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 w-full bg-white flex rounded-lg md:h-5/6 "
        >
          <img
            class="absolute top-0 -right-52 md:w-6/6 w-4/6 h-48 md:h-96"
            :src="require('../assets/cloudright.png')"
            alt="image"
          />

          <div class="mx-auto mb-8 h-full">
            <base-brand></base-brand>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-96 -ml-52 -mt-14">
    <img
      class="absolute top-0 left-0 w-6/6 h-96"
      :src="require('../assets/cloudright.png')"
      alt="image"
    />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style>
.bgbrand {
  background-color: #46bce1;
}
</style>
