<template>
  <div class="home">
    <div class="container">
      <HelloWorld msg="Welcome to online shop" />
      <img src="../assets/images/slide1.png" class="slidelogo" />
      <img src="../assets/images/slide2.png" class="slidelogo" />
      <img src="../assets/images/slide3.png" class="slidelogo" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
