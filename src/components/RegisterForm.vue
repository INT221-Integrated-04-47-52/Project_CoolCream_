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
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              for="name"
              >Name</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your name.."
              id="name"
              name="name"
              v-model.trim="icecream.nameEnter"
            />
          </div>
          <div class="text-red-600">{{ validator.name.error.message }}</div>

          <div class="form-control">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price"
              >Price</label
            >
            <input
              class="mt-2 shadow text-left appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out invalid-feedback"
              type="number" step="0.01"
              id="price"
              name="price"
              v-model.trim="icecream.priceEnter"
              placeholder="Input your price.."
            />
          </div>
          <div class="text-red-600">{{ validator.price.error.message }}</div>
          <div class="form-control">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="description"
              >Description</label
            >
            <textarea
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your description.."
              id="description"
              name="description"
              v-model.trim="icecream.descriptionEnter"
            />
          </div>
          <div class="text-red-600">{{ validator.description.error.message }}</div>
          <!-- Brand -->

          <div class="form-control">
            <label
              class="w-2/11 text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="brand"
              >Brand</label
            >

            <div>
              <select
                class="border-2 w-2/12 p-2 transform transition duration-300 ease-in-out"
                id="brand"
                name="banlist"
                v-model="icecream.brandEnter"
              >
                <option :value="brand" v-for="brand in brandArray" :key="brand.brandId">
                  {{ brand.brandName }}
                </option>
              </select>
            </div>
            <div>{{ icecream.brandEnter }}</div>
          </div>
          <div class="text-red-600">{{ validator.brand.error.message }}</div>
          <!-- Size -->
          <div class="form-control">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label
                class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                htmlFor="size"
                >Size</label
              >
            </div>
            <div class="text-green-600 flex flex-row -mt-2">
              <option
                v-for="size in sizeArray"
                @click="selectSize(size)"
                :class="{
                  'bg-green-400 text-white': icecream.sizeEnter == size,
                }"
                :key="size.id"
                class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                {{ size.sizeType }}
              </option>
            </div>

            <div class="text-red-600">{{ validator.size.error.message }}</div>
          </div>
          <!--Lastday-->
          <div class="form-control">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="lastday"
              >Last day of sale</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-2/12 p-3 text-gray-700 leading-tight focus:ring"
              type="date"
              id="lastday"
              name="lastday"
              v-model="icecream.lastdayEnter"
            />
            <div class="text-red-600">{{ validator.lastday.error.message }}</div>
          </div>

          <!-- Topping-->
          <div class="form-control">
            <div class="text-pink-400 flex flex-col -mt-2">
              <div>
                <label
                  class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                  htmlFor="size"
                  >Topping</label
                >
              </div>

              <div class="flex md:flex-row">
                <option
                  v-for="topping in toppingArray"
                  value="topping"
                  id="topping"
                  name="toppinglist"
                  @click="selectTopping(topping)"
                  :class="{
                    'bg-pink-400 text-white': icecream.toppingEnter
                      .map((t) => t.toppingId)
                      .includes(topping.toppingId),
                  }"
                  :key="topping.toppingId"
                  class="mr-2 text-center w-36 border-pink-400 mt-4 border-2 hover:bg-pink-400 hover:text-white font-bold py-0.5 px-auto rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                >
                  {{ topping.toppingName }}
                </option>
              </div>
              <div class="flex flex-row">
                <div
                  class="mr-11"
                  v-for="topping in toppingArray"
                  :key="topping.toppingId"
                >
                  <img :src="topping.toppingImage" alt="imagesTopping" />
                </div>
              </div>
              <div>{{ this.icecream.toppingEnter }}</div>
            </div>
          </div>
          <div class="text-red-600">{{ validator.topping.error.message }}</div>
          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image"
              >Image</label
            >

            <input type="file" class="w-80 mt-4 focus:outline-none" @change="uploadImg" />
            <img class="m-8" alt="" :src="image.url" />
          </div>
          <div class="text-red-600">{{ validator.image.error.message }}</div>
          <div class="text-center">
            <button
              type="submit"
              class="mt-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
            >
              Submit
            </button>
            <p v-if="invalidInput" class="text-center text-red-600 m-5">
              *** One or more input fields are invalid *** <br />- Please check your
              provided data -
            </p>
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
      imageFile: null,
      imageName: "",
      invalidInput: false,
      error: null,
      ban: "",
      brandArray: "",
      siz: "",
      image: { url: "" },
      sizeArray: "",
      top: "",
      toppingArray: "",
      icecream: {
        icecreamId: 0,
        nameEnter: "",
        priceEnter: "",
        descriptionEnter: "",
        brandEnter: "",
        sizeEnter: "",
        lastdayEnter: "",
        toppingEnter: [],
        image: null,
        icecreamHasTopping: [],
      },
      urlTopping: "http://localhost:6001/topping",
      urlSize: "http://localhost:6001/size",
      urlBrand: "http://localhost:6001/brand",
      urlAddproduct: "http://localhost:6001/product",
      urlDefault: "http://localhost:6001/",
      validator: {
        name: {
          required: true,
          minLength: 0,
          maxLength: 150,
          error: { status: true, message: "" },
        },
        description: {
          required: true,
          minLength: 0,
          maxLength: 200,
          error: { status: true, message: "" },
        },
        brand: {
          required: true,
          error: { status: true, message: "" },
        },
        price: {
          required: true,
          minLength: 0,
          maxLength: 5,
          error: { status: true, message: "" },
        },
        size: {
          required: true,
          error: { status: true, message: "" },
        },
        lastday: {
          required: true,
          error: { status: true, message: "" },
        },
        topping: {
          required: true,
          error: { status: true, message: "" },
        },
        image: {
          required: true,
          error: { status: true, message: "" },
        },
      },
    };
  },

  methods: {
    selectTopping(topping) {
      if (this.icecream.toppingEnter.includes(topping)) {
        this.icecream.toppingEnter = this.icecream.toppingEnter.filter(
          (t) => t !== topping
        );
      } else {
        this.icecream.toppingEnter.push(topping);
      }
    },
    selectSize(size) {
      this.icecream.sizeEnter = size;
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image.url = event.target.result;
      };
      reader.readAsDataURL(file);
      this.icecream.image = file.name;
      this.imageFile = file;
    },
    checkError() {
      if (this.icecream.nameEnter === "") {
        this.validator.name.error.message = "***Please Input your name***";
      }
      if (this.icecream.nameEnter.length > this.validator.name.maxLength) {
        this.validator.name.error.message =
          "***Please input name less than " + this.validator.name.maxLength + "***";
      }
      if (this.icecream.descriptionEnter === "") {
        this.validator.description.error.message = "***Please Input your description***";
      }
      if (this.icecream.descriptionEnter.length < this.validator.description.minLength) {
        this.validator.description.error.message =
          "***Plese input description more than " +
          this.validator.description.minLength +
          "***";
      }
      if (this.icecream.descriptionEnter.length > this.validator.description.maxLength) {
        this.validator.description.error.message =
          "***Plese input description less than " +
          this.validator.description.maxLength +
          "***";
      }
      if (this.icecream.priceEnter === "") {
        this.validator.price.error.message = "***Please Input your price***";
      }
      if (this.icecream.priceEnter.length < this.validator.price.minLength) {
        this.validator.price.error.message =
          "***Plese input price more than " + this.validator.price.minLength + "***";
      }
      if (this.icecream.priceEnter.length > this.validator.price.maxLength) {
        this.validator.price.error.message =
          "***Plese input price less than " + this.validator.price.maxLength + "***";
      }
      if (this.icecream.brandEnter === "") {
        this.validator.brand.error.message = "***Please Input your brand***";
      }

      if (this.icecream.sizeEnter === "") {
        this.validator.size.error.message = "***Please Input your size***";
      }

      if (this.icecream.lastdayEnter === "") {
        this.validator.lastday.error.message = "***Please Input your lastday***";
      }

      if (this.icecream.toppingEnter === "") {
        this.validator.topping.error.message = "***Please Input your topping***";
      }
      if (this.icecream.image === "") {
        this.validator.image.error.message = "***Please Add your image***";
      }
      return (
        this.icecream.nameEnter === "" ||
        this.icecream.descriptionEnter === "" ||
        this.icecream.priceEnter === "" ||
        this.icecream.brandEnter === "" ||
        this.icecream.sizeEnter === "" ||
        this.icecream.toppingEnter === [] ||
        this.icecream.lastdayEnter === ""
      );
    },

  /*  async submitSurvey() {
      if (this.checkError()) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      this.icecream.icecreamId = (await (await fetch("http://localhost:6001/max-icecreamId")).json()) + 1;
      for (let i = 0; i < this.icecream.toppingEnter.length; i++) {
        let hasToppingId =
          (await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json()) +
          1 +
          i;
        this.icecream.icecreamHasTopping.push({
          hasToppingId: hasToppingId,
          topping: this.icecream.toppingEnter[i],
        });
      }
      let iceProduct = {
        icecreamId: this.icecream.icecreamId,
        image: this.icecream.image,
        icecreamName: this.icecream.nameEnter,
        price: this.icecream.priceEnter,
        description: this.icecream.descriptionEnter,
        size: this.icecream.sizeEnter,
        brand: this.icecream.brandEnter,
        lastday: this.icecream.lastdayEnter,
        icecreamHasToppings: this.icecream.icecreamHasTopping,
      };
      let jsonIcecream = await JSON.stringify(iceProduct);
      const blob = await new Blob([jsonIcecream], {
        type: "application/json",
      });
      let formData = new FormData();
      formData.append("file", this.imageFile, this.icecream.image);
      await formData.append("newIcecream", blob);
      await fetch("http://localhost:6001/add/"+this.iceccream.icecreamId, {  headers: {
          "Content-type": "application/json",
        },method: "POST", body: jsonIcecream });

      fetch("http://localhost:6001/add/image"+ this.icecream.icecreamId, {
        method: "POST",
       
        body: formData,
      });
      console.log("dfsrsfdsv" + jsonIcecream);
      console.log("fdaffd" + formData);
      formData.append("file", this.imageFile, this.icecream.image);

      console.log(formData);
    } /*},*/
   
    async submitSurvey() {
      if (this.checkError()) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      this.icecream.icecreamId =
        (await (await fetch("http://localhost:6001/max-icecreamId")).json()) + 1;
      for (let i = 0; i < this.icecream.toppingEnter.length; i++) {
        let hasToppingId =
          (await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json()) +
          1 +
          i;
        this.icecream.icecreamHasTopping.push({
          hasToppingId: hasToppingId,
          topping: this.icecream.toppingEnter[i],
        });
      }
      let iceProduct = {
        icecreamId: this.icecream.icecreamId,
        icecreamName: this.icecream.nameEnter,
        price: this.icecream.priceEnter,
        description: this.icecream.descriptionEnter,
        size: this.icecream.sizeEnter,
        brand: this.icecream.brandEnter,
        lastday: this.icecream.lastdayEnter,
        icecreamHasToppings: this.icecream.icecreamHasTopping,
        image: this.icecream.image,
      };
      let jsonIcecream = await JSON.stringify(iceProduct);
      console.log(jsonIcecream);
      const blob = await new Blob([jsonIcecream], {
      type: "application/json",
    });
      let formData = new FormData();
      formData.append("image", this.imageFile, this.icecream.image);
      await formData.append("newIcecream", blob);
      await fetch("http://localhost:6001/add/image/", {
        method: "POST",
        body: formData,
      });
     
      alert("🦄🦋 - Add data success - 💖🔆");
       this.icecream.icecreamId =="";
      this.icecream.nameEnter=="";
       this.icecream.priceEnter=="";
        this.icecream.descriptionEnter=="";
         this.icecream.sizeEnter=="";
        this.icecream.brandEnter=="";
         this.icecream.lastdayEnter=="";
        this.icecream.icecreamHasTopping=="";
        this.icecream.image=="";
    } ,
    /*.then((response) => {
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
          this.imageFile= null;
          this.icecream.nameEnter= "";
          this.icecream.priceEnter= "";
          this.icecream.descriptionEnter= "";
          this.icecream.sizeEnter= "";
          this.icecream.brandEnter= "";
           this.icecream.lastdayEnter= "";
           this.icecream.toppingEnter= [];*/
    /*   async submitSurvey() {
    
    if (this.checkError()) {
      this.invalidInput = true;
      return;
    }
    this.invalidInput = false;
    this.error = null;
    this.icecream.icecreamId =
      (await (await fetch("http://localhost:6001/max-icecreamId")).json()) + 1;
    for (let i = 0; i < this.icecream.toppingEnter.length; i++) {
      let hasToppingId =
        (await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json()) +
        1 +
        i;
      this.icecream.icecreamHasTopping.push({
        hasToppingId: hasToppingId,
        topping: this.icecream.toppingEnter[i],
      });
    }
    let iceProduct = {
      icecreamId: this.icecream.icecreamId,
      image: this.icecream.image,
      icecreamName: this.icecream.nameEnter,
      price: this.icecream.priceEnter,
      description: this.icecream.descriptionEnter,
      size: this.icecream.sizeEnter,
      brand: this.icecream.brandEnter,
      lastday: this.icecream.lastdayEnter,
      icecreamHasToppings: this.icecream.icecreamHasTopping,
    };
    const jsonIcecream = await JSON.stringify(iceProduct);
    const blob = await new Blob([jsonIcecream], {
      type: "application/json",
    });
    let formData = new FormData();
    formData.append("file", this.imageFile, this.icecream.image);
    await formData.append("newIcecream", blob);
    console.log(formData)
    await fetch("http://localhost:6001/add/image", { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          // ...
        } else {
          throw new Error("Could not save data!");
        }
      })
      .catch((error) => {
        console.log(error);
        this.error = error.message;
      });
    this.image = "Upload your image";
    this.nameEnter = "";
    this.priceEnter = "";
    this.descriptionEnter = "";
    this.sizeEnter = "";
    this.brandEnter = "";
    this.lastdayEnter = "";
    this.toppingEnter = [];
  }, /*} อันนี้ของคามิน*/
    /* 
    async submitSurvey() {
    
      if (this.checkError()) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      this.icecream.icecreamId =
        (await (await fetch("http://localhost:6001/max-icecreamId")).json()) + 1;
      for (let i = 0; i < this.icecream.toppingEnter.length; i++) {
        let hasToppingId =
          (await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json()) +
          1 +
          i;
        this.icecream.icecreamHasTopping.push({
          hasToppingId: hasToppingId,
          topping: this.icecream.toppingEnter[i],
        });
      }
      let iceProduct = {
        icecreamId: this.icecream.icecreamId,
        image: this.icecream.image,
        icecreamName: this.icecream.nameEnter,
        price: this.icecream.priceEnter,
        description: this.icecream.descriptionEnter,
        size: this.icecream.sizeEnter,
        brand: this.icecream.brandEnter,
        lastday: this.icecream.lastdayEnter,
        icecreamHasToppings: this.icecream.icecreamHasTopping,
      };
      let jsonIcecream = await JSON.stringify(iceProduct);
      const blob = await new Blob([jsonIcecream], {
        type: "application/json",
      });
      let formData = new FormData();
      formData.append("file", this.imageFile, this.icecream.image);
      await formData.append("newIcecream", blob);
      await fetch("http://localhost:6001/add/image", { method: "POST", body: formData })
    },*/
    /*  fetch("http://localhost:6001/add/image", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonIcecream,
     
      });
      console.log("dfsrsfdsv"+jsonIcecream)
   
      console.log("fdaffd"+formData)
     
      let formData = new FormData();
      formData.append("file", this.imageFile, this.icecream.image);
      
      console.log(formData)
   
    } ,/*},
   
  
     async submitSurvey() {
    
      if (this.checkError()) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      this.icecream.icecreamId =
        (await (await fetch("http://localhost:6001/max-icecreamId")).json()) + 1;
      for (let i = 0; i < this.icecream.toppingEnter.length; i++) {
        let hasToppingId =
          (await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json()) +
          1 +
          i;
        this.icecream.icecreamHasTopping.push({
          hasToppingId: hasToppingId,
          topping: this.icecream.toppingEnter[i],
        });
      }
      let iceProduct = {
        icecreamId: this.icecream.icecreamId,
        image: this.icecream.image,
        icecreamName: this.icecream.nameEnter,
        price: this.icecream.priceEnter,
        description: this.icecream.descriptionEnter,
        size: this.icecream.sizeEnter,
        brand: this.icecream.brandEnter,
        lastday: this.icecream.lastdayEnter,
        icecreamHasToppings: this.icecream.icecreamHasTopping,
      };
      const jsonIcecream = await JSON.stringify(iceProduct);
      const blob = await new Blob([jsonIcecream], {
        type: "application/json",
      });
      let formData = new FormData();
      formData.append("file", this.imageFile, this.icecream.image);
      await formData.append("newIcecream", blob);
      console.log(formData)
      await fetch("http://localhost:6001/add/image", { method: "POST", body: formData })
  
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error("Could not save data!");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
      this.image = "Upload your image";
      this.nameEnter = "";
      this.priceEnter = "";
      this.descriptionEnter = "";
      this.sizeEnter = "";
      this.brandEnter = "";
      this.lastdayEnter = "";
      this.toppingEnter = [];
    }, /*},,
    /*async submitSurvey() {
     
      if (this.checkError()) {
        this.invalidInput = true;
        return;}
      this.invalidInput = false;
      this.error = null;
      this.icecream.icecreamId = await (await fetch("http://localhost:6001/max-icecreamId")).json() + 1;
      for(let i =0;i< this.icecream.toppingEnter.length; i++ ){
       let hasToppingId = await (await fetch("http://localhost:6001/max-icecreamHasToppingId")).json() + 1 +i;
        this.icecream.icecreamHasTopping.push({hasToppingId: hasToppingId,topping: this.icecream.toppingEnter[i]})
      }
      let iceProduct = {
          icecreamId: this.icecream.icecreamId,
          image: this.icecream.image,
          icecreamName : this.icecream.nameEnter,
          price: this.icecream.priceEnter,
          description: this.icecream.descriptionEnter,
          size: this.icecream.sizeEnter,
          brand: this.icecream.brandEnter,
          lastday: this.icecream.lastdayEnter,
          icecreamHasToppings: this.icecream.icecreamHasTopping
    }
    console.log(iceProduct)
    const jsonIcecream = await JSON.stringify(iceProduct);
      const blob = await new Blob([jsonIcecream], {
        type: "application/json",
      });
      let formData = new FormData();
      formData.append("file", this.imageFile,this.icecream.image);
      await formData.append("newIcecream", blob);
      
   try{const res =  await fetch("http://localhost:6001/add/image", {
        method: 'POST',
        body: formData
      })
        const data = await res.json()
        if(data.error){
          this.icecream.image =  null;
          this.icecream.nameEnter= "";
          this.icecream.priceEnter= "";
          this.icecream.descriptionEnter= "";
          this.icecream.sizeEnter= "";
          this.icecream.brandEnter= "";
          this.icecream.lastdayEnter= "";
          this.icecream.icecreamHasTopping= "";
        }
      }
        catch (error) {
       console.log(`Could not save! ${error}`)
     }
       /*
        fetch(("http://localhost:6001/add"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          icecreamId: this.icecream.icecreamId,
          image: this.icecream.image,
          icecreamName : this.icecream.nameEnter,
          price: this.icecream.priceEnter,
          description: this.icecream.descriptionEnter,
          size: this.icecream.sizeEnter,
          brand: this.icecream.brandEnter,
          lastday: this.icecream.lastdayEnter,
          topping: this.icecream.toppingEnter,
        
        }) ,*/
    /* }).then((response) => {
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
          this.imageFile= null;
          this.icecream.nameEnter= "";
          this.icecream.priceEnter= "";
          this.icecream.descriptionEnter= "";
          this.icecream.sizeEnter= "";
          this.icecream.brandEnter= "";
           this.icecream.lastdayEnter= "";
           this.icecream.toppingEnter= [];
    /*  const data = await res.json();
      if (data) {
        //...
      } else {
        throw new Error("Could not save data!");
      }
    */ async fetchSize() {
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
