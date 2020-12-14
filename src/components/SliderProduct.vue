<template>
  <splide :options="primaryOptions" ref="primary" class="p-0" :slides="slides">
    <splide-slide  v-for="slide in slides" :key="slide.src">
      <img class="mx-auto rounded-full w-24 h-42" :src="slide.image">
    </splide-slide>
  </splide>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  export default {
    data() {
      return {
        slides: [],
        primaryOptions: {
          type: 'loop',
          width: 800,
          pagination: false,
          arrows: false
        },
      };
    },
		async mounted() {
      this.slides = await this.$store.dispatch('fetchProduct')
      console.log(this.slides)
		},
  }
</script>