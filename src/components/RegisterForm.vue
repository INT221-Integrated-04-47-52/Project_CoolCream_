<template>
  <div>
    <div class="bg-white text-left w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
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
       

          <div class="form-control">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price">price</label>
            <input
              class="mt-2 shadow text-left appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out invalid-feedback"
              type="price"
             
              id="price"
              name="price"
              v-model.trim="priceEnter"
          
              placeholder="Input your price.."/>
       
          </div>
          <div class="form-control">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="describe"
              >Describe</label>
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your describe.."
     
              id="describe"
              name="describe"
              v-model.trim="describeEnter"
           />

          </div>
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
                <option v-for="ban in brandArray" :key="ban.id">
                  {{ ban.brandName }}
                </option>
              </select>
            </div>
            <div>{{brandEnter}}</div>

          </div>

          <!-- Size -->
          <div class="form-control">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label
                class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                htmlFor="size">Size</label>
            </div>
            <div class="text-green-600 flex flex-row -mt-2">
             
              <option 
                v-for="siz in sizeArray"
 
                @click="selectSize(siz)"
                :class="{
                  'bg-green-400 text-white': sizeEnter==siz,
                }"
                :key="siz.id"
             
                class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                {{ siz.sizeType }}
              </option>
          
{{sizeEnter}}
            </div>


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
              v-model="lastdayEnter"
           />

          </div>
          <!-- Topping-->
          <div class="form-control">
            <div class="text-pink-400 flex flex-col -mt-2">
              <div>
                <label
                  class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                  htmlFor="size">Topping</label>
              </div>
              <div class="flex flex-row">
                <option v-for="top in toppingArray"
                  value="top.toppingName"
                  id="topping"
                  name="toppinglist"
                  @click="selectTopping(top.toppingName)"
                  :class="{
                    'bg-pink-400 text-white': toppingEnter.includes(
                      top.toppingName
                    ),
                  }"
                  :key="top.id"
     
                  class="mr-2 text-center w-36 border-pink-400 mt-4 border-2 hover:bg-pink-400 hover:text-white font-bold py-0.5 px-auto rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                >
                  {{ top.toppingName }}
                </option>
              </div>
              <div class="flex flex-row">
                <div class="mr-11" v-for="top in toppingArray" :key="top.id">
                  <img :src="top.toppingImage" alt="imagesTopping"/>
                </div>
              </div>
              {{toppingEnter}}
            </div>
          </div>

          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image">Image</label>

            <input type="file" class="w-80 mt-4 focus:outline-none" @change="uploadImg" />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="mt-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
             >
              Submit
            </button>
            <p
            v-if="invalidInput" class="text-center text-red-600 m-5"
          >*** One or more input fields are invalid *** <br>- Please check your provided data -</p>
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
      describeEnter:"",
      brandEnter:"",
      priceEnter:"",
      sizeEnter:"",
      lastdayEnter:"",
      toppingEnter:[],
    };
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
    },
    submitSurvey() {
      if (this.nameEnter=== "" || this.describeEnter=== "" || this.priceEnter=== "" ||
      this.brandEnter=== "" || this.sizeEnter=== [] || this.toppingEnter=== [] ||
      this.lastdayEnter=== "" 
       ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;   
      this.error = null;
      fetch('http://localhost:5001/icecreams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: this.image,
          name: this.nameEnter,
          price: this.priceEnter,
          describe: this.describeEnter,
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
        this.image = "";
          this.nameEnter= "";
          this.priceEnter= "";
          this.describeEnter= "";
          this.sizeEnter= [];
          this.brandEnter= "";
           this.lastdayEnter= "";
           this.toppingEnter= [];
},
    async fetchSize() {
      const res = await fetch("http://localhost:6001/size");
      const data = await res.json();
      return data;
    },
    async fetchBrand() {
      const res = await fetch("http://localhost:6001/brand");
      const data = await res.json();
      return data;
    },
    async fetchTopping() {
      const res = await fetch("http://localhost:6001/topping");
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
