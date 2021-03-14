<template>
  <div class="back">
    <Header class="" />
    <div class="pt-48 ">
      <div class="container mx-auto">
        <div class="grid grid-cols-6 gap-4 px-4 xl:px-0 lg:px-0 md:px-0">
          <div class="flex flex-col col-span-6 xl:col-span-4 lg:col-span-4 md:col-span-4">
            <div class="flex">
              <a @click.prevent="backRoute" href="" class="font-medium text-black">Домой <span class="px-1">/</span></a>
              <p class="text-gray-900 font-semibold">Продукт</p>
            </div>
            <div class="mt-20">
              <img :src="product.image" class="w-64 h-64 mx-auto" alt="">
              <p class="mt-12">{{ product.description }}</p>
            </div>
            <div>
            </div>
          </div>
          <div class="flex flex-col col-span-6 xl:col-span-2 lg:col-span-2 mdcol-span-2 pb-8">
            <h4 class="text-2xl uppercase font-semibold">Protag</h4>
            <p>{{ product.sku }}</p>
            <h4 class="mt-6 text-xl font-semibold">{{ product.cost }} Сум</h4>
            <p class="mt-4 text-sm">Количество</p>
            <input v-model="quantity" class="w-24 bg-gray-100 border-2 border-gray-800 h-10 mt-2 pl-2 text-lg"  type="number" >
            <div class="mt-8">
              <button @click="addProduct" class="border-2 border-black w-full hover:border-gray-900 text-black hover:text-gray-800 py-3 transition-all duration-200">Добавить в корзину</button>
            </div>
            <div class="mt-4">
              <button @click="check" class="border bg-black hover:bg-gray-900 transition-all duration-200 text-white border-black w-full py-3">Купить</button>
            </div>
            <div class="flex items-center justify-between mt-8 border-t-2 border-gray-800 pt-0">
              <div class="w-full cursor-pointer"  @click="showen">
                <h5 class="text-xl my-3 ">Информация о продукте</h5>
              </div>
              <div class="justify-end">
                <i v-if="!show" @click="showen" class="fas cursor-pointer fa-plus text-xl"></i>
                <i @click="showen" v-else class="fas cursor-pointer fa-minus text-xl"></i>
              </div>
            </div>
            <div v-show="show">
              <p>{{ product.info }}</p>
            </div>
            <div class="flex items-center justify-between mt-2 pt-0 border-t-2 border-gray-800">
              <div class="mb-3 my-3 w-full cursor-pointer" @click="showen1">
                <h5 class="text-xl">Политика возврата</h5>
              </div>
              <div class="justify-end mb-0 mt-0">
                <i v-if="!show1" @click="showen1" class="fas cursor-pointer fa-plus text-xl"></i>
                <i @click="showen1" v-else class="fas cursor-pointer fa-minus text-xl"></i>
              </div>
            </div>
            <div v-show="show1">
              <p>Если товар, которые вы приобрели, не соответствуют вашим ожиданиям, включая дефектные, поврежденные, не соответствующие описанию, вы можете вернуть их и вернуть деньги. Прикрепите фотографии полученного товара к электронному письму, с которым вы связываетесь с нашей сервисной службой, чтобы сделать возврат. Таким образом, мы сможем улучшить качество наших услуг и как можно скорее выполнить ваш запрос на возврат.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  data: () => ({
    product: [],
    quantity: 1,
    categories: [],
    show: false,
    show1: false

  }),
  async mounted() {
    const id = this.$route.params.id
    this.product = await this.$store.dispatch('fetchProductById', id)
    this.categories = this.product.categoris
  },
  methods: {
    addProduct() {
      const addShoes = {
        option: this.product.option,
        cost: this.product.cost,
        image: this.product.image,
        quantity: this.quantity++,
        id: this.product.id
      }
      this.$store.commit('addToCart', addShoes)
      this.$store.commit('saveData')
      this.$toasted.show("Добавлено!", { 
        theme: "outline", 
        position: "top-right", 
        duration : 2000
      });
    }, 
    showen() {
      if(this.show1 == true) {
        this.show = !this.show
        this.show1 = false
      } else {
        this.show = !this.show
      }
    },
    showen1() {
      if(this.show == true) {
        this.show1 = !this.show1
        this.show = false
      } else {
        this.show1 = !this.show1
      }
    },
    backRoute() {
      this.$router.go(-1)
    },
    check() {
      this.$toasted.show("Временно не работает!", { 
        theme: "outline", 
        position: "top-right", 
        duration : 2000
      });
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  .back {
    background: #fafafa;
  }
</style>