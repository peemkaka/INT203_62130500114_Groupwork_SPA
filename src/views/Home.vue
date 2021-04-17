<template>
  <div class="home">
    <div class="container">
      <img src="@/assets/images/slide1.png" width="900" height="900">
      <img src="@/assets/images/slide2.png">
      <img src="@/assets/images/slide3.png" width="900" height="900">
      <slide></slide>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "@/components/UI/Slide.vue"
export default {
  name: "Home",
  components: {
    Slide
  },
  data(){
    return{
      images:[
        '@/assets/images/slide1.png',
        '@/assets/images/slide2.png',
        '@/assets/images/slide3.png'
      ]
    }
  }
};
</script>
<style scoped>
  .slideContainer{
    width:960px;
    margin:0 auto;
    text-align: center;
  }
</style>
