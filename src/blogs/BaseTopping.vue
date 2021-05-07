<template>
  <div class="">
    <img class="md:w-2/6 w-5/6" :src="require('../assets/Topping.png')" alt="image" />
  </div>
  <div class="flex justify-center rounded-lg">
    <div 
      class="flex rounded-lg flex-row  grid grid-flow-col grid-cols-2 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 gap-4 "
    > 
        <div class="hover:bg-pink-300 bg-white"   v-for="topping in toppingArray" :key="topping.toppingId">
          <img class="w-80 " :src="topping.toppingImage" alt="imagesTopping" />
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
