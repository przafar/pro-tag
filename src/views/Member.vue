<template>
  <div class="back-color">
    <div :style="{ backgroundColor: user.profile.back }" class="h-48 w-full token-color mx-auto">
      <div class="container">
        <a href=""><img class="w-12 ml-4 pt-4" src="../assets/css/logo (1).png" alt=""></a>
      </div>
    </div>
    <div class="container member mx-auto px-5">
        <div class="grid grid-cols-6 gap-4 shadow-2xl bg-white rounded-lg px-3 py-4" v-if="user.profile.name.length > 1">
          <div class="col-span-2 flex">
            <img class="object-cover xl:h-32 lg:h-32 xl:w-32 lg:w-32 w-24 h-24 rounded-full bg-gray-500" :src="user.profile.photo" alt="">
          </div>
          <div class="col-span-4 pt-3 text-gray-800">
            <p v-if="user.profile.name.length > 3" class="font-semibold text-2xl">{{ user.profile.name }}</p>
            <p class="text-xl font-semibold">{{ user.profile.userInfo }}</p>
          </div>
          <div v-if="user.profile.instagram.length > 3" class="col-span-6 mx-auto">
            <a :href="('https://instagram.com/' + user.profile.instagram)" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg instagram text-white">
              <i class="fab fa-instagram pt-2"></i>
              <p class="mx-auto">Instagram</p>
            </a>
          </div>
          <div v-if="user.profile.telegram.length > 3" class="col-span-6 mx-auto">
            <a :href="('https://t.me/' + user.profile.telegram)" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg telegram text-white">
              <i class="fab fa-telegram-plane pt-2"></i>
              <p class="mx-auto">Telegram</p>
            </a>
          </div>
          <div v-if="user.profile.tiktok.length > 3" class="col-span-6 mx-auto">
            <a :href="user.profile.tiktok" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg tiktok text-white">
              <i class="fab fa-tiktok pt-2"></i>
              <p class="mx-auto">TikTok</p>
            </a>
          </div>
          <div v-if="user.profile.facebook.length > 3" class="col-span-6 mx-auto">
            <a :href="user.profile.facebook" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg facebook text-white">
              <i class="fab fa-facebook-f pt-2"></i>
              <p class="mx-auto">Facebook</p>
            </a>
          </div>
          <div v-if="user.profile.payme.length > 3" class="col-span-6 mx-auto">
            <a :href="user.profile.payme" class="flex shadow-2xl">
              <div class="payme rounded-lg w-48 h-16 pt-1">
              <img class="h-auto w-auto py-1 px-4  " src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/payme_01.png?alt=media&token=5ab737d7-4d2d-4cbf-9853-e02107fab461" alt="">
              </div>
            </a>
          </div>
          <div v-if="user.profile.snapchat.length > 3" class="col-span-6 mx-auto">
            <a :href="user.profile.snapchat" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg snapchat text-white">
             <i class="fab fa-snapchat-ghost pt-2"></i>
              <p class="mx-auto">Snapchat</p>
            </a>
          </div>
          <div v-if="user.profile.whatsapp.length > 3" class="col-span-6 mx-auto">
            <a :href="('https://wa.me/' + user.profile.whatsapp)" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg whatsapp text-white">
             <i class="fab fa-whatsapp pt-2"></i>
              <p class="mx-auto">WhatsApp</p>
            </a>
          </div>
          <div v-if="user.profile.phone.length > 3" class="col-span-6 mx-auto">
            <a :href="('tel:' + user.profile.phone)" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg phone text-white">
             <i class="fas fa-phone-alt pt-2"></i>
              <p class="mx-auto">Phone</p>
            </a>
          </div>
          <div v-if="user.profile.youtube.length > 3" class="col-span-6 mx-auto mb-12">
            <a :href="user.profile.youtube" class="flex shadow-2xl text-2xl w-48 h-16 py-3 px-4 rounded-lg youtube text-white">
             <i class="fab fa-youtube pt-2"></i>
              <p class="mx-auto">YouTube</p>
            </a>
          </div>
        </div>
        <div v-else>
        <p class="text-right pr-4 text-black email">{{ user.info.email }}</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: []
  }),
  async mounted() {
    const id = this.$route.params.id
    this.user = await this.$store.dispatch('fetchShoesById', id)
  },
  methods: {
  }
}
</script>
<style scoped>
  
  .member {
    margin-top: -60px;
  }
  .instagram {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
  .telegram {
    background: #0088cc;
  }
  .facebook {
    background: #3b5998;
  }
  .tiktok {
    background: #FC354C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0ABFBC, #FC354C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0ABFBC, #FC354C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .email {
    margin-top: -60px;
  }
  .payme {
    border: 4px solid #00D6D8;
  }
  .snapchat {
    background: #dfdb10;
  }
  .whatsapp {
    background: #25d366;
  }
  .phone {
    background: #20cc5f;
  }
  .youtube {
    background: #FF0000;
  }
  
</style>