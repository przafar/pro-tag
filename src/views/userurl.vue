<template>
  <div class="back-color">
    <div class="container mx-auto text-center pt-10 px-6">
      <div class="grid-cols-1 text-left pb-8">
        <a @click.prevent="backRoute" class="text-white text-2xl"><i class="fas fa-arrow-left"></i></a>
      </div>
      <div class="grid-cols-1 text-white text-left text-2xl pb-8">
        <h2>Мессенджеры URL:</h2>
      </div>
      <div class="grid grid-cols-6 gap-4 bg-white rounded-lg py-4 poso">
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
      <div class="grid-cols-1 mt-2">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Facebook только URL</h4>
            <input v-model="facebook" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Facebook URL">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Payme например: https://payme.uz/...</h4>
            <input v-model="payme" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Payme URL">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Snapchat только URL</h4>
            <input v-model="snapchat" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Snapchat URL">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">YouTube например: https://www.youtube.com/channel/...</h4>
            <input v-model="youtube" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="YouTube URL">
          </div>
        </form>
      </div>
      <div class="grid-cols-1 mt-2">
        <form class="w-full">
          <div class="w-full text-left">
            <h4 class="block tracking-wide text-white ml-2 mb-2">Website например: https://www.protag.uz...</h4>
            <input v-model="website" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Website URL">
          </div>
        </form>
      </div>
      <button v-if="this.info.profile.back < 3" @click.prevent="nextPage" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 h-12 w-48 rounded-full mt-4 xl:mt-10 xl:mb-12 mb-8 text-white">Дальше</button>
      <button v-else @click.prevent="saveInfo" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 h-12 w-48 rounded-full mt-4 mb-8 text-white xl:mt-10 xl:mb-12">Сохранить</button>
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
    facebook: '',
    payme: '',
    youtube: '',
    snapchat: '',
    uid: '',
    website: '',
    selectedFile: null,
    back: ''
  }),
  async mounted() {
    this.info = await this.$store.dispatch('fetchInfo');
    this.uid = await this.$store.dispatch('getUid');
    this.facebook = this.info.profile.facebook
    this.payme = this.info.profile.payme
    this.snapchat = this.info.profile.snapchat
    this.youtube = this.info.profile.youtube
    this.back = this.info.profile.back
    this.website = this.info.profile.website
  },
  methods: {
    backRoute() {
      this.$router.go(-1)
    },
    async onUpload() {
      const info = {
        facebook: this.facebook,
        payme: this.payme,
        snapchat: this.snapchat,
        youtube: this.youtube,
        website: this.website
      }
      await this.$store.dispatch('updateUrl', info)
    },
    nextPage() {
      this.$router.push({ name: 'Back' })
    },
    saveInfo() { 
      this.$router.push({ name: 'Edit' })   
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