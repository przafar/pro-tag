<template>
  <div class="container mx-auto px-2">
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="col-span-4 xl:col-span-2 lg:col-span-2">
        <form @submit.prevent="submitHandler" class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Логин
              </label>
              <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="protag@tag.com">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Пароль
              </label>
              <input v-model="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="*******">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Data
              </label>
              <input v-model="date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="10/10/2020">
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Создать</button>
            <a class="write-1 cursor-pointer ml-4" @click="logout">Log out</a>
          </div>
        </form>
        <div class="mt-8">
          <h2 class="text-3xl font-semibold">Цена:</h2>
          <p class="mt-4 font-semibold">Цена обычной</p>
          <input v-model="amountSimple" class="appearance-none block w-64 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Цена">
          <p class="font-semibold">Цена Limeted Edition</p>
          <input v-model="amountLimited" class="appearance-none block w-64 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Цена">
          <p class="font-semibold">Цена Custom</p>
          <input v-model="amountCustom" class="appearance-none block w-64 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Цена">
          <button @click.prevent="uploadAmount" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-12">Сохранить</button>
        </div>
      </div>
      <div class="lg:col-span-2 xl:col-span-2 col-span-4">
        <div class="w-full mb-4">
          <input class="w-full form-input rounded-lg p-2" type="text" v-model="search" placeholder="Search by Email" aria-label="Search">
        </div>
        <div class=" w-full overflow-auto chart">
          <div class="grid grid-cols-3 gap-4 w-full">
              <div class="col-span-1 ">
                <h2>Email:</h2>
              </div>
              <div class="col-span-1 text-center">
                <h2>Date:</h2>
              </div>
              <div class="col-span-1 text-center">
                <p>Link:</p>
              </div>
            </div>
          <li class="flex my-4 " v-for="(u, index) in filteredBlogs" :key="index">
            <div class="grid grid-cols-3 gap-4 w-full">
              <div class="col-span-1 ">
                <h2>{{ index + 1 }} {{ u.info.email }}</h2>
              </div>
              <div class="col-span-1 text-center">
                <h2>{{ u.info.date }}</h2>
              </div>
              <div class="col-span-1 text-center">
                <router-link :key="u.id" :to="{ name: 'Member', params: { id: u.id }, }"  tag="a" class="text-blue-500">
                  <i class="fas fa-download text-1xl"></i>
                </router-link>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
  export default {
    data: () => ({
      email: '',
      password: '',
      date: '',
      users: [],
      amountSimple: '',
      amountLimited: '',
      amountCustom: '',
      product: [],
      search: '',
      name: '',
      photo: '', 
      instagram: '',
      telegram: '',
      facebook: '',
      tiktok: '',
      userInfo: '',
      payme: '',
      youtube: '',
      snapchat: '',
      whatsapp: '',
      phone: '',

    }),
    async mounted() {
      this.users = await this.$store.dispatch('fetchUser')
      this.product = await this.$store.dispatch('fetchAmount')
      this.amountSimple = this.product.amountSimple
      this.amountLimited = this.product.amountLimited
      this.amountCustom = this.product.amountCustom
    },
    methods: {
      async submitHandler() {
        const formData = {
          email: this.email,
          password: this.password,
          date: this.date
        }
        const info = {
          name: this.name,
          telegram: this.telegram,
          facebook: this.facebook,
          instagram: this.instagram,
          userInfo: this.userInfo,
          photo: this.photo,
          tiktok: this.tiktok,
          payme: this.payme,
          youtube: this.youtube,
          snapchat: this.snapchat,
          whatsapp: this.whatsapp,
          phone: this.phone,


        }
        
        try {
          await this.$store.dispatch('register', formData)
          await this.$store.dispatch('registerProfile', info)
          this.$router.go('')
        } catch (e) {
          e
        }
        
      },
      async uploadAmount() {
        const info = {
          amountSimple: this.amountSimple,
          amountLimited: this.amountLimited,
          amountCustom: this.amountCustom,
        }
        try {
          await this.$store.dispatch('updateAmount', info)
          this.$router.go('/')
        } catch (e) {
          e
        }
      },
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.go('/')
      }
    },
    computed: {
      filteredBlogs: function(){
        return this.users.filter((user) => {
            return user.info.email.match(this.search)
        })
      }
    } 
  }
  
</script>
<style scoped>
  .chart {
    height: 600px;
    border: 2px solid grey;
    border-radius: 4px;
    padding: 5px 20px;
  }
  .form-input {
    border: 2px solid grey;
  }
</style>