import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import Home from '../views/Home.vue'
import User from '../views/user.vue'
import Edit from '../views/Edit.vue'
import Member from '../views/Member.vue'
import UserInfo from '../views/userInfo.vue'
import Userurl from '../views/userurl.vue'
import Back from '../views/Back.vue'
import Done from '../views/Done.vue'
import Phones from '../views/Phones.vue'
import Delivery from '../views/Delivery.vue'
import Contacts from '../views/Contacts.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history', 
  scrollBehavior(){
    return {
        x: 0,
        y: 0
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {layout: 'User', auth: false}

    },
    {
      path: '/Member/:id',
      name: 'Member',
      component: Member,
    },
    {
      path: '/User',
      name: "User",
      component: User,
      meta: {layout: 'User', auth: true}
    },
    {
      path: '/Edit',
      name: "Edit",
      component: Edit,
      meta: {layout: 'Edit', auth: true}
    },
    {
      path: '/UserInfo',
      name: "UserInfo",
      component: UserInfo,
      meta: {layout: 'UserInfo', auth: true}
    },
    {
      path: '/Userurl',
      name: "Userurl",
      component: Userurl,
      meta: {layout: 'Userurl', auth: true}
    },
    {
      path: '/back',
      name: "Back",
      component: Back,
      meta: {layout: 'Back', auth: true}
    },
    {
      path: '/done',
      name: "Done",
      component: Done,
      meta: {layout: 'Done', auth: true}
    },
    {
      path: '/Phones',
      name: "Phones",
      component: Phones
    },
    {
      path: '/Delivery',
      name: "Delivery",
      component: Delivery
    },
    {
      path: '/Contacts',
      name: "Contacts",
      component: Contacts
    },
    { 
      path: '/404', 
      name: '404', 
      component: NotFound, 
    }, { 
      path: '*', 
      redirect: '/404' 
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
  
  
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if(requireAuth && !currentUser) {
    next('./')
  } else {
    next()
  }
  
})

export default router
