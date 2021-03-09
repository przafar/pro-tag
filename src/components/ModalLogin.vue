<template>
  <div>
    <div class="mr-12 md:mr-16 lg:mr-16 xl:mr-16">
      <a class="text-black flex mt-2" @click="show"><i class="fas fa-user-circle text-3xl mt-0 mr-2 "></i><p class="text-xl hidden md:block lg:block xl:block">Войти</p></a>  
    </div>
    <modal  :width="600"
            :height="450"
            :adaptive="true" 
            name="modal">
      <div class="logo mt-8">
        <svg class="mx-auto" width="45" height="48" xmlns="http://www.w3.org/2000/svg" stroke="null" style="vector-effect: non-scaling-stroke;" preserveAspectRatio="xMidYMid meet">
          <g stroke="null">
            <g transform="translate(0,246) scale(0.10000000149011612,-0.10000000149011612) " id="svg_1" fill="#000000">
            <path stroke="null" id="svg_2" d="m166.03581,2429.67565c-30.20686,-16.2368 -71.45484,-38.53794 -91.45387,-49.68852c-19.99902,-10.95495 -42.08128,-22.88802 -48.74762,-26.40925c-6.66634,-3.52123 -15.41591,-8.99871 -19.16573,-12.32432l-7.08299,-5.6731l0,-117.76569l0,-117.76569l5.62473,-4.8906c8.74957,-7.62934 24.99878,-15.64993 28.54027,-14.28056c2.91652,1.17374 3.33317,13.69369 3.33317,119.91756l0,118.54819l43.33122,23.27927c23.74884,12.91119 64.16353,34.82109 89.99561,48.7104c25.83207,13.88931 48.95594,26.21363 51.2475,27.19175c4.79143,2.15186 5.83305,1.56499 61.24701,-28.75674c13.12436,-7.23809 47.706,-25.82238 76.66292,-41.4723l52.49744,-28.36549l0,-102.11577l0,-101.92014l-30.83183,-16.62805c-16.87418,-8.99871 -41.24799,-22.30114 -54.16402,-29.34361c-12.91604,-7.04247 -25.2071,-13.49806 -27.08201,-14.67181c-2.08323,-0.97812 -18.33244,-9.7812 -36.24823,-19.56241c-20.83232,-11.15057 -33.74835,-19.36678 -35.83158,-22.69239c-4.58311,-7.23809 -4.79143,-32.66922 -0.20832,-34.42984c1.87491,-0.58687 13.33268,4.49935 27.70698,12.12869c125.20222,67.49031 184.99097,100.55078 189.15743,104.46326l4.99976,4.69498l0,117.96132l0,117.96132l-4.58311,4.8906c-2.7082,2.54311 -20.62399,13.30244 -40.20637,23.86614c-19.37405,10.36808 -47.49768,25.62675 -62.49695,33.64734c-107.9114,58.68722 -112.49451,61.03471 -117.70259,61.03471c-1.87491,0 -28.12363,-13.30244 -58.53881,-29.53924z"/>
            <path stroke="null" id="svg_3" d="m179.78514,2359.05536c-21.66561,-11.93307 -52.70576,-28.56112 -68.74664,-37.3642c-16.04088,-8.60746 -31.24847,-17.99742 -33.74835,-20.73615l-4.79143,-5.08623l0,-115.80945c0,-85.09647 0.62497,-117.17882 2.49988,-120.89568c1.45826,-2.93436 7.91628,-8.02059 15.62424,-12.12869c10.8328,-5.47747 13.74933,-6.45559 16.24921,-4.49935c2.7082,2.15186 3.12485,18.77991 3.12485,120.11318l0,117.76569l26.66536,14.47618c14.58262,7.82496 39.99805,21.71427 56.45558,30.71298c16.45753,8.80308 30.83183,16.2368 32.08177,16.2368c1.04162,0 18.54076,-8.99871 38.74811,-19.95366c20.20735,-10.95495 45.8311,-24.84426 57.08055,-30.71298l20.20735,-10.95495l0,-62.01283l-0.20832,-62.20846l-20.20735,-11.15057c-11.04113,-6.25997 -24.58213,-13.49806 -29.79021,-16.2368c-38.95643,-20.14928 -60.20539,-32.86484 -63.12192,-37.3642c-4.58311,-7.23809 -4.58311,-32.66922 -0.20832,-34.42984c1.87491,-0.58687 14.3743,4.8906 29.79021,13.30244c14.58262,7.82496 45.20613,24.25739 68.12167,36.5817c22.91555,12.32432 43.95619,24.64863 46.87271,27.19175l5.20808,4.49935l0.41665,78.8365c0.62497,73.75028 0.41665,78.8365 -3.33317,82.94461c-2.91652,3.32561 -57.91384,34.23421 -117.07762,65.72969c-4.99976,2.54311 -13.33268,7.04247 -18.54076,9.97683c-5.20808,2.73874 -11.6661,5.08623 -14.58262,4.8906c-2.91652,0 -22.91555,-9.7812 -44.78948,-21.71427z"/>
            <path stroke="null" id="svg_4" d="m187.07645,2278.06699c-16.66585,-9.19433 -31.4568,-17.99742 -32.70674,-19.75803c-2.08323,-2.54311 -2.7082,-29.93048 -2.7082,-121.8738l0,-118.54819l5.83305,-5.08623c13.54101,-11.73744 27.9153,-16.43242 30.41518,-10.17245c0.62497,1.76062 1.24994,36.97295 1.24994,78.44525l0,75.11965l15.41591,-7.82496c8.33293,-4.49935 17.91579,-8.02059 20.83232,-8.02059c6.66634,0 62.49695,29.34361 69.57994,36.5817c4.37479,4.49935 4.58311,6.06435 4.58311,40.68981l0,36.19045l-5.62473,5.6731c-3.33317,3.12999 -11.04113,8.21621 -17.29082,11.54182c-6.24969,3.12999 -18.74908,9.7812 -27.70698,14.67181c-23.12387,12.91119 -24.99878,12.71557 -61.87198,-7.62934zm57.08055,-30.32173l17.91579,-9.7812l0,-20.3449l0,-20.14928l-18.12412,-9.58558c-9.79119,-5.08623 -18.95741,-9.19433 -19.99902,-8.80308c-1.04162,0.19562 -9.37454,4.49935 -18.33244,9.38996l-16.66585,8.99871l0.62497,20.73615l0.62497,20.54053l16.66585,9.38996c9.16622,5.28185 17.29082,9.38996 18.12412,9.58558c0.62497,0 9.37454,-4.49935 19.16573,-9.97683z"/>
            </g>
          </g>
        </svg>
      </div>
      <div class="w-full">
        <form @submit.prevent="submitHandler" class="bg-white px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-lg mb-2" for="username">
              Логин
            </label>
            <input v-model="email" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="protag0000@tag.com">
            <p v-if="$v.email.$dirty && !$v.email.required" class="text-red-500 text-xs italic">Пожалуйста, выберите email</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-lg mb-2" for="password">
              Пароль
            </label>
            <input v-model="password" type="password" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="*******">
            <p v-if="$v.email.$dirty && !$v.email.required" class="text-red-500 text-xs italic">Пожалуйста, выберите пароль</p>
            <p v-show="notFound" class="text-red-500 text-xs italic">Пользователь не существует.</p>

          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="button-modal text-white text-lg py-2 px-6 focus:outline-none focus:shadow-outline">
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
  props: ['logo'],
  data: () => ({
    email: '',
    password: '',
    notFound: false
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
      } catch (e) {
        console.log(e)
        this.notFound = true
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
    background: #181818;
  }
  .forget-modal {
    color: #181818;
  }
  .button-modal:hover {
    background: #000000;
  }
  .forget-modal:hover {
    color: #000000;
  }
</style>