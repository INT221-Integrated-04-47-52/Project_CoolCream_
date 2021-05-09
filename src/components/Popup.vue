<template>
  <div
    class="flex justify-center items-center absolute md:fixed z-0 md:z-50 inset-x-0 top-5 md:inset-0"
  >
    <!-- div card popup -->
    <div class="mx-16 w-screen h-auto p-5 bg-white rounded-3xl shadow-lg">
      <div class="cursor-pointer focus:ring transform transition duration-300 ease-out flex flex-row-reverse"
        @click="close">
        <span class="material-icons"> close </span>
      </div>

      <!-- Product image -->
      <div class="space-y-4 md:space-x-4 md:grid md:grid-cols-3">
        <div class=" mt-5 place-items-center md:mt-0 md:justify-self-center"
        >

 <div  v-if="isEdit">
          <label
            class="text-left block mt-4 text-blue-600 font-bold items-start"
            htmlFor="image">Image</label>
        <input type="file" class="w-80 mt-4 focus:outline-none" @change="uploadImg" />
        <img class="w-72 h-72 transform rounded-full hover:rotate-6 transition 
        duration-700 ease-in-out" :src="image.url" alt=""/>
     
      </div>
        <img v-else class="w-72 h-72 transform rounded-full hover:rotate-6 
        transition duration-700 ease-in-out " :src="image.url" alt=""/>
     
       
        </div>
         
        <div class="col-span-2 space-y-2">
          <div
            class="w-full block text-gray-800 py-2 font-bold items-start text-left space-y-4 mb-5"
          >
            <p class="text-black">
              Name :
              <input
                class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="text"
                placeholder="input your ice cream name.."
                v-if="isEdit"
                id="name"
                name="name"
                v-model="nameEnter"
              />
              <span v-else class="text-pink-500"> {{ icecream.icecreamName }} </span>
            </p>

            <p class="text-black">
              Price :
              <input
                class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="number"
                placeholder="input ice cream price.."
                v-if="isEdit"
                id="price"
                name="price"
                v-model="priceEnter"
              />
              <span v-else class="text-pink-500">{{ icecream.price }} </span>
            </p>

            <p class="text-black">
              description :
              <textarea
                class="shadow text-left justify-start appearance-none border h-24 rounded w-1/2 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="text"
                placeholder="input product description.."
                v-if="isEdit"
                id="description"
                name="description"
                v-model="descriptionEnter"
              />
              <span v-else class="text-pink-500">{{ icecream.description }}</span>
            </p>

            <p class="text-black">
              Brand :
              <select
                id="brand"
                name="brand"
                v-if="isEdit"
                v-model="brandEnter"
                class="shadow rounded w-48 h-7"  >
                <option v-for="brand in brandArray" :key="brand.brandId">
                  {{ brand.brandName }}
                </option>
              </select>
              <span v-else class="text-pink-500">{{ icecream.brand==undefined?"":icecream.brand.brandName}}</span>
            </p>

            <!--Size-->
            <div class="flex justify-start">
              <p class="text-black">Size :</p>
              <span v-if="isEdit">
                <div
                  class="mx-2 flex text-pink-400 flex flex-row md:grid md:grid-flow-col md:grid-cols-4 gap-2"
                >
                  <option
                    v-for="size in sizeArray"
                    value="siz.name"
                    id="size"
                    :key="size.sizeId"
                    name="size"
                    @click="selectSize(size.sizeType)"
                    :class="{
                      'bg-blue-800 text-white': sizeEnter.includes(size.sizeType),
                    }"
                    class="text-center w-16 border-blue-800 border-2 hover:bg-blue-800 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                  > {{ size.sizeType }}
                  </option>
                </div>
              </span> 
              <span v-else class="flex flex-row md:grid md:grid-flow-col text-center text-white font-bold  rounded">
                <span class="w-20 bg-blue-800  px-4 ml-4 mr-2 rounded "
                name="size">  {{ icecream.size==undefined?"":icecream.size.sizeType}} </span>
              </span>
            </div>
            <!--lastday-->
            <p class="text-black">
              Lastday of sale:
              <input
                class="shadow text-left justify-start appearance-none border rounded w-56 h-4 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="date"
                v-if="isEdit"
                id="lastday"
                name="lastday"
                v-model="lastdayEnter"
              />
              <span v-else class="text-pink-500">{{ icecream.lastday }} </span>
            </p>
            <!--Topping-->
            <div class="flex justify-start">
              <p class="text-black">Topping :</p>
              <span v-if="isEdit">
                <div
                  class="mx-2 flex text-blue-800 flex flex-row grid grid-flow-col grid-cols-2 grid-rows-4 md:grid md:grid-flow-col md:grid-cols-4 md:grid-rows-2 gap-2 "
