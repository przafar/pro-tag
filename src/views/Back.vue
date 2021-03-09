<template>
  <div class="back-color pb-48 h-screen">
    <div class="container mx-auto text-center pt-10 px-6">
      <div class="grid-cols-1 text-left pb-8">
        <a @click.prevent="backRoute" class="text-white text-2xl"><i class="fas fa-arrow-left"></i></a>
      </div>
      <div class="grid-cols-1 text-white text-left text-2xl pb-8">
        <h2>Выберите обложку</h2>
      </div>
      <div :style="{ background: this.color }" class="grid grid-cols-6 gap-4 w-full h-40 sm:h-32 rounded-lg back-mobile">

      </div>
      <div class="px-2">
        <div class="grid grid-cols-6 gap-2 bg-white rounded-lg py-2 login-page poso">
          <div class="col-span-2 flex mt-2 mx-auto">
            <img class="object-cover w-20 h-20 sm:h-20 sm:w-20 xl:h-32 lg:h-32 xl:w-32 lg:w-32 rounded-full bg-gray-500" :src="info.profile.photo" alt="">
          </div>
          <div class="col-span-4 pt-2 font-semibold text-2xl text-gray-800">
            <p>{{ info.profile.name }}</p>
            <div class="flex pt-3 text-gray-800 xl:mr-24 lg:mr-24 xl:mt-4">
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-tiktok"></i>

              </div>
              <div class="bg-gray-400 w-10 h-10 mr-1 rounded-lg mx-auto logot">
                <i class="fab fa-telegram-plane"></i>

              </div>
              <div class="bg-gray-400 w-10 h-10 mr-2 rounded-lg mx-auto logot">
                <i class="fab fa-facebook-f"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap px-1 mt-2 lg:ml-20 xl:ml-20 xl:mt-10 lg:mt-10">
        <div  v-for="variant in variants" :key="variant.variantId"  class="mx-auto">
          <div @click="updateBack(variant.variantColor)" :style="{ backgroundColor: variant.variantColor}" class="w-8 h-8 rounded-full mt-4 mx-1"></div>
        </div>
      </div>
      <button @click.prevent="nextPage" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 h-12 w-48 rounded-full mt-6 mb-8 xl:mt-16 lg:mt-16 text-white">Сохранить</button>
    </div>
  </div>
</template>
<script>


export default {
  metaInfo: {
    title: `UserInfo`,
  },
  data: () => ({
    uid: '',
    selectedFile: null,
    variants: [
      {
        variantId: 1,
        variantColor: "#1e1f26",

      },
      {
        variantId: 2,
        variantColor: "#718096"
      },
      {
        variantId: 3,
        variantColor: "#cc2a36"
      },
      {
        variantId: 4,
        variantColor: "#ee4035"
      },
      {
        variantId: 4,
        variantColor: "#2e003e"
      },
      {
        variantId: 5,
        variantColor: "#8a2be2"
      },
      {
        variantId: 6,
        variantColor: "#f6cd61"
      },
      {
        variantId: 6,
        variantColor: "#fdf498"
      },
      {
        variantId: 7,
        variantColor: "#ff0084"
      },
      {
        variantId: 7,
        variantColor: "#ff8b94"
      },
      {
        variantId: 8,
        variantColor: "#009688"
      },
      {
        variantId: 9,
        variantColor: "#48bb78"
      },
      {
        variantId: 10,
        variantColor: "#3b7dd8"
      },
      {
        variantId: 11,
        variantColor: "#84c1ff "
      },
      
    ],
    color: '#718096'

  }),
  async mounted() {
    this.info = await this.$store.dispatch('fetchInfo');
    this.uid = await this.$store.dispatch('getUid');
    if(this.info.profile.back > 3) {
      this.color = this.info.profile.back  
    } else {
      this.color
    }
  },
  methods: {
    backRoute() {
      this.$router.go(-1)
    },
    async onUpload() {
      const info = {
        back: this.color
      }
      await this.$store.dispatch('updateBack', info)
    },
    updateBack(color) {
      this.color = color
    },
    nextPage() {
      this.$router.push({ name: 'Done' })
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
  .login-page {
    margin-top: -55px;
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
    .back-mobile {
      height: 8rem;
    }
  }
</style>