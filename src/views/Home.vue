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
          <div
            class="flex m-4 my-48 justify-start text-left place-items-start flex justify-left"
          >
            <div>
              <img
                class="w-45 h-48"
                :src="require('../assets/welcome.png')"
                alt="image"
              />
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
      <img
        class="flex top-96 mt-48 left-0"
        :src="require('../assets/letseat.png')"
        alt="image"
      />  
      <div class="flex justify-end ">
          
        <img class="flex w-80 mr-48" :src="require('../assets/icecream.png')" alt="image" />
      <div
        class="transition ease-in duration-700 w-3/6 py-2 bg-white border-4 border-black my-12 rounded-lg h-96"
      >
        <div
          class="mx-2 bg-cover bg-fixed bg-gradient-to-b from-blue-400 via-blue-200 to-green-200 flex rounded-lg h-full"
        ><p>Ice cream 
            (derived from earlier iced cream or cream ice) 
                       Icecream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener,</p></div>
      </div>
    
    </div></div>
    <div class="flex justify-center my-36">
    <img class="w-3/6 object-center" :src="require('../assets/icecream3.png')" alt="image" />
</div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
