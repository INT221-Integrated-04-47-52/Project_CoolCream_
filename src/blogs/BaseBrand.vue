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
      class="flex rounded-lg flex-row  grid grid-flow-col grid-cols-3 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 gap-4 "
    > 
    <div class=" " v-for="brand in brandArray" :key="brand.brandId">
      <div
        class=" flex  bg-white grid justify-items-center my-auto rounded-lg hover:bg-blue-100  md:h-64 md:w-64 w-full  flex-row h-full shadow-lg rounded-lg"
      >
        <img class="md:w-5/6 w-full h-4/6 justify-center" :src="brand.brandImage" alt="brandImage" />
      
      </div>
      <div> <p class="text-lg  font-bold text-blue-900 flex justify-start"><br>{{ brand.brandName }}</p>
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
