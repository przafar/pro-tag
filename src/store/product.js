import firebase from 'firebase/app'

let cart = window.localStorage.getItem('cart')
export default {
  state: {
    cart: cart ? JSON.parse(cart) : [],
    questions: [],
    info: {},
    error: null
  },
  mutations: {
    addToCart(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) { 
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          return state.cart.push(product) 
        }
      } else {
        return state.cart.push(product)

      }
      this.commit('saveData')
    },
    loadQuestions(state, item) {
      state.questions = item
    },
    loadCommit(state, item) {
      state.comment = item
    },
    saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart)) 
    },
    removeFromCart(state, item) {
      state.cart.splice(item, 1)
      this.commit('saveData')
      this.$toasted.show("Добавлено!", { 
        theme: "outline", 
        position: "top-right", 
        duration : 2000
      });
    },
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
    setError(state, error) {
      state.error = error
    },
    
  },
  actions: {  
    async fetchAmount({commit}) {
      try {
        const info = (await firebase.database().ref(`/products/limit`).once('value')).val()
        return Object.keys(info).map(key => ({...info[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchInfo({commit}) {
      try {
        const questions = (await firebase.database().ref(`/products/questions`).once('value')).val()
        const cats = []
        Object.keys(questions).forEach(key => {
          cats.push({
            answer: questions[key].answer,
            question: questions[key].question,
            id: key
          })
          commit('loadQuestions', questions)
        })
        return cats  
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchProduct({commit}) {
      try {
        const info = (await firebase.database().ref(`/products/color`).once('value')).val()
        return Object.keys(info).map(key => ({...info[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchProductById({commit}, id) {
      try{
        const product = (await firebase.database().ref(`/products/limit`).child(id).once('value')).val() || {}
        return {...product, id}
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchLimited({commit}) {
      try {
        const info = (await firebase.database().ref(`/products/limit`).once('value')).val()
        return Object.keys(info).map(key => ({...info[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async updateAmount({commit}, {amountSimple, amountLimited, amountCustom}) {
      try {
        const info = await firebase.database().ref(`/products`).update({amountSimple, amountLimited, amountCustom})
        return {amountSimple, amountLimited, amountCustom, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    
  },
  getters: {
    PRODUCTS: state => {
      return state.cart
    },
    getTodoById: (state) => (id) => {
      return state.cart.find(todo => todo.id === id)
    },

  }
  
}