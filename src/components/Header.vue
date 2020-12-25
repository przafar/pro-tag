<template>
  <div>
    <header class="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a href="/">
          <img class="h-10" src="https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/logonew%20(2).png?alt=media&token=67af3567-ec52-4df8-85c9-ef4f63128d06" alt="Workcation">
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
      logo: 'https://firebasestorage.googleapis.com/v0/b/protaguz.appspot.com/o/logonew-22.svg?alt=media&token=d83b61ed-66fc-49ec-aae9-398ab48f3e08'
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