<template>
  <div class="home">
    <div class="container">
      <HelloWorld msg="Welcome to online shop" />
      <img src="../assets/images/slide3.png" class="userlogo" />
      <div class="slides">
          <div v-for="p in images" :key="p.id">
            <img :src="p.src" class="userlogo">
            <Slide/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Slide from '@/components/Slide.vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
    Slide
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
