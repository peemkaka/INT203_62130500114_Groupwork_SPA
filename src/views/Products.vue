<template>
  <div class="Products-container">
    <div class="container">
      <!-- <location></location> -->
      <adding-location
        v-if="isEdit"
        :oldId="oldId"
        :oldName="oldName"
        @location-submit="editSubmit"
      >
      </adding-location>
      <adding-location v-else-if="!isEdit" @location-submit="addNewLocation"></adding-location>
    </div>
    <div class="container">
      <div class="flex flex-row items-center">
        <frame>
          <ul v-for="result in location" :key="result.id">
            <p>
            <span class="text-green-600 italic">{{ result.name }}</span>
            <button  @click="editLocation($event,result.id,result.name)"
            class='edit'><img src="@/assets/images/edit.png" width="20" height="20"></button>
            <button @click="deleteLocation(result.id)"
            class='delimg'><img src="@/assets/images/delete.png" width="20" height="20"></button>
            </p>
            
          </ul>
        </frame>
      </div>
    </div>
    <div class="container">
      <p class="text-red-400">ปล.ตะกร้าอยู่ด้านล่างของเว็บไซต์</p>
    </div>
    <div class="container">
      <list-product @add-product="addNewCart"></list-product>
    </div>
    <div class="container">
      <img src="@/assets/images/cart.png" class="cartlogo" />
      <span class="heading">สินค้าในตะกร้า</span>
      <frame>
        <ul v-for="c in cart" :key="c.id">
          <li class="pb-2">
            <span class="text-blue-500 italic">{{ c.name }} </span>
            <span class="text-black italic">:{{ c.option }}</span>
            <span class="text-pink-500 italic"> price: {{ c.price }}</span>
            <span class="text-green-600 italic"> amount: {{ c.amount }}</span>
            <button @click="deleteProduct(c.id)" class="ml-2">
              <img
                src="@/assets/images/cart3.png"
                width="22"
                height="22"
                class="cart3"
              />
            </button>
          </li>
        </ul>
      </frame>
    </div>
  </div>
</template>
<script>
import ListProduct from "@/components/Shop/ListProduct.vue";
// import Location from "@/components/Shop/Location.vue";
import AddingLocation from "@/components/Shop/AddingLocation.vue";
export default {
  components: {
    AddingLocation,
    ListProduct
    // Location,
  },
  data() {
    return {
      url: "http://localhost:5001/cart",
      cart: [],
      oldId: "",
      oldName: "",
      locationUrl: "http://localhost:5001/location",
      location: [],
      isEdit: false,
      invalidClick: false,
      result:0
    };
  },
  methods: {
    editLocation(passingData,editId,editName){
      this.isEdit = true
      this.oldId = editId
      this.oldName = editName
       console.log(
        ` ${passingData.label} mode: ${this.isEdit}, you want to edit current data {id: ${editId}, name: ${editName}}`
      )
    },
    async editSubmit(editingData){
      const res = await fetch(`${this.locationUrl}/${editingData.id}`,{
        method:'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: editingData.name
        })
      })
      const data = await res.json()
      this.location = this.location.map((survey) =>
      survey.id === data.id 
      ? {
          ...survey,
          name:data.name
      }
      :survey
      )
      this.isEdit = false
    },
    async deleteLocation(id) {
      await fetch(`${this.locationUrl}/${id}`, {
        method: "DELETE",
      });
      this.location = this.location.filter((c) => c.id !== id);
    },
    async deleteProduct(id) {
      await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      this.cart = this.cart.filter((c) => c.id !== id);
    },
    async addNewLocation(newLocation) {
      const res = await fetch(this.locationUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: newLocation.name,
        }),
      });
      const data = await res.json();
      this.location = [...this.location, data];
    },
    async addNewCart(addingProduct) {
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: addingProduct.name,
          option: addingProduct.option,
          price: addingProduct.price,
          amount: addingProduct.amount,
        }),
      });
      const data = await res.json();
      this.cart.push(data);
    },
    async fetchCartResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async fetchLocation() {
      const res = await fetch(this.locationUrl);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.cart = await this.fetchCartResult();
    this.location = await this.fetchLocation();
  },
};
</script>
<style scoped>
.cart3:hover {
  transform: scale(1.7);
  transition: transform 0.2s;
}
.edit:hover {
  transform: scale(1.7);
  transition: transform 0.2s;
}
.delimg:hover {
  transform: scale(1.7);
  transition: transform 0.2s;
}
</style>  