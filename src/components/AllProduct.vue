<template>
  <div>
<div class="flex flex-row flex-wrap">
<div v-for="icecream in icecreams" :key="icecream.icecreamId" > 
  <base-icecream @icecream-popup="toggleVisibility" :icecream="icecream" @delete="deleteicecream"></base-icecream></div> 
</div>  
<div class="details" v-show="isVisible">
<popup @icecream-submit="edit" @close-popup="closePopup" :icecream="icecreamPopup"></popup>
</div>
</div>
</template>
<script>

 

import BaseIcecream from '../blogs/BaseIcecream.vue'
import Popup from './Popup.vue'
export default {
  components: {
   BaseIcecream,Popup
  },
  data(){
    return {
      icecreamPopup: [],
      isVisible: false,
      ifEdit: false,
     icecreams: [],
     urlIcecream: "http://localhost:6001/icecream",
     
 
    }
  },
  methods:{  
   async edit(icecream){
      try {
        const res 
        = await fetch(`${this.urlIcecream}/edit/${icecream.icecreamId}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            image: icecream.image,
            name:  icecream.icecreamName,
            price:  icecream.price,
            description:  icecream.description,
            size: icecream.size,
            brand: icecream.brand,
            topping: icecream.topping,
            lastday: icecream.lastday
          })
        })
        const data = await res.json()
        this.icecreams = this.icecreams.map((f) =>
          f.icecreamId === data.icecreamId
            ? { ...f, 
            image: data.image,
            name:  data.name,
            price:  data.price,
            description:  data.description,
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
                await fetch(this.url,  {
                    method: 'DELETE'
                })
                this.icecreams = this.icecreams.filter(icecream => {
        return icecream.icecreamId !== payload;
      });  } catch (error) {
                console.log(error)
            }
        },
    async fetchicecreams() {
      const res= await fetch("http://localhost:6001/icecream")
      const data=await res.json()
      return data}
    
}
, async created() {
  this.icecreams = await this.fetchicecreams()
}
  
}
</script>
