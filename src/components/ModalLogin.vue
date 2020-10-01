<template>
  <div>
    <div class="user float-right">
      <a class="text-white xl:text-white lg:text-white text-2xl" @click="show"><i class="fas fa-user"></i></a>  
    </div>
    <modal  :width="600"
            :height="450"
            :adaptive="true" 
            name="modal">
      <div class="logo mt-8">
        <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-ptag.appspot.com/o/Untitled-1.png?alt=media&token=7f56f310-4943-4496-aace-66d2da242f0f" alt="">
      </div>
      <div class="w-full">
        <form @submit.prevent="submitHandler" class="bg-white px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Имя пользователя
            </label>
            <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Имя пользователя">
            <p v-if="$v.email.$dirty && !$v.email.required" class="text-red-500 text-xs italic">Пожалуйста, выберите email</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Пароль
            </label>
            <input v-model="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="***************">
            <p v-if="$v.email.$dirty && !$v.email.required" class="text-red-500 text-xs italic">Пожалуйста, выберите пароль</p>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="button-modal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Войти
            </button>
            <a class="inline-block align-baseline font-bold text-sm forget-modal" href="https://t.me/protag1">
              Забыли пароль?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy; 2020 PROTAG.UZ — Электронная тег метка.
        </p>
      </div>
    </modal>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'MyComponent',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {
      required,
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  
  methods: {
    show () {
      this.$modal.show('modal');
    },
    hide () {
      this.$modal.hide('modal');
    },
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/Edit')
        console.log(formData)
      } catch (e) {
        console.log(e)
      }
      
    }
  },
  mount () {
    this.show()
  }
}
</script>
<style scoped>
  
  
  .logo img {
    width: 50px;
  }
  .button-modal {
    background: #009EFA;
  }
  .forget-modal {
    color: #009EFA;
  }
  .button-modal:hover {
    background: #845EC2;
  }
  .forget-modal:hover {
    color: #845EC2;
  }
</style>