<template>
  <div class="back">
    <Header/>
    <div class="container mx-auto pt-40 px-4 xl:px-0 lg:px-0 md:px-0">
      <div class="grid grid-cols-6 gap-2">
        <div class="col-span-6 xl:col-span-4 lg:col-span-4 md:col-span-4 pr-0 xl:pr-10 lg:pr-10 md:pr-10 pb-10">
          <div class="border-b-2">
            <h2 class="text-2xl pb-3">Корзина</h2>
          </div>
          <div class="mt-6">
            <div v-for="(pro, index) in poducts" :key="index" :value="pro.id" class="mt-6 border-b-2 pb-5"> 
              <div class="grid grid-cols-6">
                <div class="col-span-2">
                  <img class="w-24" :src="pro.image" alt="">
                </div>
                <div class="col-span-3">
                  <h3 class="text-xl">{{ pro.option }}</h3>
                  <p class="text-lg mt-2">{{ pro.cost }} Сум</p>
                  <h4 class="mt-2">Количество</h4>
                  <select class="select border-black border w-12 h-6" v-model="pro.quantity">
                    <option :key="quantity" v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
                  </select>
                </div>
                <div class="col-span-1">
                  <div class="flex justify-end">
                    <button @click="$store.commit('removeFromCart', index)" class="outline-none focus:outline-none"><i class="fas fa-trash text-2xl"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6 xl:col-span-2 lg:col-span-2 md:col-span-2 mb-32">
          <div class="border-b-2">
            <h2 class="text-2xl pb-3">Итог заказа</h2>
          </div>
          <div class="flex items-center justify-between mt-8">
            <h4 class="text-xl">Итог</h4>
            <h4 class="justify-end text-xl">{{ total }} Сум</h4>
          </div>
          <div class="flex items-center justify-between mt-8 ">
            <h4 class="text-xl">Доставка</h4>
            <h4 class="justify-end text-xl">БЕСПЛАТНАЯ</h4>
          </div>
          <p class="text-lg underline mt-2 pb-4 border-b-2">UZBEKISTAN</p>
          <div>
            <div class="flex items-center justify-between mt-8 ">
              <h4 class="text-xl">Итог</h4>
              <h4 class="justify-end text-xl">{{ total }} Сум</h4>
            </div>
            <button class="text-center bg-black w-full py-4 text-white mt-8 text-lg"><i class="fas fa-lock pr-4"></i>Проверить</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  data: () => ({
    selected: [],
    quantityArray: [],
    picked: '',
    visible: false,

  }),
  mounted() {
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
  },
  computed: {
    total() {      
      return this.poducts.reduce(function(total, key) {
        return total + (Number(key.cost) * key.quantity)
      }, 0).toFixed(0)
    },
    quantity() {  
      let quantity = 0;
      this.poducts.forEach(e => {
          quantity += e.quantity
      });
      return quantity
    },
    poducts() {
      return this.$store.getters.PRODUCTS;
    },
  },
  
  components: {
    Header,
    Footer,
  }
}
</script>
<style scoped>
  .back {
    background: #fafafa;
  }
</style>