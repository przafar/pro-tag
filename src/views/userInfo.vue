<template>
  <div class="back-color">
    <div class="container mx-auto text-center pt-10 px-6">
      <div class="grid-cols-1 text-left pb-8">
        <a @click.prevent="backRoute" class="text-white text-2xl"><i class="fas fa-arrow-left"></i></a>
      </div>
      <div class="grid-cols-1 text-white text-left text-2xl pb-8">
        <h2>Мессенджеры</h2>
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
      <div class="grid-cols-1 mt-2 xl:mt-6">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Instagram например: protaguz Без @</h4>
            <input v-model="instagram"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Без @">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2 xl:mt-6">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Telegram например: protaguz Без @</h4>
            <input v-model="telegram" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Без @">
          </div>
        </form>
      </div>        
      <div class="grid-cols-1 mt-2 xl:mt-6">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">WhatsApp номер телефона например: +998976543210</h4>
            <input v-model="whatsapp" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="+998976543210">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2 xl:mt-6">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Номер телефона например: +998976543210</h4>
            <input v-model="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="+998976543210">
          </div>
        </form>
      </div>
      <button @click.prevent="nextPage" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 font-semibold h-12 w-48 rounded-full mt-6 xl:mt-16 mb-2 xl:mb-12 text-white">Дальше</button>
      <div class="pb-20 block w-12"></div>
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
    nextPage() {
      this.$router.push({ name: 'Userurl' })
    }

    
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
    min-height: 100%;
    background-attachment: fixed;
    width: 100%;
  }
  .logot {
    padding-top: 1px;
  }
  @media screen and (min-width: 280px) and (max-width: 320px) {
    .back-color {
      background-color: #000000;
      background-image: linear-gradient(315deg, #000000 0%, #111111 74%);
      height: 100%;
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