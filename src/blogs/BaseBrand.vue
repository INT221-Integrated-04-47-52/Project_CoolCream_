<template>
  <div class="-mt-9 mb-10 md:-mt-12 md:mb-20 md:ml-10">
    <img
      class="w-2/3 md:w-2/6"
      :src="require('../assets/Brands.png')"
      alt="image"
    />
  </div>
  <div class="mb-7 flex justify-center rounded-lg">
    <div
      class="flex rounded-lg flex-row grid grid-flow-col grid-cols-2 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 gap-4 md:mb-20"
    >
      <div class=" " v-for="brand in brandArray" :key="brand.brandId">
        <div
          class="bg-white px-2 pb-2 pt-4 grid flex justify-items-center flex-wrap content-between rounded-lg hover:bg-blue-100 md:h-64 md:w-64 w-full h-full shadow-lg rounded-lg"
        >
          <img
            class="w-4/5 rounded-lg"
            :src="brand.brandImage"
            alt="brandImage"
          />
          <p class="text-lg font-bold text-blue-900">{{ brand.brandName }}</p>
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
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}brand`);
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
