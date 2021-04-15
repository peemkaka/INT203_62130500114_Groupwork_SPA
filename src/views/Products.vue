<template>
  <div class="Products-container">
    <add-to-cart @addtocart-submit="addNewCart"></add-to-cart>

    <div class="container">
      <span class="heading">Cart</span>
      <img src="../assets/images/cart.png" class="cartlogo" />
      <base-card>
        <ul v-for="c in cart" :key="c.id">
          <li>
            <span class="text-salmon italic">{{ c.name }} amount: {{c.amount}}</span>
          </li>
        </ul>
      </base-card>
    </div>
  </div>
</template>
<script>
import AddToCart from "@/components/AddToCart/AddToCart.vue";
// import AddToCart from '../components/AddToCart/AddToCart.vue'
export default {
  components: {
    AddToCart,
  },
  data() {
    return {
      url: "http://localhost:5001/cart",
      cart: [],
    };
  },
  methods: {
    async addNewCart(addingProduct) {
      const res = await fetch(this.url,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: addingProduct.name,
          amount: addingProduct.amount
        })
      });
      const data = await res.json();
      // this.cart = [...this.cart,data]
      this.cart.push(data);
    },
    async fetchCartResult() {
      const res = await fetch(this.url)
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.cart = await this.fetchCartResult();
  },
};
</script>
