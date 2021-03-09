<template>
  <div class="contacts h-screen">
    <div class="contaner mx-auto">
      <div class="delivery  text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto px-2 pt-40">
          <div class="col-span-2 text-center">
            <h2 class="text-4xl font-semibold">Контакты</h2>
            <p class="text-3xl font-semibold mb-4">Наша команда свяжется с вами в ближайшее время</p>
            <hr>
          </div>
          <div class="col-span-2 mt-6 mb-12 xl:mt-24 xl:mb-12 sm:mt-6 sm:mb-12 text-xl font-semibold">
            <h4 class="mt-6">Официальный аккаунт в Instagram: @protaguz</h4>
            <h4 class="mt-6">Официальный аккаунт в Telegram: @protag1</h4>
            <h4 class="mt-6">Официальный Канал в Telegram: @protag</h4>
          </div>
        </div>
        <div class="mt-32 footer">
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
  .contacts {
    background: #fafafa;
  }
  .footer {
    margin-top: 15%;
  }

</style>