>
                  <option
                    v-for="topping in toppingArray"
                    value="topping"
                    id="topping"
                    name="topping"
                    @click="selectTopping(topping)"
                    :class="{
                      'bg-blue-800 text-white': toppingEnter.map(t=>t.toppingName).includes(topping.toppingName),
                    }"
                    :key="topping.toppingId"
                    class="text-center w-32 border-blue-800 border-2 hover:bg-blue-800 hover:text-white font-bold py-0.5 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                  >
                    {{ topping.toppingName }}
                  </option>
                </div>
              </span>
                <span v-else class="flex flex-row md:grid md:grid-flow-col text-center text-white font-bold  rounded">
                  <span class="  bg-blue-800  px-4 ml-4 mr-2 rounded"
                  v-for="top in icecream.icecreamHasToppings"
                  value="topping"
                  id="topping"
                  :key="top.topping.toppingId"
                  name="topping"> {{ top.topping.toppingName}} </span>
                </span>
          </div>
         

          <div class="flex flex-row-reverse">
            <button
              v-if="isEdit"
              class="ml-4 justify-center btn btn-primary bg-gradient-to-b from-green-500 to-green-800 hover:from-blue-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button "
              @click.prevent="submit(icecream)"
            >  Save </button>

            <button
              v-if="!isEdit"
              class="justify-center btn btn-primary bg-gradient-to-b from-blue-500 to-blue-800 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button "
              @click="edit">
              Edit
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "",
      sizeArray: "",
      brand: "",
      brandArray: [],
      topping: "",
      toppingArray: [],
      nameEnter: "",
      priceEnter: "",
      descriptionEnter: "",
      sizeEnter: "",
      brandEnter: "",
      lastdayEnter: "",
      toppingEnter: [],
      isEdit: false,
      image:"",
      uploadImage:null
    
    };
  },
  props: ["icecream"],
  methods: {
    selectTopping(topping) {
      if ( this.toppingEnter.map(t=>t.toppingName).includes(topping.toppingName)) {
        this.toppingEnter = this.toppingEnter.filter((t) => t.toppingId !== topping.toppingId);
      } else {
        this.toppingEnter.push(topping);
      }
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image.url = event.target.result;
      };
      reader.readAsDataURL(file);
      this.imageFile = file;
    
    },
    selectSize(size) {
      if (this.sizeEnter.includes(size)) {
        this.sizeEnter = this.sizeEnter.filter((s) => s !== size);
      } else {
        this.sizeEnter.push(size);
      }
    },
    close() {
      this.$emit("close-popup", false);
      this.isEdit = false;
    },
    edit() {
      this.isEdit = true;
      this.nameEnter = this.icecream.icecreamName;
      this.priceEnter = this.icecream.price;
      this.descriptionEnter = this.icecream.description;
      this.sizeEnter = this.icecream.size.sizeType;
      this.brandEnter = this.icecream.brand.brandName;
      this.toppingEnter = this.icecream.icecreamHasToppings.map(t => t.topping);
      this.lastdayEnter = this.icecream.lastday;
    },
    submit(icecream) {
      if (this.isEdit) {
        this.$emit("icecream-submit", {
          image: icecream.image,
          name: this.nameEnter,
          price: this.priceEnter,
          description: this.descriptionEnter,
          size: this.sizeEnter,
          brand: this.brandEnter,
          lastday: this.lastdayEnter,
          topping: this.toppingEnter,
          id: icecream.icecreamId,
        });
        this.close();
      }
    },
    async fetchTopping() {
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}topping`);
      const data = await res.json();
      return data;
    },
    async fetchSize() {
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}size`);
      const data = await res.json();
      return data;
    },
    async fetchBrand() {
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}brand`);
      const data = await res.json();
      return data;

    },async fetchIcecreams() {
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}icecream`+"/"+ this.icecream.icecreamId);
      const data = await res.json();
      return data;
    },

  },
  async created() {
    this.sizeArray = await this.fetchSize();
    this.brandArray = await this.fetchBrand();
    this.toppingArray = await this.fetchTopping();
       }, 
   watch: {
       icecream: async function icecreamidCheck() {
                if (this.icecream.image != undefined) {
                    this.image = await fetch("http://localhost:6001/image/"+this.icecream.image);
                }
            }
        }
   
};
</script>