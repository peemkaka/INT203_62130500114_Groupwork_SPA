<template>
  <div class="my-8 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
    <div v-for="product in products" :key="product.id">
      <div>
        <frame>
          <div>
            <img :src="product.img" width="150" height="150" />
          </div>
          <div>
            <span class="text-blue-500">{{ product.name }} </span> |
            {{ product.option }} |
            <span class="text-pink-500">Price {{ product.price }} ฿</span>
            <button class="px-2" @click="addProduct(product)">
              <img
                src="@/assets/images/cart2.png"
                width="22"
                height="22"
                class="cart2"
              />
            </button>
            <!-- <form @submit.prevent="">
              <span class="text-red-500">price:{{ product.price }}</span>
              <label class="heading" for="amount">Amount </label>
              <input
                class="input"
                :class="{ 'bg-red-50': invalidAmount }"
                type="number"
                v-model="enteredAmount"
              />
              <button class="px-4">
                <img src="@/assets/images/cart1.png" width="22" height="22" />
              </button>
            </form> -->
          </div>
        </frame>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://localhost:5001/products",
      products: [],
      enteredLocation: "",
    };
  },
  methods: {
    async fetchProductResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    addProduct(product) {
      console.log(`product name:${product.name}`);
      console.log(`product option:${product.option}`);
      console.log(`product price:${product.price}`);
      console.log(`product amount:${product.amount}`);
      // console.log(`product amount input:${this.enteredAmount}`);
      // const productAmount = {
      //   name: product.name,
      //   option: product.option,
      //   price: product.price,
      //   amount: this.enteredAmount,
      // };
      this.$emit("add-product", product);
    },
  },
  async created() {
    this.products = await this.fetchProductResult();
  },
};
</script>
<style scoped>
.cart2:hover {
  transform: scale(1.7);
  transition: transform 0.2s;
}
</style>  