<template>
<div class="flex flex-row flex-wrap">
<div v-for="icecream in icecreams" :key="icecream.id" > 
  <blog-icecream @icecream-popup="toggleVisibility" :icecream="icecream" @delete="deleteicecream" ></blog-icecream></div> 
</div>  
<div class="details" v-show="isVisible">
<popup @icecream-submit="edit" @close-popup="closePopup" :icecream="icecreamPopup"></popup>
</div>
</template>
<script>

 

import BlogIcecream from './BlogIcecream.vue'
import Popup from './Popup.vue'
export default {
  components: {
   BlogIcecream,Popup
  },
  data(){
    return {
      icecreamPopup: [],
      isVisible: false,
      ifEdit: false,
     icecreams: [],
     url: "http://localhost:5001/icecreams"
    }
  },
  methods:{  
   async edit(icecream){
      try {
        const res 
        = await fetch(`${this.url}/${icecream.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            image: icecream.image,
            name:  icecream.name,
            price:  icecream.price,
            describe:  icecream.describe,
            size: icecream.size,
            brand: icecream.brand,
            topping: icecream.topping,
            lastday: icecream.lastday
          })
        })
        const data = await res.json()
        this.icecreams = this.icecreams.map((f) =>
          f.id === data.id
            ? { ...f, 
            image: data.image,
            name:  data.name,
            price:  data.price,
            describe:  data.describe,
            size: data.size,
            brand: data.brand,
            topping: data.topping,
            lastday: data.lastday
            }
            : f
        )
      } catch (error) {
        console.log(`Could not edit! ${error}`)
      }
    } ,
    closePopup(fals){
      this.isVisible = fals;
      this.icecreamPopup = " ";
    },
    toggleVisibility(icecream) {
      this.isVisible = true;
      this.icecreamPopup = icecream;
    },
    async deleteicecream(payload) {
            try {
                await fetch(`${this.url}/${payload}`, {
                    method: 'DELETE'
                })
                this.icecreams = this.icecreams.filter(icecream => {
        return icecream.id !== payload;
      });  } catch (error) {
                console.log(error)
            }
        },
    async fetchicecreams() {
      const res= await fetch(this.url)
      const data=await res.json()
      return data}
    
}
, async created() {
  this.icecreams = await this.fetchicecreams()
}
  
}
</script>
