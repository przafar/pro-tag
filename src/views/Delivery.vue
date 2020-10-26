<template>
  <div>
    <div class="contaner mx-auto">
      <div class="delivery bg-gray-200 text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto px-2">
          <div class="col-span-2">
            <div class="text-center mt-8">
              <h2 class="text-4xl font-semibold mb-4">Доставка</h2><hr>
              <h3 class="text-3xl font-semibold">Доставка интернет магазина PROTAG.UZ</h3>
            </div>
          </div>
          <div class="col-span-1 mt-24">
            <h4 class="text-2xl font-semibold">Ташкент</h4>
            <p class="font-semibold">Стоимость доставки – 25 000 сум</p>
          </div>
          <div class="col-span-1 mt-8">
            <h4 class="text-2xl font-semibold">Ташкентская область</h4>
            <p class="font-semibold">Стоимость доставки – 50 000 сум</p>
          </div>
          <div class="col-span-1 mt-8">
            <p class="font-semibold">Доставка осуществляется только до подъезда дома!</p>
          </div>
        </div>
        <div class="mt-16">
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header, Footer
  }
}
</script>
<style scoped>
  .navbar {
     background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .footer {
    margin-top: 13%;
  }

</style>