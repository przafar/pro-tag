<template>
  <div>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        color="#00D2FC"
        loader="dots"
        :on-cancel="onCancel"
        background="#fff"
        opacity="1"
        ></loading>
    </div>
    <div class="home">
      <Header/>
      <div v-scrollanimation class="justify-center text-center header-font text-white font-sans lg:mt-4 xl:mt-4 mt-8 ">
        <h1 class="xl:text-4xl lg:text-4xl text-3xl font-semibold tracking-tight sm:text-2xl">Поделитесь своими социальными сетями<br/>и бизнесом одним касанием</h1>
        <p class="text-lg">Поднимите свою жизнь на новый уровень!</p>
      </div>
      <div class="grid-cols-12 mb-20 mt-3 lg:mb-20 xl:mb-20 header-u">
        <img v-scrollanimation class="object-contain header w-full" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/header%20(3).PNG?alt=media&token=e37f5359-a691-4fb1-81fd-68eff16a63fb" alt="">
      </div>
    </div>
    <div class="section-1 text-white">
      <div class="container mx-auto mt-12 mb-12 px-4 xl:px-0 lg:px-0">
        <div v-scrollanimation class="section-info text-center pt-8">
          <h2 class="text-4xl font-semibold">Как работает PROTAG</h2>
          <p class="text-xl mb-8">Работает очень просто!</p>
        </div>
        <div class="grid grid-cols-2 pt-8">
          <div class="col-span-2 xl:col-span-1 lg:col-span-1 px-4">
            <div v-scrollanimation class="border-info border-solid border-2 border-white rounded-lg px-4 py-4 w-auto mb-8">
              <h3 class="text-xl text-center">Другим людям <b>не</b> нужно никаких приложений или чего-либо, чтобы Protag работал,<b> им также не нужно иметь Protag!</b></h3>
            </div>
            <div v-scrollanimation class="icon-phone text-center pt-4 pb-8">
              <i class="fab fa-apple text-5xl"></i>
              <i class="fab fa-android text-5xl ml-8"></i>
            </div>
            <div v-scrollanimation class="apple-pay text-center mb-24 text-lg">
              <h3>Телефоны Android & Apple оснащены функцией NFC, которая позволяет использовать такие функции, как оплата через Apple Pay.</h3>
            </div>
          </div>
          <div class="col-span-2 xl:col-span-1 lg:col-span-1 px-4 text-center">
            <div v-scrollanimation class="text-2xl">
              <h2>С этим вы можете легко приложить свой Protag к чьим-либо телефонам</h2>
            </div>
            <div v-scrollanimation class="text-2xl font-semibold">
              <h2>Он автоматически появится на телефоне другого человека!</h2>
            </div>
            <div v-scrollanimation class="w-48 mb-20 mx-auto mt-8">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/Untitled-22.png?alt=media&token=d9668634-df0d-4bae-a35f-87e7510beb95" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="container mx-auto">
        <div class="mb-12 grid grid-cols-4 gap-4 sm:flex-1 px-4">
          <div class="col-span-4 xl:col-span-2 lg:col-span-2">
            <div class="sample-2 ml-1">
              <img v-scrollanimation class="rounded shadow-xl w-full md:h-full" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/Designer.jpg?alt=media&token=6050e99b-a55a-4ab7-9449-021f8b7ee9e7" alt="">
            </div>
          </div>
          <div class="col-span-4 xl:col-span-2 lg:col-span-2">
            <h2 v-scrollanimation class="text-gray-800 text-3xl xl:mt-8 xl:ml-12">Управляйте ссылками с помощью собственного профиля PROTAG!</h2>
            <p v-scrollanimation class="text-gray-800 font-semibold xl:ml-12 mt-4">Когда вы покупаете Protag, вы получаете профиль Protag, который позволяет легко размещать и управлять всеми вашими ссылками в одном месте! Вы можете использовать свой профиль Protag в своей биографии в Instagram, чтобы люди могли найти то, чем вы хотели бы поделиться. У вас есть полный контроль над своим профилем, поэтому вы можете выбрать, чем хотите поделиться, и изменить его в любое время!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-3">
      <div class="container mx-auto">
        <div v-scrollanimation class="section-3-info text-center mb-8 px-0 lg:px-40 xl:px-40">
          <h2 class="xl:text-4xl lg:text-4xl text-2xl font-semibold text-gray-800">Откройте для себя все преимущества</h2>
          <h2 class=" xl:text-4xl lg:text-4xl text-2xl font-semibold text-gray-800">Превосходное удобство использования и множество функций!</h2>
        </div>
        <div class="flex-col xl:grid lg:grid grid-cols-3 gap-4 px-4 xl:px-0 lg:px-0">
          <div class="col-span-3 xl:col-span-1 lg:col-span-1">
            <div class="grid grid-cols-2 gap-4 mx-auto text-white h-56">
              <div v-scrollanimation class="col-span-2 xl:col-span-1 lg:col-span-1 icon-bgl h-56 rounded text-center pt-16 px-2">
                <i class="fas fa-mobile-alt text-5xl"></i>
                <p class="pt-3">Делись соц. сетями в прикосновение</p>
              </div>
              <div v-scrollanimation class="col-span-2 xl:col-span-1 lg:col-span-1 icon-bg h-56 rounded text-center pt-16 px-2">
                <i class="far fa-smile text-5xl"></i>
                <p class="pt-3">Другому человеку не нужно иметь Protag</p>
              </div>
              <div v-scrollanimation class="col-span-2 xl:col-span-1 lg:col-span-1 icon-bg h-56 rounded text-center pt-16 px-2">
                <i class="fab fa-app-store text-5xl"></i>
                <p class="pt-3">Приложение не требуется</p>
              </div>
              <div v-scrollanimation class="col-span-2 xl:col-span-1 lg:col-span-1 icon-bgl h-56 rounded text-center pt-16 px-2">
                <i class="fas fa-cog text-5xl"></i>
                <p class="pt-3">Простая настройка</p>
              </div>
            </div>
          </div>
          <div class="col-span-3 slide-margin lg:col-span-2 xl:col-span-2">
            <Slider v-scrollanimation/>
          </div>
        </div>
      </div>
    </div>
    <div class="section-4">
      <div class="container mx-auto">
        <div v-scrollanimation class="tag text-center mb-16 px-4 xl:px-48 lg:px-48">
          <h2 class="text-4xl text-gray-800">Выберите свой <b class="color-text">PROTAG</b></h2>
          <p>Выберите подходящие условия для вашей жизни или бизнеса и используйте приложение PROTAG с максимальной эффективностью!</p>
        </div>
        <div class="grid grid-cols-5 gap-4 px-4 xl:px-0 lg:px-0">
          <div v-scrollanimation class="xl:col-start-2 xl:col-end-3 lg:col-start-2 lg:col-end-3 col-span-5 bg-gray-100 rounded shadow-2xl py-8 px-4  mb-4 xl:mb-12 lg:mb-12">
            <div class="tag-photo rounded-full w-24 h-42 mx-auto text-center text-white">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/download%20(1).png?alt=media&token=23872cbd-b8b4-49de-8cd4-b415f218cd8c" alt="">
            </div>
            <div class="tag-price text-center pt-4">
              <h4 class="text-blue-600 font-semibold">{{ product.amountSimple }} сум</h4>
              <p class="px-4 xl:px-0 lg:px-0">Цветное издание.</p>
            </div>
            <div class="tag-info text-center">
              <div class="flex">
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-indigo-500"></li>
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-red-500"></li>
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-yellow-300"></li>
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-green-400"></li>
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-blue-400"></li>
                <li class="w-5 h-5 rounded-full mx-auto my-3 block shadow-inner bg-pink-400"></li>  
              </div><hr>
              <p class="py-3">Выберите цвет.</p> <hr>
              <a href="https://t.me/protag1"><button  class="learn rounded-full px-8 py-2 mt-4 lg:mt-2 xl:mt-2 text-white">Купить</button></a>
            </div>
          </div>    
          <div v-scrollanimation class="xl:col-start-3 xl:col-end-4 lg:col-start-3 lg:col-end-4 col-span-5 bg-gray-100 rounded shadow-2xl py-8 px-4  mb-4 xl:mb-12 lg:mb-12">
            <div class="tag-photo rounded-full w-24 h-42 mx-auto text-center text-white">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/capitan.png?alt=media&token=408cdc85-5a86-472c-8e3c-51102d5e7d23" alt="">
            </div>
            <div class="tag-price text-center pt-4">
              <h4 class="text-blue-600 font-semibold">{{ product.amountLimited }} сум</h4>
              <p class="px-4 xl:px-0 lg:px-0">Limited Edition:</p>
            </div>
            <div class="tag-info text-center">
              <p class="pb-3 xl:pb-2 lg:pb-2 pt-3">Выберите цвет.</p><hr>
              <p class="py-3">Посмотреть доступные</p> <hr>
              <a href="https://t.me/protag1"><button  class="learn rounded-full px-8 py-2 mt-4 lg:mt-2 xl:mt-2 text-white">Купить</button></a>
            </div>
          </div>
          <div v-scrollanimation class="xl:col-start-4 xl:col-end-5 lg:col-start-4 lg:col-end-5 col-span-5 bg-gray-100 rounded shadow-2xl py-8 px-4 mb-8 xl:mb-12 lg:mb-12">
            <div class="tag-photo rounded-full w-24 h-42 mx-auto text-center text-white">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/custom-logo.png?alt=media&token=f0ba2106-6865-40c7-b65e-b9a8004910df" alt="">
            </div>
            <div class="tag-price text-center pt-4">
              <h4 class="text-blue-600 font-semibold">{{ product.amountCustom }} сум</h4>
              <p class="px-4 xl:px-0 lg:px-0">Ваш собственный логотип!</p>
            </div>
            <div class="tag-info text-center">
              <p class="pb-3 xl:pb-2 lg:pb-2 pt-3">Ваш логотип</p><hr>
              <p class="py-3">Подробнее</p> <hr>
              <a href="https://t.me/protag1"><button  class="learn rounded-full px-8 py-2 mt-4 lg:mt-2 xl:mt-2 text-white">Купить</button></a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <a @click="scrollTop" v-show="visible" class="bottom-right mb-12 text-white scrool-bg w-12 h-12 rounded-full text-center pt-3">
        <i class="fas fa-angle-up"></i>
    </a>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Home',
  data: () => ({
    visible: false,
    animate: true,
    product: [],
    isLoading: true,
    fullPage: false,
  }),
  async mounted() {
    this.isLoading = false

    this.product = await this.$store.dispatch('fetchAmount')
    window.addEventListener('scroll', this.scrollListener)
    setTimeout(function () {
      return this.phone = true
    }, 1000)
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    },
    turnOffAnimate(){
      this.animate=false;
   }
  },
  components: {
    Header,
    Slider,
    Footer,
    Loading
  }
}
</script>
<style scoped>
  .home {
    background: url("https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/3302180.jpg?alt=media&token=ca125506-dfe8-4234-b0e2-cc82bbf6a132");
    height: 725px;
    background-position: top; 
    background-repeat: no-repeat; 
    background-size: cover;
    box-shadow: 0px 1px 10px -10px rgba(0,0,0,0.75);
  }
  .header-u {
    height: 350px;
  }
  .header {
    height: 340px;
    margin-top: 10px;
    z-index: -1;
    opacity: 0.9;
    overflow: hidden  
  }
  .sample {
    height: 500px;
    margin-top: 40px;
  }
  .section-1 {
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .create {
    background: url("https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/photo_2020-09-09_21-32-32.jpg?alt=media&token=25f07e08-b174-4f96-b037-f7d8b66e60e0");
    opacity: 0.8;
    padding: 50px;
  }
  .youtube {
    margin-top: 15px;
    width: 500px;
    height: 258px;
    opacity: 0.9;
  }
  .learn {
    background: #009EFA;
    color: #f0f0f0;
    font-weight: 400;
    transition: 0.8s linear;
  }
  .learn:hover {
    transition: 10ms;
    background: #845EC2;
  }
  .bottom-right {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
  .section-4 {
    background: url("https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/3302180footer.png?alt=media&token=4475cc48-8b24-4e37-a5c8-5e17d8a332fa") no-repeat;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
  }
  .icon-bg {
    background: #009EFA;  /* fallback for old browsers */
  }
  .icon-bgl {
    background: #845EC2;
  }
  .scrool-bg {
    background: #009EFA;
  }
  .color-text {
    color: #009EFA;
  }
  /* transition */
  .before-enter {
    opacity: 0;
    transform: translateY(0px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
  @media screen and (min-width: 640px) and (max-width: 1025px) { 
    .slide-margin {
      margin-top: 47rem;
    }
  }
  @media screen and (min-width: 310px) and (max-width: 640px) {
    .create {
      height: 258px;
      padding: 20px;
    }
    .sample-2 img {
      height: 258px;
    }
    .slide-margin {
      margin-top: 47rem;
    }
    
  }
  
</style>
