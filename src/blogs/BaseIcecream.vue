<template>
  <div
    class="bg-white hover:bg-yellow-100 m-12 h-5/6 w-96 shadow-lg rounded-lg pb-4 "
  ><div class="mt-4 rounded-lg ">
    <img
      class="ml-12 py-4 transform rounded-full hover:rotate-6 transition duration-700 ease-in-out px-2 w-72 h-72"
      :src="image.url" alt=""/></div>

    <span
      class="text-gray-600 font-sans text-xl
  py-2 font-bold mb-2 "
      >{{ icecream.icecreamName }}</span>
      <span
      class="text-gray-600 font-sans text-xl
  py-2 font-bold mb-2 "
      ><br>{{ icecream.price }} Baht</span>
      <span
      class="text-gray-600 font-sans text-xl
  py-2 font-bold mb-2 "
      ><br>{{ icecream.brand.brandName }}</span>
    <br />
    <div class="">
     
    <button class=" btn btn-primary mt-2 bg-gradient-to-r from-green-500 
  to-green-800 hover:from-blue-500 hover:to-pink-500 text-white font-bold 
  py-2 px-4 rounded focus:ring transform transition hover:scale-105 
  duration-300 ease-in-out"
      type="button "
      @click="toggleVisibility">
      See More
    </button>
  
    <button
      class="mt-2 ml-4 bg-gradient-to-r from-red-500 to-red-500 hover:from-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
      @click="deleteList(icecream.icecreamId)"
      type="button"
    >
      Delete
    </button>

  </div>
</div>
</template>
<script>

export default {
  data(){
    return {
      image:""
    }
  },
  components: {

  },
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
  :hoverblog{
    background-color: #95DCF2;
  }
</style>