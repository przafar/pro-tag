<template>
  <div class="h-full w-full back-color pb-64">
    <div class="container mx-auto text-center pt-10 px-6">
      <div class="grid-cols-1 text-left pb-12">
        <a @click.prevent="backRoute" class="text-white text-2xl"><i class="fas fa-arrow-left"></i></a>
      </div>
      <div class="grid-cols-1 text-white text-left text-2xl pb-8">
        <h2>Добавтье ваше фото и имя {{ info.info.email }}</h2>
      </div>
      <div class="grid grid-cols-6 gap-2 lg:h-48 xl:h-48 bg-white rounded-lg py-4">
          <div class="col-span-2 flex mx-auto">
            <div v-show="loading" class="absolute w-20 h-20 xl:h-32 lg:h-32 xl:w-32 lg:w-32 lg:p-8 p-2 xl:p-8">
              <half-circle-spinner
                  :animation-duration="1000"
                  :size="60"
                  color="#00D2FC"
              />
            </div>
            <img class="object-cover w-20 h-20 xl:h-32 lg:h-32 xl:w-32 lg:w-32 rounded-full bg-gray-500" :src="selectedFile" alt="">
          </div>
          <div class="col-span-4  mr-2">
            <input v-model="name" placeholder="Ваше имя" type="text" class="placeholder-white shadow-inner xl:mr-4 lg:mr-4 mr-0 focus:placeholder-gray-500  w-full xl:w-64 lg:w-64 lg:mt-2 xl:mt-2 font-semibold focus:outline-none text-white focus:shadow-inner focus:text-gray-900 focus:bg-white border-b-2 focus:border-gray-500 bg-gray-600 h-10 px-4 rounded-full">
            <input v-model="userInfo" placeholder="О вас" type="text" class="placeholder-white shadow-inner focus:placeholder-gray-500  w-full xl:w-64 lg:w-64 lg:mt-2 xl:mt-2 font-semibold focus:outline-none mt-2 text-white focus:shadow-inner focus:text-gray-900 focus:bg-white border-b-2 focus:border-gray-500 bg-gray-600 h-10 px-4 rounded-full">
            <p v-if="$v.name.$dirty && !$v.name.required" class="text-red-500 text-xs italic pt-1">Поле не должно быть пустым!</p>
            <p v-if="!$v.name.minLength" class="text-red-500 text-xs italic pt-1">Поле должно быть больше 3 букв</p>

          </div>
      </div>
      <p v-show="loading" class="text-red-500">Пожалуйста, дождитесь окончания загрузки!</p>
      <label for="file-input" class="focus:outline-none mx-auto block text-center pt-3 bg-green-600 font-semibold h-12 w-48 rounded-full mt-8 mb-8 text-white">Добавить фото</label>
      <input type="file" id="file-input" class="img-input" @change="onFileSelected">
      <button v-if="this.info.profile.name.length < 3" @click.prevent="nextPage" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 font-semibold h-12 w-48 rounded-full mt-4 mb-8 text-white">Дальше</button>
      <button v-else @click.prevent="saveInfo" @click="onUpload" class="mx-auto block focus:outline-none bg-blue-500 font-semibold h-12 w-48 rounded-full mt-4 mb-8 text-white">Сохранить</button>

    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { required, minLength  } from 'vuelidate/lib/validators'
import { HalfCircleSpinner } from 'epic-spinners'


export default {
  metaInfo: {
    title: `User`,
  },
  data: () => ({
    selectedFile: null,
    name: '',
    uid: '',
    userInfo: '',
    loading: false
  }),
  async mounted() {
    this.info = await this.$store.dispatch('fetchInfo');
    this.uid = await this.$store.dispatch('getUid');
    this.selectedFile = this.info.profile.photo
    this.name = this.info.profile.name
    this.userInfo = this.info.profile.userInfo
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
  },
  methods: {
    async onUpload() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const Info = {
        name: this.name,
        photo: this.selectedFile,
        userInfo: this.userInfo

      }
      await this.$store.dispatch('updatePhoto', Info);

      
    },
    onFileSelected(event) {
      const file = event.target.files[0]
      var storageRef = firebase.storage().ref(`users/${this.uid}/` + file.name);
      this.loading = true
      let uploadTask = storageRef.put(file);
      uploadTask.on('state_changed', (snapshot) =>{
        console.log(snapshot)
      }, (error) => {
        console.log(error)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.selectedFile = downloadURL
          console.log(downloadURL)
          this.loading = false

        })
      })
    },
    nextPage() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if(this.loading === false) {
        this.$router.push({ name: 'UserInfo' })
      } else {
        console.log("Wait")
      }     
    },
    saveInfo() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if(this.loading === false) {
        this.$router.push({ name: 'Edit' })
      } else {
        console.log("Wait")
      }     
    },
    backRoute() {
      this.$router.go(-1)
    },
  },
  computed: {
    info() {
      return this.$store.getters.info
    }
  },
  components: {
    HalfCircleSpinner, 
  }
  
  
}
</script>
<style scoped>
  .img-input {
    display: none;
  }
  
  .back-color {
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #111111 74%);
    height: auto !important;
    min-height: 100%;
    height: 100%;
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