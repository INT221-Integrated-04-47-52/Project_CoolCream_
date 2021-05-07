<template>
  <div class="-mt-12 mb-20 pl-10">
    <img
      class="md:w-2/6 w-full"
      :src="require('../assets/Brands.png')"
      alt="image"
    />
  </div>
  <div class="flex justify-center rounded-lg">
    <div 
      class="flex rounded-lg flex-row  ml-8 grid grid-flow-col grid-cols-3 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 gap-4 "
    > 
    <div class="hover:bg-pink-300 bg-white " v-for="brand in brandArray" :key="brand.brandId">
      <div
        class=" flex bg-white rounded-lg :hoverbg-blue-100  md:h-80 md:w-80 w-48 h-48 shadow-lg rounded-lg"
      >
        <img class="md:w-84 w-48 h-48 " :src="brand.brandImage" alt="brandImage" />
        <p class="text-lg  font-bold text-blue-900"><br>{{ brand.brandName }}</p>
      </div>
    </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "BaseBrand",
  data() {
    return {
      brand: "",
      brandArray: "",
    };
  },
  methods: {
    async fetchBrand() {
      const res = await fetch("http://localhost:6001/brand");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.brandArray = await this.fetchBrand();
    console.log(this.brandArray);
  },
};
</script>
