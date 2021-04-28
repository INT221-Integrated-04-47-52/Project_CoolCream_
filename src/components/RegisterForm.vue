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

        <form @submit="onFormSubmit">
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="name"
            >
              name</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your name.."
              :class="getInputClass('name')"
              id="name"
              name="name"
              v-model="formElements.name.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("name") }}
            </div>
          </div>

          <div class="form-group">
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="price"
              >price</label
            >
            <input
              class="mt-2 shadow text-left appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out invalid-feedback"
              type="price"
              :class="getInputClass('price')"
              id="price"
              name="price"
              v-model="formElements.price.value"
              @keyup="onFormChange($event)"
              placeholder="Input your price.."
            />
            <div>
              {{ getErrorMessage("price") }}
            </div>
          </div>
          <div class="form-group">
            <label
              class="text-left block text-blue-600 py-2 font-bold mt-2 items-start"
              htmlFor="describe"
              >Describe</label
            >
            <input
              class="shadow text-left justify-start appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="text"
              placeholder="input your describe.."
              :class="getInputClass('describe')"
              id="describe"
              name="describe"
              v-model="formElements.describe.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("describe") }}
            </div>
          </div>
          <!-- Brand -->

          <div class="form-group">
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
                v-model="formElements.brand.value"
                :class="getInputClass('brand')"
                @change="sendBrand()"
              >
                <option v-for="ban in brandArray" :key="ban.id">
                  {{ ban.name }}
                </option>
              </select>
            </div>
            <div></div>
            <div class="invalid-feedback">
              {{ getErrorMessage("brand") }}
            </div>
          </div>

          <!-- Size -->
          <div class="form-group">
            <div class="text-blue-600 flex flex-row -mt-2">
              <label
                class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                htmlFor="size"
                >Size</label
              >
            </div>
            <div class="text-green-600 flex flex-row -mt-2">
              <option
                v-for="siz in sizeArray"
                value="siz.name"
                id="size"
                name="sizelist"
                @click="selectSize(siz.name)"
                :class="{
                  'bg-green-400 text-white': formElements.size.value.includes(siz.name),
                }"
                :key="siz.id"
                @keyup="onFormChange($event)"
                class="mr-2 text-center w-16 border-green-400 mt-4 border-2 hover:bg-green-400 hover:text-white font-bold py-0.5 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
              >
                {{ siz.name }}
              </option>

              <div>{{ formElements.size.value }}</div>
              <!--&getInputClass('size')-->
            </div>

            <div class="invalid-feedback">
              {{ getErrorMessage("size") }}
            </div>
          </div>

          <!-- Topping-->
          <div class="form-group">
            <div class="text-pink-400 flex flex-col -mt-2">
              <div>
                <label
                  class="text-left block text-blue-600 pt-2 font-bold mt-2 items-start"
                  htmlFor="size"
                  >Topping</label
                >
              </div>
              <div class="flex flex-row">
                <option
                  v-for="top in toppingArray"
                  value="top.name"
                  id="topping"
                  name="toppinglist"
                  @click="selectTopping(top.name)"
                  :class="{
                    'bg-pink-400 text-white': formElements.topping.value.includes(
                      top.name
                    ),
                  }"
                  :key="top.id"
                  @keyup="onFormChange($event)"
                  class="mr-2 text-center w-36 border-pink-400 mt-4 border-2 hover:bg-pink-400 hover:text-white font-bold py-0.5 px-auto rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary cursor-pointer"
                >
                  {{ top.name }}
                </option>
              </div>
              <div class="flex flex-row">
                <div class="mr-11" v-for="top in toppingArray" :key="top.id">
                  <img :src="top.image" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              class="text-left block mt-4 text-blue-600 font-bold items-start"
              htmlFor="image"
              >Image</label
            >

            <input type="file" class="w-80 mt-4 focus:outline-none" @change="uploadImg" />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="mt-4 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out btn btn-primary"
              :disabled="!formValid"
            >
              Submit
            </button>
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
      ban: "",
      brandArray: "",
      siz: "",
      sizeArray: "",
      top: "",
      toppingArray: "",
      image: null,
      formElements: {
        name: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        describe: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 300,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        brand: {
          type: "text",
          value: "",
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        price: {
          type: "price",
          value: null,
          validator: {
            required: true,
            minLength: 1,
            maxLength: 10,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        size: {
          type: "text",
          value: [],
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        topping: {
          type: "text",
          value: [],
          validator: {
            required: true,
            minLength: 1,
            maxLength: 200,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
      formValid: false,
    };
  },

  methods: {
    selectTopping(topping) {
      if (this.formElements.topping.value.includes(topping)) {
        this.formElements.topping.value = this.formElements.topping.value.filter(
          (t) => t !== topping
        );
      } else {
        this.formElements.topping.value.push(topping);
      }
    },
    selectSize(size) {
      if (this.formElements.size.value.includes(size)) {
        this.formElements.size.value = this.formElements.size.value.filter(
          (s) => s !== size
        );
      } else {
        this.formElements.size.value.push(size);
      }
    },
    uploadImg(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFormChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      let updatedForm = { ...this.formElements };
      updatedForm[name].value = value;
      updatedForm[name].touched = true;
      const validatorObject = this.checkValidator(value, updatedForm[name].validator);
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message,
      };
      let formStatus = true;
      for (let name in updatedForm) {
        if (updatedForm[name].validator.required === true) {
          formStatus = !updatedForm[name].error.status && formStatus;
        }
      }
      this.formElements = updatedForm;
      this.formValid = formStatus;
    },
    checkValidator(value, rule) {
      let valid = true;
      let message = "";
      if (value.trim().length === 0 && rule.required) {
        valid = false;
        message = "Required";
      }
      if (value.length < rule.minLength && valid) {
        valid = false;
        message = `Less than ${rule.minLength} Letters`;
      }
      if (value.length > rule.maxLength && valid) {
        valid = false;
        message = `More than ${rule.maxLength} Letters`;
      }
      if (rule.pattern === "price" && valid) {
        if (/^\d+(,\d{3})*(\.\d{1,2})?$/.test(value) === false) {
          valid = false;
          message = "Incorrect price";
        }
      }
      return { status: !valid, message: message };
    },
    getInputClass(name) {
      const elementErrorStatus = this.formElements[name].error.status;
      if (!this.formElements[name].touched) {
        return ["form-control"];
      } else {
        return elementErrorStatus && this.formElements[name].touched
          ? ["form-control", "is-invalid"]
          : ["form-control", "is-valid"];
      }
    },
    getErrorMessage(name) {
      return this.formElements[name].error.message;
    },
    async onFormSubmit() {
      const formData = {};
      for (let name in this.formElements) {
        formData[name] = this.formElements[name].value;
      }
      //console.log(formData);

      try {
        await fetch("http://localhost:5001/icecreams", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            image: this.image,
            name: formData.name,
            price: formData.price,
            describe: formData.describe,
            size: formData.size,
            brand: formData.brand,
            topping: formData.topping,
          }),
        });
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async fetchSize() {
      const res = await fetch("http://localhost:5001/size");
      const data = await res.json();
      return data;
    },
    async fetchBrand() {
      const res = await fetch("http://localhost:5001/brand");
      const data = await res.json();
      return data;
    },
    async fetchTopping() {
      const res = await fetch("http://localhost:5001/topping");
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
