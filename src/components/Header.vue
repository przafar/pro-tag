<template>
  <div>
    <header class="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a href="/">
          <img class="h-10" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/logonew.png?alt=media&token=cc63ca80-2a4f-409b-acd2-1782383d66fb" alt="Workcation">
        </a>
        <div class="absolute right-0 mr-3">
          <modal-login v-bind:logo="logo" class="mt-1 ml-2 mr-2 cursor-pointer"/>
          <img class="hide-elem" :src="logo" alt="">
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import ModalLogin from '../components/ModalLogin.vue'

  export default {
    data: () => ({
      isOpen: false,
      logo: 'https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/Untitled-1.png?alt=media&token=7f56f310-4943-4496-aace-66d2da242f0f'
    }),
    components: {
      ModalLogin
    }
  }
</script>
<style scoped>
  .hide-elem {
    display: none;
  }
</style>