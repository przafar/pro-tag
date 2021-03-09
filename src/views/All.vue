<template>
  <div class="back">
    <Header/>
    <div class="container mx-auto pt-40 px-4 xl:px-0 lg:px-0 md:px-0">
      <h3 class="text-2xl text-center font-bold">НОВЫЕ ПОСТУПЛЕНИЯ</h3>
      <half-circle-spinner v-show="isLoading"
                  :animation-duration="1000"
                  :size="60"
                  color="#181818"
                  class="mx-auto mt-12"
              />
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 mt-10" >
        <div class="flex flex-col text-center mt-4" v-for="(slide, index) in filteredBlogs" :key="slide.new">
          <router-link tag="a" :to="{name: 'Add', params: {id: slide.id}}" class="flex flex-col">
            <img class="w-32 mx-auto" :src="slide.image" alt="">
            <h5 class="mt-12 font-semibold text-xl">{{ slide.option }}</h5>
            <p class="text-lg">{{ slide.cost }} сум</p>
          </router-link>
          <button @click="submitHandler(index, slide.image, slide.option, slide.cost)" class="mt-4 border-2 transition-all border-gray-900 py-3 font-semibold text-base
            text-black duration-300 hover:bg-black hover:text-white">Добавить в корзину</button>
        </div>
      </div>
      <h3 class="text-2xl text-center font-bold mt-12">LIMITED EDITION</h3>
      <half-circle-spinner v-show="isLoading"
                  :animation-duration="1000"
                  :size="60"
                  color="#181818"
                  class="mx-auto mt-12"
              />
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 mt-10 mb-12" >
        <div class="flex flex-col text-center mt-4" v-for="(slide, index) in product" :key="index">
          <router-link tag="a" :to="{name: 'Add', params: {id: slide.id}}" class="flex flex-col">
            <img class="w-32 mx-auto" :src="slide.image" alt="">
            <h5 class="mt-12 font-semibold text-xl">{{ slide.option }}</h5>
            <p class="text-lg">{{ slide.cost }} сум</p>
          </router-link>
          <button @click="submitHandler(index, slide.image, slide.option, slide.cost)" class="mt-4 border-2 transition-all border-gray-900 py-3 font-semibold text-base
            text-black duration-300 hover:bg-black hover:text-white">Добавить в корзину</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { HalfCircleSpinner } from 'epic-spinners'

export default {
  data: () => ({
    isLoading: true,
    product: [],
  }), 
  async mounted() {
    this.product = await this.$store.dispatch('fetchAmount')
    setTimeout(function() {
    }, 1500)
    this.isLoading = false
    console.log(this.product)
  },
  computed: {
    filteredBlogs(){
      return this.product.filter(function (shoe) {
        return shoe.new
      });
    }
  },
  components: {
    Header,
    Footer,
    HalfCircleSpinner
  }
}
</script>
<style scoped>
  .back {
    background: #fafafa;
  }
</style>