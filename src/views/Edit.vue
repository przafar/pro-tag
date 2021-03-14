<template>
  <div class="w-full back-color">
    <div class="container mx-auto text-center pt-10 px-6">
      <div class="grid-cols-1 text-left pb-8">
        <a @click.prevent="backRoute" class="text-white text-2xl"><i class="fas fa-arrow-left"></i></a>
      </div>
      <div class="grid-cols-1 text-white text-left text-2xl pb-8">
        <h2>Редактировать профиль</h2>
      </div>
      <div class="grid grid-cols-6 gap-2 bg-white rounded-lg py-4 poso">
          <div class="col-span-2 mx-auto flex">
            <img class="object-cover w-20 mt-2 h-20 xl:h-32 lg:h-32 xl:w-32 lg:w-32 rounded-full bg-gray-500" :src="info.profile.photo" alt="">
          </div>
          <div class="col-span-4 pt-3 font-semibold text-2xl text-gray-800">
            <p>{{ info.profile.name }}</p>
            <div class="flex pt-3 xl:pt-6 lg:pt-6 text-gray-800">
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-tiktok"></i>

              </div>
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-telegram-plane"></i>

              </div>
              <div class="bg-gray-400 w-10 h-10 rounded-lg mx-auto logot">
                <i class="fab fa-facebook-f"></i>
              </div>
            </div>
          </div>
      </div>
      <div v-if="this.info.profile.name.length > 3">
        <div class="grid-cols-1 text-white text-left text-2xl mt-8 font-semibold">
          <h2>Редактировать</h2>
        </div>
        <div class="container mx-auto mt-2">
          <div class="grid grid-cols-6 gap-2 text-white text-left">
            <div class="mt-10 col-span-4">
              <h3 class="">Изменить фото и имя:</h3>
            </div>
            <div class="col-span-2 place-self-end">
              <router-link to="/user" tag="a">
                <button class="focus:outline-none mx-auto block text-center bg-green-600  h-10 w-24 rounded-lg mt-8 mb-8 text-white">Изменить</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="grid grid-cols-6 gap-2 text-white text-left">
            <div class="mt-10 col-span-4">
              <h3 class="">Изменить URL:</h3>
            </div>
            <div class="col-span-2 place-self-end">
              <router-link to="/userInfo" tag="a">
                <button class="focus:outline-none mx-auto block text-center bg-green-600  h-10 w-24 rounded-lg mt-8 mb-8 text-white">Изменить</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="container mx-auto pb-48">
          <div class="grid grid-cols-6 gap-2 text-white text-left">
            <div class="mt-10 col-span-4">
              <h3 class="">Изменить фон:</h3>
            </div>
            <div class="col-span-2 place-self-end">
              <router-link to="/back" tag="a">
                <button class="focus:outline-none mx-auto block text-center bg-green-600  h-10 w-24 rounded-lg mt-8 mb-8 text-white">Изменить</button>
              </router-link>
            </div>
          </div>
        </div>
        
      </div>
      <div v-else>
        <div class="container mx-auto mt-12 start">
          <router-link to="/user">
            <button class="mx-auto  block focus:outline-none bg-blue-500 font-semibold h-12 w-48 rounded-full mt-4 text-white">Начать</button>
          </router-link>
        </div>
      </div>    
    </div>
  </div>
</template>
<script>


export default {
  metaInfo: {
    title: `UserInfo`,
  },
  data: () => ({
    instagram: '',
    telegram: '',
    whatsapp: '',
    phone: '',
    uid: '',
    selectedFile: null,

  }),
  async mounted() {
    this.info = await this.$store.dispatch('fetchInfo');
    this.uid = await this.$store.dispatch('getUid');
    this.instagram = this.info.profile.instagram
    this.telegram = this.info.profile.telegram
    this.whatsapp = this.info.profile.whatsapp
    this.phone = this.info.profile.phone  
  },
  methods: {
    backRoute() {
      this.$router.go(-1)
    },
    async onUpload() {
      const info = {
        instagram: this.instagram,
        telegram: this.telegram,
        whatsapp: this.whatsapp,
        phone: this.phone,
      }
      await this.$store.dispatch('updateInfo', info)
    },
  },
  computed: {
    info() {
      return this.$store.getters.info
    }
  },  
  components: {
	}
}
</script>
<style scoped>
  .back-color {
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #111111 74%);
  }
  .logot {
    padding-top: 1px;
  }
  .start {
    padding-top: 30px;
    padding-bottom: 420px;
  }
  @media screen and (min-width: 280px) and (max-width: 320px) {
    .back-color {
      background-color: #000000;
      background-image: linear-gradient(315deg, #000000 0%, #111111 74%);
    }
    .logot {
      width: 30px;
      height: 30px;
      font-size: 18px;
      padding-top: 1px;
    }
    .poso {
      padding-right: 2px;
      padding-left: 2px;
    }
  }
</style>