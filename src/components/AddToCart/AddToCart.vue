<template>
  <div class="container">
    <h1 class="heading">this is a product page</h1>
    <div class="my-8 grid grid-flow-row grid-cols-3 grid-rows-1 gap-6">
      <div>
        <form @submit.prevent="submitForm">
          <base-card>
            <img src="../../assets/images/pepsi.png" class="w-26 h-32" />
            <p class="heading">Product List</p>
            <ul>
              <li v-for="result in pepsi" :key="result.id">
                {{ result.id }} {{ result.name }} | {{ result.grade }}
              </li>
            </ul>
            <p class="heading">Choose your product</p>
            <div>
              <input
                type="radio"
                name="PepsiX1"
                id="product-one"
                value="PepsiX1"
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
              Please select your amount > 0
            </p>
            <div class="pt-2">
              <button class="bg-salmon rounded-full p-2 text-white font-bold">
                Add To Cart
              </button>
            </div>
          </base-card>
        </form>
      </div>

      <div>
        <base-card>
          <img src="../../assets/images/coke.png" class="w-26 h-32" />
        </base-card>
      </div>
      <div>
        <base-card>
          <img src="../../assets/images/sprite.png" class="w-26 h-32" />
        </base-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["addtocart-submit"],
  data() {
    return {
      invalidProduct: false,
      invalidAmount: false,
      productP: null,
      enteredAmount: 0,
      pepsi: [
        {
          id: 1,
          name: "Pepsix1",
          grade: "No_Sugar",
        },
        {
          id: 2,
          name: "Pepsix2",
          grade: "Sugar",
        },
        {
          id: 3,
          name: "Pepsix3",
          grade: "Sugar_Mint",
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
      if (this.enteredAmount === "" || this.enteredAmount < 0) {
        this.invalidAmount = true;
      } else {
        this.invalidAmount = false;
      }
      console.log(`product value: ${this.productP}`);
      console.log(`product amount ${this.enteredAmount}`);
      console.log(`invalid product: ${this.invalidProduct}`);
      if (
        !this.invalidProduct &&
        !this.invalidAmount &&
        this.enteredAmount >= 0
      ) {
        const productToCart = {
          name: this.productP,
          amount: this.enteredAmount,
        };
        this.enteredAmount = "";
        this.productP = null;
        this.$emit("addtocart-submit", productToCart);
      }
    },
  },
};
</script>