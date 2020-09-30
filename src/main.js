import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import ScrollAnimation from './directives/scrollanimation.js'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


Vue.use(VModal)
Vue.use(Vuelidate)
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBpMzE6rIgCMdUcHZb-VUN3BvxMI4drv1A",
  authDomain: "vue-ptag.firebaseapp.com",
  databaseURL: "https://vue-ptag.firebaseio.com",
  projectId: "vue-ptag",
  storageBucket: "vue-ptag.appspot.com",
  messagingSenderId: "300655684474",
  appId: "1:300655684474:web:fe73408c0df945932d04c3",
  measurementId: "G-MWWVWD28W8"
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


