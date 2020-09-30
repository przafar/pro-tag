import firebase from 'firebase/app'

export default {
  state: {
    error: null,
  },
  mutations: { 
    setError(state, error) {
      state.error = error
    },
  },
  getters: {
    error: s => s.error,
  },
  actions: {
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, date}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          date,
          email
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async registerProfile({dispatch, commit}, {instagram, tiktok, telegram, facebook, photo, name, userInfo, payme, snapchat, whatsapp, phone, youtube}) {
      try {
        const uid = await dispatch('getUid')
        const info = await firebase.database().ref(`/users/${uid}/profile`).update({instagram, tiktok, telegram, facebook, photo, name, userInfo, payme, snapchat, whatsapp, phone, youtube})
        return {instagram, tiktok, telegram, facebook, photo, name, payme, snapchat, whatsapp, phone, youtube, userInfo, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout({commit}) {
      await firebase.auth().signOut()
      await commit('clearInfo')
    },
  }
}