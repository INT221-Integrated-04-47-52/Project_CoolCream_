<template>
  <div>
    <div class="flex flex-row flex-wrap">
      <div v-for="icecream in icecreams" :key="icecream.icecreamId">
        <base-icecream
          @icecream-popup="toggleVisibility"
          :icecream="icecream"
          @delete="deleteicecream"
        >
        </base-icecream>
      </div>
    </div>
    <div class="details" v-show="isVisible">
      <popup
        @icecream-submit="edit"
        @close-popup="closePopup"
        :icecream="icecreamPopup"
      ></popup>
    </div>
  </div>
</template>
<script>
import BaseIcecream from "../blogs/BaseIcecream.vue";
import Popup from "./Popup.vue";
export default {
  components: {
    BaseIcecream,
    Popup,
  },
  data() {
    return {
      icecreamPopup: [],
      isVisible: false,
      ifEdit: false,
      icecreams: [],
      urlIcecream: `${process.env.VUE_APP_ROOT_API}icecream`,
    };
  },
  methods: {
    async edit(icecream, imageFile) {
      console.log(imageFile);
      console.log(icecream);
      this.invalidInput = false;
      this.error = null;
      try {
        let iceToplength = icecream.icecreamHasToppings.length;
        for (let i = 0; i < iceToplength; i++) {
          let hasToppingId =
            (await (
              await fetch(`${process.env.VUE_APP_ROOT_API}max-icecreamHasToppingId`)
            ).json()) +
            1 +
            i;
          icecream.icecreamHasToppings[i] = {
            hasToppingId: hasToppingId,
            topping: icecream.icecreamHasToppings[i],
          };
        }
        let iceProduct = {
          icecreamId: icecream.icecreamId,
          image: icecream.image,
          icecreamName: icecream.icecreamName,
          price: icecream.price,
          description: icecream.description,
          size: icecream.size,
          brand: icecream.brand,
          lastday: icecream.lastday,
          icecreamHasToppings: icecream.icecreamHasToppings,
        };
        console.log(icecream);
        console.log(iceProduct);
        let jsonIcecream = await JSON.stringify(iceProduct);
        console.log(jsonIcecream);
        const blob = await new Blob([jsonIcecream], {
          type: "application/json",
        });
        let formData = new FormData();
        await formData.append("editIcecream", blob);
        let data = "";
        if (imageFile == undefined) {
          const res = await fetch(`${process.env.VUE_APP_ROOT_API}edit`, {
            method: "PUT",
            body: formData,
            /* type: "application/json",*/
          });
          console.log(this.formData);
          data = await res.json();
          this.icecreams = await this.fetchicecreams();
          console.log(this.icecreams);
          console.log(data);
        } else {
          formData.append("image", imageFile, icecream.image);
          const res = await fetch(`${process.env.VUE_APP_ROOT_API}image`, {
            method: "PUT",
            body: formData,
          });
          data = await res.json();
          this.icecreams = await this.fetchicecreams();
        }
        if (data.icecreamId == this.icecream.icecreamId) {
          console.log("Success edit data");
         
        }
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
    closePopup(fals) {
      this.isVisible = fals;
      this.icecreamPopup = " ";
    },
    toggleVisibility(icecream) {
      this.isVisible = true;
      this.icecreamPopup = icecream;
    },
    async deleteicecream(payload) {
      try {
        await fetch(
          `${process.env.VUE_APP_ROOT_API}delete/` +
            payload /*"http://localhost:6001/"+"delete/"+payload*/,
          {
            method: "DELETE",
          }
        );
        this.icecreams = this.icecreams.filter((i) => i.icecreamId !== payload);
        /*  this.icecreams = this.icecreams.filter(icecream => {
          console.log("ending");
     
       
        })*/
      } catch (error) {
        console.log(error);
      }
    },
    async fetchicecreams() {
      const res = await fetch(`${process.env.VUE_APP_ROOT_API}icecream`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.icecreams = await this.fetchicecreams();
  },
};
</script>
