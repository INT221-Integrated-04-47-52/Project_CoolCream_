<template>
  <div class="mt-7 md:mt-12">
    <img class="md:w-2/6 w-4/6" :src="require('../assets/Topping.png')" alt="image" />
  </div>

  <div class="mt-5 md:mt-10 flex justify-center ">
    <div 
      class="flex rounded-lg flex-row  grid grid-flow-col grid-cols-2 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-4 md:grid-rows-2 gap-4 "
    > 
        <div class="pb-1 md:pb-2 hover:bg-pink-300 bg-white rounded-lg" v-for="topping in toppingArray" :key="topping.toppingId">
          <img class="w-80 mb-1 md:mb-2 rounded-t-lg" :src="topping.toppingImage" alt="imagesTopping" />
          <p class="text-lg font-bold text-blue-900">{{ topping.toppingName }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTopping",
  data() {
    return {
      topping: "",
      toppingArray: "",
    };
  },
  methods: {
    async fetchTopping() {
      const res = await fetch("http://localhost:6001/topping");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.toppingArray = await this.fetchTopping();
    console.log(this.toppingArray);
  },
};
</script>
