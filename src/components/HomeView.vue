<template>
  <div class="mx-8">
    <div class="w-6/6 bg-white border-2 border-black my-12 rounded-lg h-full">
      <div class="m-4">
        <div
          class="bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 w-full bg-white flex rounded-lg h-5/6"
        >
          <div>
            <img
              class="w-6/6 h-96 absolute bottom-24 right-0 justify-right object-right-bottom"
              :src="require('../assets/cloudright.png')"
              alt="image"
            />
          </div>
          <div class="flex m-4 my-48 justify-start text-left place-items-start flex justify-left">
            <div>
              <img class="w-45 h-48" :src="require('../assets/welcome.png')" alt="image" />
            </div>
            <div>
              <img
                class="w-6/6 h-96 absolute top-96 mt-48 left-0"
                :src="require('../assets/cloudright.png')"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img class="flex top-96 mt-48 left-0" :src="require('../assets/letseat.png')" alt="image" />
      <div class="flex justify-end">
        <img class="flex w-80 mr-48" :src="require('../assets/icecream.png')" alt="image" />
        <div
          class="transition ease-in duration-700 w-3/6 py-2 bg-white border-4 border-black my-12 rounded-lg h-96"
        >
          <div
            class="px-12 space-y-2 mx-2 bg-cover bg-fixed bg-gradient-to-b from-green-400 via-blue-100 to-blue-400 flex rounded-lg h-full"
          >

            <p
              class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 py-8 topics text-left text-5xl text-gradient-to-b from-blue-400 via-blue-200 to-green-200"
            >
              Ice cream
              <br />
              <span class="text-blue-600 text-2xl">(derived from earlier iced cream or cream ice)</span>
              <span class="text-2xl text-black ml-16">
                Icecream is a sweetened frozen food
                <span>
                  typically eaten as a snack or dessert. It may be made from dairy milk
                  or cream and is flavoured with a sweetener.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-36">
      <img class="w-3/6 object-center" :src="require('../assets/icecream3.png')" alt="image" />
    </div>
    <img class="w-2/6 object-center" :src="require('../assets/Topping.png')" alt="image" />
  
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
     
    };
  },
}
</script>
