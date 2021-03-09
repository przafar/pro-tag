<template>
  <div class="back"> 
    <div class="contaner mx-auto">
      <div class="delivery h-screen text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto text-center pt-40 pb-64">
          <h2 class="text-5xl">Страница не найдена</h2>

          <h2 class="text-5xl mt-24">404</h2>
          <div class="mt-12">
          <a class="home py-3 px-5 rounded-lg text-white" href="/">На главную</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {  
  components: {
    Header,
  }
}
</script>
<style scoped>
  .back {
    background: #fafafa;
  }
  .home {
    background: #181818;
    transition: 0.8s linear;

  }
  .home:hover {
    background: #292828;
    transition: 10ms;

  }


</style>  