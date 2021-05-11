<template>
  <div class="grid md:grid-col-3">
    <div
      class="bg-white mx-5 my-2 h-auto w-full px-5 py-7 md:px-2 md:py-5 hover:bg-yellow-100 md:m-7 md:h-auto md:w-96 shadow-lg rounded-lg"
    >
      <div class="mb-4 flex justify-center">
        <img
          class="transform rounded-full hover:rotate-6 transition duration-700 ease-in-out px-2 w-72 h-72"
          :src="image.url"
          alt=""
        />
      </div>
      <div
        class="flex justify-center flex-col text-gray-600 text-base md:text-lg font-sans font-semibold space-x-2 mb-2"
      >
        <span class="text-lg md:text-2xl font-bold mb-2 md:h-auto">{{ icecream.icecreamName }}</span> 
        <span class="">Price: {{ icecream.price }} Baht</span>
        <span class="">Brand: {{ icecream.brand.brandName }}</span>
      </div>

      <div class="p-2">
        <button
          class="btn btn-primary bg-gradient-to-r from-green-500 to-green-800 hover:from-blue-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="button "
          @click="toggleVisibility"
        >
          See More
        </button>

        <button
          class="ml-4 bg-gradient-to-r from-red-500 to-red-500 hover:from-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          @click="deleteList(icecream.icecreamId)"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  components: {},
  name: "BaseIcecream",
  props: ["icecream"],

  icecreams: Array,
  methods: {
    deleteList(icecreamId) {
      this.$emit("delete", icecreamId);
    },
    toggleVisibility() {
      this.$emit("icecream-popup", this.icecream);
    }, 
    
  }, async created() {
      this.image = await fetch(`${process.env.VUE_APP_ROOT_API}image`+"/"+ this.icecream.image)},
 watch :{
    icecream: async function icecreamImage(){
      this.image = await fetch(`${process.env.VUE_APP_ROOT_API}image/`+ this.icecream.image)},
    }
};
</script>
<style>
:hoverblog {
  background-color: #95dcf2;
}
</style>