<template>
  <div class="back"> 
    <div class="contaner mx-auto">
      <div class="delivery bg-gray-200 text-gray-900">
        <div class="navbar">
          <Header/>
        </div>
        <div class="grid-cols-2 container mx-auto text-center mt-32 pb-64">
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
  .navbar {
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .home {
    background: #0082C8;
    transition: 0.8s linear;

  }
  .home:hover {
    background: #845EC2;
    transition: 10ms;

  }


</style>  