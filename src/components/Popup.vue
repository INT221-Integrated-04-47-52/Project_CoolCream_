<template>
    <div
    class=" flex justify-center items-center fixed z-50 inset-0 overflow-y-auto">
    <div class="w-11/12 h-5/12 bg-white rounded-3xl shadow-lg ">
      <div class="cursor-pointer mt-4  mr-8  focus:ring transform transition hover:scale-105 
      duration-300 ease-out  mr-4 flex flex-row-reverse   " @click="close">
        <span class="material-icons  ">
          close
          </span>
      </div>
      <img
        class=" ml-2 w-72 h-72 transform -rotate-6 transition 
  hover:scale-105 duration-700 ease-in-out hover:rotate-6" :src="icecream.image"
      />
 
      <div class="w-96 flex flex-row-reverse ml-64 text-left">
    
         
    
        <div
          class=" w-96 ml-12 -mt-72  mr-16  ext-left block text-gray-800 
            py-2 font-bold mt-2 items-start" >
       
          <p class="my-2 text-black">
            Name : <input class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="text" placeholder="input your name.." 
             v-if="isEdit"
              id="name" 
              name="name" v-model="nameEnter"
            />
            <span v-else class="text-pink-500"> {{ icecream.name }} </span>
          </p>

          <p class="my-2 text-black ">
            E-mail : <input class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="text" placeholder="input your name.." 
            v-if="isEdit"
             id="price" 
             name="price" v-model="priceEnter"
           />
           <span  v-else class=" text-pink-500">{{ icecream.price }} </span>
          </p>

          <p class="my-2 text-black">
            Describe :
            <textarea class="shadow text-left justify-start appearance-none border h-24 rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="text" placeholder="input your name.." 
            v-if="isEdit"
             id="describe" 
             name="describe" v-model="describeEnter"
           />
           <span  v-else class=" text-pink-500">{{
              icecream.describe
            }}</span>
          </p>  
        
          <p class="my-2 text-black ">
            Brand :
            <select id="brand" name="brand" v-if="isEdit" v-model="brandEnter">
              <option v-for="ban in brandArray" :key="ban.id" >
                {{ban.name}}
             </option>
            </select>
           <span  v-else class=" text-pink-500">{{
              icecream.brand
            }}</span>
          </p>
<!--Size-->
          <p class="my-2 text-black ">
            Size :</p>
            <span v-if="isEdit">
              <div class="text-pink-400 flex flex-row -mt-2 ">
              <option v-for="siz in sizeArray" value="siz.name" id="size" name="size" 
              @click="selectSize(siz.name)"   
               :class="{  'bg-blue-800 text-white': 
               sizeEnter.includes(siz.name)}" :key="siz.id"  
               class="mr-2 text-center w-16 border-blue-800 mt-4 border-2 hover:bg-blue-800 
               hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition
                hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer">
               {{siz.name}}
               </option> 
              </div>
          </span>
           <span  v-else class=" text-pink-500">{{
              icecream.size
            }}</span>
 <!--Topping-->
 <div class="flex justify-start h-5/12 w-11/12 h-7/8">
            <p class="my-2 text-black ">
              Topping :</p>
              <span v-if="isEdit">
                <div class="text-blue-800 flex flex-row-wrap -mt-2 ">
                  <div class="w-8">
                <option v-for="top in toppingArray" value="top.name" id="topping" name="topping" 
                @click="selectTopping(top.name)"   
                 :class="{'bg-blue-800 text-white': 
                 toppingEnter.includes(top.name)}" :key="top.id"  
                 class="mr-2  text-center w-32 border-blue-800 mt-4 border-2 hover:bg-blue-800 
                 hover:text-white font-bold py-0.5  rounded focus:ring transform transition
                  hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer">
                 {{top.name}}
                 </option> 
                </div>
                </div>
            </span>
             <span v-else class=" text-pink-500">{{
                icecream.topping
              }}</span>
          
        </div>
      </div>
    </div>
      <div class=" flex flex-row-reverse mr-4">
        <button
          class="justify-center btn btn-primary mt-2 bg-gradient-to-b from-green-500 
    to-green-800 hover:from-blue-500 hover:to-green-500 text-white font-bold 
    py-2 px-4 rounded focus:ring transform transition hover:scale-105 
    duration-300 ease-in-out "
          type="button "
          @click.prevent="submit(icecream)">
          Submit
        </button>
        <button
          class="mx-4 justify-center btn btn-primary mt-2 bg-gradient-to-b from-blue-500 
  to-blue-800 hover:from-pink-500 hover:to-blue-500 text-white font-bold 
  py-2 px-4 rounded focus:ring transform transition hover:scale-105 
  duration-300 ease-in-out "
          type="button " 
          @click="edit"> Edit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {   
     data() {
    return {
      siz: "",
      sizeArray: [],
      ban: "",
      brandArray: [],
      top: "",
      toppingArray:[],
      nameEnter: "",
      priceEnter: "",
      describeEnter: "",
      sizeEnter: "",
      brandEnter: "",
      toppingEnter:"",
      isEdit: false
      
    };
  },
        props: ["icecream"],
        methods: {
   selectTopping(topping) {
      if (this.toppingEnter.includes(topping)) {
        this.toppingEnter = this.toppingEnter.filter(
        (t) => t !== topping);
      } else {
        this.toppingEnter.push(topping);
      }
    },
     selectSize(size) {
      if (this.sizeEnter.includes(size)) {
        this.sizeEnter = this.sizeEnter.filter(
          (s) => s !== size
        );
      } else {
        this.sizeEnter.push(size);
      }
    },
           close(){

            this.$emit("close-popup", false);
            this.isEdit = false;

           },
           edit(){
             this.isEdit = true;
             this.nameEnter = this.icecream.name ;
             this.priceEnter = this.icecream.price;
             this.describeEnter = this.icecream.describe;
             this.sizeEnter = this.icecream.size;
             this.brandEnter = this.icecream.brand;
             this.toppingEnter = this.icecream.topping;
           },
           submit(icecream){
               if(this.isEdit){ 
               this.$emit("icecream-submit", { 
                image: icecream.image,
                name:  this.nameEnter ,
                price:    this.priceEnter ,
                describe:    this.describeEnter,
                size: this.sizeEnter,
                brand: this.brandEnter,
                topping: this.toppingEnter,
                id: icecream.id });
               this.close();
              } 

           },
      async fetchTopping() {
      const res = await fetch('http://localhost:5001/topping') 
      const data = await res.json() 
      return data
    },
      async fetchSize() {
      const res = await fetch('http://localhost:5001/size') 
      const data = await res.json() 
      return data
    }, async fetchBrand() {
      const res = await fetch('http://localhost:5001/brand') 
      const data = await res.json() 
      return data
    }
        } ,
       async created() {
      this.sizeArray = await this.fetchSize();
      this.brandArray = await this.fetchBrand(); 
      this.toppingArray = await this.fetchTopping(); 
      
  },
    }

    </script>