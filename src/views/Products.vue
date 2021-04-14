<template>
  <div class="Products-container">
    <div class="container">
      <h1>this is a product page</h1>
      <div class="my-8 grid grid-flow-row grid-cols-3 grid-rows-1 gap-6">
        <div>
          <form @submit.prevent="submitForm">
            <base-card>
            <img src="../assets/pepsi.png" class="w-26 h-32" />
            <p class="heading">Product List</p>
            <ul>
              <li v-for="result in pepsi" :key="result.id">
                {{ result.id }} {{ result.name }} | {{ result.grade }} | $
                {{ result.price }}
              </li>
            </ul>
            <p class="heading">Choose your product</p>
            <div>
              <input
                type="radio"
                name="Pepsix1"
                id="product-one"
                value="Pepsix1"
                v-model="productP"
              />
              <label class="label" for="product-one"> Product 1</label>
            </div>

            <div>
              <input
                type="radio"
                name="PepsiX2"
                id="product-two"
                value="PepsiX2"
                v-model="productP"
              />
              <label class="label" for="product-two"> Product 2</label>
            </div>

            <div>
              <input
                type="radio"
                name="PepsiX3"
                id="product-three"
                value="PepsiX3"
                v-model="productP"
              />
              <label class="label" for="product-three"> Product 3</label>
            </div>
            <p v-if="invalidProduct" class="text-red-500">
              Please select your products
            </p>
            <label class="heading" for="amount">Amount </label>
            <input
              class="input"
              :class="{ 'bg-red-50': invalidAmount }"
              id="amount"
              type="number"
              v-model.trim="enteredAmount"
            />
            <p v-if="invalidAmount" class="text-red-500">
              Please select your amount
            </p>
            <button class="bg-salmon rounded-full p-2 text-white font-bold">
              Add To Cart
            </button>
            </base-card>
          </form>
        </div>
        <div>
          <base-card>
          <img src="../assets/coke.png" class="w-26 h-32" />
          </base-card>
        </div>
        <div>
          <base-card>
          <img src="../assets/sprite.png" class=" w-26 h-32" />
          </base-card>
        </div>
      </div>
      <div class="container">
        <ul v-for="c in cart" :key="c.id">
          <li>
            <span class="text-purple-600 italic">{{ c.name }}</span>
          </li>
        </ul>
        สวัสดีจ้า
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      invalidProduct: false,
      invalidAmount: false,
      productP: null,
      enteredAmount: "",
      cart: [],
      pepsi: [
        {
          id: 1,
          name: "Pepsix1",
          grade: "No_Sugar",
          price: 2,
        },
        {
          id: 2,
          name: "Pepsix2",
          grade: "Sugar",
          price: 2,
        },
        {
          id: 3,
          name: "Pepsix3",
          grade: "Sugar_Mint",
          price: 2,
        },
      ],
      coke: [
        {
          id: 4,
          name: "Cokex1",
          grade: "No_Sugar",
          price: 2,
        },
        {
          id: 5,
          name: "Cokex2",
          grade: "Sugar",
          price: 2,
        },
        {
          id: 6,
          name: "Cokex3",
          grade: "Sugar_Mint",
          price: 2,
        },
      ],
      sprite: [
        {
          id: 7,
          name: "Spirtex1",
          grade: "No_Sugar",
          price: 2,
        },
        {
          id: 8,
          name: "Spirtex2",
          grade: "Sugar",
          price: 2,
        },
        {
          id: 9,
          name: "Spritex3",
          grade: "Sugar_Mint",
          price: 2,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.productP === null) {
        this.invalidProduct = true;
      } else {
        this.invalidProduct = false;
      }
      if (this.enteredAmount === "") {
        this.invalidAmount = true;
      } else {
        this.invalidAmount = false;
      }
      console.log(`product value: ${this.productP}`);
      console.log(`product amount ${this.enteredAmount}`);
      console.log(`invalid product: ${this.invalidProduct}`);
      
    },
    async fetchCartResult() {
      const res = await fetch("http://localhost:5001/cart");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.cart = await this.fetchCartResult();
  },
};
</script>
