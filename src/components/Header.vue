<template>
  <div>
    <header class="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a href="/">
          <img class="h-10" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/logo.png?alt=media&token=08cc9dd0-1e2d-4748-b02f-19c89bca7910" alt="Workcation">
        </a>
        <div class="absolute right-0 mr-3">
          <modal-login class="mt-1 ml-2 mr-2 cursor-pointer"/>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import ModalLogin from '../components/ModalLogin.vue'

  export default {
    data: () => ({
      isOpen: false
    }),
    components: {
      ModalLogin
    }
  }
</script>
<style scoped>
  
</style>