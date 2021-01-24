<template>
 <div class="slider">
      <slider class="rounded" ref="slider" :options="options">
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style"><img :src="item.style.background" alt=""></slideritem>
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
   el: '#app',
   data () {
      return {
        //data list [array]
        someList:[
          {
            html: 'slide1',
            style: {
              'background': 'https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/slide3.jpg?alt=media&token=980be932-37f1-4eae-adb8-3f098e29bd62'
            }
          },
          {
            html: 'slide2',
            style: {
              'background': 'https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/slide2.jpg?alt=media&token=827bc878-b595-4665-b716-9f88ec0b186b'
            }
          },
          {
            html: 'slide3',
            style: {
              'background': 'https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/arnel1.jpg?alt=media&token=7a7e77e5-5e2d-4ae0-a4d6-0873978667bc'
            }
          }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          loop: true,
          autoplay:'5000'

        },
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>
<style scoped>
  .slider {
    width: 100%;
    margin-bottom: 50px;
    height: 464px;
  }
  @media screen and (min-width: 330px) and (max-width: 640px) {
    .slider {
      height: 15.5rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 330px) {
    .slider {
      height: 13rem;
    }
  }
</style>