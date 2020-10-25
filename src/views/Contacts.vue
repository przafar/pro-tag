<template>
  <div class="bg-gray-200 h-screen">
    <div class="contaner mx-auto">
      <div class="delivery  text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto">
          <div class="col-span-2 text-center mt-12">
            <h2 class="text-4xl font-semibold">Контакты</h2>
            <p class="text-3xl font-semibold mb-4">Наша команда свяжется с вами в ближайшее время</p>
            <hr>
          </div>
          <div class="col-span-2 mt-24 text-xl font-semibold">
            <h4 class="mt-4">Официальный аккаунт в Instagram: @protaguz</h4>
            <h4 class="mt-4">Официальный аккаунт в Telegram: @protag1</h4>
            <h4 class="mt-4">Официальный Канал в Telegram: @protag</h4>
          </div>
        </div>
        <div class="mt-24 footer">
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
    margin-top: 15%;
  }

</style>