<template>
  <div
    class="bg-white hover:bg-blue-100 m-12 h-96 w-96 shadow-lg rounded-lg pb-4 ">
  <div class="flex flex-row">
      <div class="mr-11" v-for="top in toppingArray" :key="top.id">
        <img :src="top.toppingImage" alt="imagesTopping"/>
     
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
  return {
   top: "",
   toppingArray:""
  }
},
  components: {

  },
  name: "BlogTopping",
  method:{
    async fetchTopping() {
    const res = await fetch("http://localhost:6001/topping");
    const data = await res.json();
    return data;
  },

  },
async created() {
  this.toppingArray = await this.fetchTopping();
},
};
</script>
