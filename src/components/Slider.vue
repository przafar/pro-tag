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
              'background': 'https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/photo_2019-10-19_02-54-33.jpg?alt=media&token=8eea04fe-b429-4034-b438-d83ed1178741'
            }
          },
          {
            html: 'slide2',
            style: {
              'background': 'https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/arnel-hasanovic-4oWSXdeAS2g-unsplash%20medium.jpg?alt=media&token=648380f7-e203-4135-9600-69ed0fa0d1dc'
            }
          },
          {
            html: 'slide3',
            style: {
              'background': 'https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/youssef-sarhan-tze1kKj7Lgg-unsplash.jpg?alt=media&token=2b6193b2-94d0-401e-b150-a4eb01bd2dca'
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