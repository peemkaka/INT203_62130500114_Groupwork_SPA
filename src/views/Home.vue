<template>
  <div class="home">
    <div class="container">
      <HelloWorld msg="Welcome to online shop" />
      <img src="../assets/images/slide1.png" class="userlogo" />
      <img src="../assets/images/slide2.png" class="userlogo" />
      <img src="../assets/images/slide3.png" class="userlogo" />
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
  data() {
    return {
      images: [
        {
          id:1,
          src: "../assets/images/slide1.png",
          title: "Coke",
          show: true,
        },
        {
          id:2,
          src: "../assets/images/slide2.png",
          title: "Pepsi",
          show: true,
        },
        {
          id:3,
          src: "../assets/images/slide3.png",
          title: "Mirinda",
          show: true,
        },
      ],
    };
  }
};
</script>
