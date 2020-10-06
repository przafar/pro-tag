<template>
  <div>
    <header class="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a href="/">
          <img class="h-12" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/logonew.png?alt=media&token=cc63ca80-2a4f-409b-acd2-1782383d66fb" alt="Workcation">
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