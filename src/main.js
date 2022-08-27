import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import ScrollAnimation from './directives/scrollanimation.js'
import VueSplide from '@splidejs/vue-splide';
import Toasted from 'vue-toasted';



import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


Vue.use(VModal)
Vue.use(Vuelidate)
Vue.use( VueSplide );
Vue.use(Toasted)
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'AIzaSyD2NIDN4tMD9mgje1p9afSMYGVq-efB1BY',
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || 'protaguz.firebaseapp.com',
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL || 'https://protaguz.firebaseio.com',
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || 'protaguz',
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || 'protaguz.appspot.com',
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || '93911669551',
    appId: process.env.VUE_APP_FIREBASE_APP_ID || '1:93911669551:web:b08d63f6cf7b64caf29fda',
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || 'G-7SGMZXGL8B'
});

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})


