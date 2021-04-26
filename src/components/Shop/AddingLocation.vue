<template>
  <div class="container">
    <frame>
      <div>
        <form @submit.prevent="submitCheck">
          <label class="heading" for="location">กรอกที่อยู่ของคุณ </label>
          <input
            class="input"
            id="location"
            type="text"
            v-model.trim="enteredName"
          />
          <p v-if="invalidNameInput" class="text-red-500">
            Please type your address for receive your product
          </p>
          <button class="accept">
            <img src="@/assets/images/accept.png" width="20" height="20" />
          </button>
        </form>
      </div>
    </frame>
  </div>
</template>
<script>
export default {
  props: {
    oldId: {
      type: Number,
      required: false,
      default: null,
    },
    oldName: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      id: this.oldId,
      enteredName: this.oldName,
      invalidNameInput: false,
    };
  },
  methods: {
    submitCheck() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      console.log(`name value: ${this.enteredName}`);
      if (!this.invalidNameInput) {
        const newLocation = {
          id: this.id,
          name: this.enteredName,
        };
        this.id = "";
        this.enteredName = "";
        this.$emit("location-submit", newLocation);
      }
    },
  },
};
</script>
<style scoped>
.accept:hover {
  transform: scale(1.7);
  transition: transform 0.2s;
}
</style>  
