<template>
  <div>
    <div class="bg-white text-left w-12/12 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="mb-4 w-full">
        <label
          class="block text-center text-black text-xl py-2 font-bold mb-2"
          for="priceaddress"
        >
          Add icecreams to store
        </label>
        <form @submit.prevent="submitSurvey">
          <div class="form-control">
            <label  class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
             for="name">Name</label>
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 
              text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 
              ease-in-out" type="text"
              placeholder="input your name.."
              id="name"
              name="name"
              v-model.trim="nameEnter"
        />
          
          </div>
       <div class="text-red-600">{{validator.name.error.message}}</div>

          <div class="form-control">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price">Price</label>
            <input
              class="mt-2 shadow text-left appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out invalid-feedback"
              type="number"
              id="price"
              name="price"
              v-model.trim="priceEnter"
          
              placeholder="Input your price.."/>
       
          </div>
          <div class="text-red-600">{{validator.price.error.message}}</div>
          <div class="form-control">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="description"
              >Description</label>
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your description.."
     
              id="description"
              name="description"
              v-model.trim="descriptionEnter"
           />

          </div>
          <div class="text-red-600">{{validator.description.error.message}}</div>
          <!-- Brand -->

          <div class="form-control">
            <label
              class="w-2/11 text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="brand"
              >Brand</label>

            <div>
              <select
                class="border-2 w-2/12 p-2 transform transition duration-300 ease-in-out"
                id="brand"
                name="banlist"
                
                v-model="brandEnter">
                <option :value="brand" v-for="brand in brandArray" :key="brand.brandId">
                  {{ brand.brandName }}
                </option>
              </select>
            </div>
            <div>{{brandEnter}}</div>

          </div>
          <div class="text-red-600">{{validator.brand.error.message}}</div>
          <!-- Size -->
          <div class="form-control">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                htmlFor="size">Size</label>
            </div>
            <div class="text-green-600 flex flex-row -mt-2">
             
              <option 
                v-for="size in sizeArray"
 
                @click="selectSize(size)"
                :class="{
                  'bg-green-400 text-white': sizeEnter==size,
                }"
                :key="size.id"
             
                class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer">
                {{ size.sizeType }}
              </option>
            </div>

            <div class="text-red-600">{{validator.size.error.message}}</div>
          </div>
          <!--Lastday-->
          <div class="form-control">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="lastday">Last day of sale</label>
            <input
              class="shadow text-left justify-start appearance-none border rounded w-2/12 p-3 text-gray-700 leading-tight focus:ring"
              type="date"
              id="lastday"
              name="lastday"
              v-model="lastdayEnter"/>
              <div class="text-red-600">{{validator.lastday.error.message}}</div>
          </div>
       
          <!-- Topping-->
          <div class="form-control">
            <div class="text-pink-400 flex flex-col -mt-2">
              <div>
                <label
                  class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                  htmlFor="size">Topping</label>
              </div>
              
              <div class="flex md:flex-row  ">
                <option v-for="topping in toppingArray"
                  value="topping"
                  id="topping"
                  name="toppinglist"
                  @click="selectTopping(topping)"
                  :class="{
                    'bg-pink-400 text-white': toppingEnter.map(t=>t.toppingId).includes( 
                       topping.toppingId
                    ),
                  }"
                  :key="topping.toppingId"
     
                  class="mr-2 text-center w-36 border-pink-400 mt-4 border-2 hover:bg-pink-400 hover:text-white font-bold py-0.5 px-auto rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                >
                  {{ topping.toppingName }}
                
                </option>
               
              </div>
              <div class="flex flex-row">
                <div class="mr-11" v-for="topping in toppingArray" :key="topping.toppingId">
                  <img :src="topping.toppingImage" alt="imagesTopping"/>
                </div>
              </div>

            </div>
          </div>
          <div class="text-red-600">{{validator.topping.error.message}}</div>
          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image">Image</label>

            <input type="file" class="w-80 mt-4 focus:outline-none" @change="uploadImg" />
          </div>
          <div class="text-red-600">{{validator.image.error.message}}</div>
          <div class="text-center">
            <button
              type="submit"
              class="mt-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
             >
              Submit
            </button>
            <p v-if="invalidInput" class="text-center text-red-600 m-5"
          >*** One or more input fields are invalid *** 
          <br>- Please check your provided data -</p>
          <p v-if="error">{{ error }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      imageName:"",
      invalidInput: false,
      error: null,
      ban: "",
      brandArray: "",
      siz: "",
      sizeArray: "",
      top: "",
      toppingArray: "",
      image: null,
      nameEnter: "",
      descriptionEnter:"",
      brandEnter:"",
      priceEnter: "",
      sizeEnter:"",
      lastdayEnter:"",
      toppingEnter:[],
      urlTopping:`${process.env.VUE_APP_ROOT_API}topping`,
      urlSize:`${process.env.VUE_APP_ROOT_API}size`,
      urlBrand:`${process.env.VUE_APP_ROOT_API}brand`,
      urlAddproduct:`${process.env.VUE_APP_ROOT_API}add`,
      urlDefault:`${process.env.VUE_APP_ROOT_API}`,
      
      validator:{
        name:{
          required: true,
          minLength:0,
          maxLength:15,
          error:{status:true, message:""}
        },
        description:{
          required: true,
          minLength:0,
          maxLength:200,
          error:{status:true, message:""}
        },
        brand:{
          required: true,
          error:{status:true, message:""}
        },
        price:{
          required: true,
          minLength:0,
          maxLength:5,
          error:{status:true, message:""}
        },
        size:{
          required: true,
          error:{status:true, message:""}
        },
        lastday:{
          required: true,
          error:{status:true, message:""}
        },
        topping:{
          required: true,
          error:{status:true, message:""}
        },
        image:{
          required: true,
          error:{status:true, message:""}
        },
      }
    }
  },

  methods: {    

    selectTopping(topping) {
      if (this.toppingEnter.includes(topping)) {
        this.toppingEnter = this.toppingEnter.filter(
          (t) => t !== topping
        );
      } else {
        this.toppingEnter.push(topping);
      }
    },
    selectSize(size) {
        this.sizeEnter = size;
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };

      reader.readAsDataURL(file);
      this.imageName=file.name;
    },    
    checkError(){
  if(this.nameEnter=== ""){
      this.validator.name.error.message = "***Please Input your name***";
  }
  if(this.nameEnter.length > this.validator.name.maxLength){
    this.validator.name.error.message = "***Please input name less than " 
    + this.validator.name.maxLength +"***"
  }
  if(this.descriptionEnter=== ""){
      this.validator.description.error.message = "***Please Input your description***"
  }  
  if(this.descriptionEnter.length < this.validator.description.minLength){
    this.validator.description.error.message = "***Plese input description more than " 
    + this.validator.description.minLength +"***"
  }
  if(this.descriptionEnter.length > this.validator.description.maxLength){
    this.validator.description.error.message = "***Plese input description less than " 
    + this.validator.description.maxLength +"***"
  }
  if(this.priceEnter === ""){
      this.validator.price.error.message = "***Please Input your price***"
  }  
  if(this.priceEnter.length < this.validator.price.minLength){
    this.validator.price.error.message = "***Plese input price more than " 
    + this.validator.price.minLength +"***"
  }
  if(this.priceEnter.length > this.validator.price.maxLength){
    this.validator.price.error.message = "***Plese input price less than " 
    + this.validator.price.maxLength +"***"
  }
  if(this.brandEnter=== ""){
      this.validator.brand.error.message = "***Please Input your brand***"
  }

  if(this.sizeEnter=== ""){
      this.validator.size.error.message = "***Please Input your size***"
  }  
  
  if(this.lastdayEnter=== ""){
      this.validator.lastday.error.message = "***Please Input your lastday***"
  }  
  
  if(this.toppingEnter=== ""){
      this.validator.topping.error.message = "***Please Input your topping***"
  }  
  if(this.imageName=== ""){
      this.validator.image.error.message = "***Please Add your image***"
  }  
  return  this.nameEnter==="" || this.descriptionEnter=== "" ||
  this.priceEnter=== "" ||
  this.brandEnter=== ""  ||
  this.sizeEnter=== "" ||
  this.toppingEnter=== [] ||
  this.lastdayEnter=== ""
    },

    submitSurvey() {
      /* */
      if (this.checkError()) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;   
      this.error = null;
      fetch(this.urlDefault+"/max-icecreamId" + 1, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: this.imageName,
          icecreamName : this.nameEnter,
          price: this.priceEnter,
          description: this.descriptionEnter,
          size: this.sizeEnter,
          brand: this.brandEnter,
          lastday: this.lastdayEnter,
          topping: this.toppingEnter,
          
        }),
      })
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error('Could not save data!');
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
          this.image = "Upload your image";
          this.nameEnter= "";
          this.priceEnter= "";
          this.descriptionEnter= "";
          this.sizeEnter= "";
          this.brandEnter= "";
           this.lastdayEnter= "";
           this.toppingEnter= [];
},
    async fetchSize() {
      const res = await fetch(this.urlSize);
      const data = await res.json();
      return data;
    },
    async fetchBrand() {
     
      const res = await fetch(this.urlBrand);
      const data = await res.json();
      return data;
    },
    async fetchTopping() {
      const res = await fetch(this.urlTopping);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.sizeArray = await this.fetchSize();
    this.brandArray = await this.fetchBrand();
    this.toppingArray = await this.fetchTopping();
  },
};
</script>
<style>
#login-logo {
  width: 100%;
  height: 200px;
  object-fit: scale-down;
}
.card {
  max-width: 450px;
}
</style>
