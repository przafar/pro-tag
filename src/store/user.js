import firebase from 'firebase/app'

export default {
  state: {
    users: [],
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    setUsers(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
    loadInfo(state, item) {
      state.users = item
    },
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    
    async fetchUser({commit}) {
      try {
        const comment = (await firebase.database().ref('/users').once('value')).val() || {}
        return Object.keys(comment).map(key => ({...comment[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchShoesById({commit}, id) {
      try{
        const shoe = (await firebase.database().ref(`/users`).child(id).once('value')).val() || {}
        return {...shoe, id}
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async updateInfo({dispatch, commit}, {instagram, telegram, whatsapp, phone, tiktok, mail}) {
      try {
        const uid = await dispatch('getUid')
        const info = await firebase.database().ref(`/users/${uid}/profile`).update({instagram, telegram, whatsapp, phone, tiktok, mail})
        return {whatsapp, phone, instagram, tiktok, telegram, mail, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async updateUrl({dispatch, commit}, {facebook, payme, snapchat, youtube, website}) {
      try {
        const uid = await dispatch('getUid')
        const info = await firebase.database().ref(`/users/${uid}/profile`).update({facebook, payme, snapchat, youtube, website})
        return {payme, snapchat, youtube, facebook, website, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async updatePhoto({dispatch, commit}, {photo, name, userInfo}) {
      try {
        const uid = await dispatch('getUid')
        const info = await firebase.database().ref(`/users/${uid}/profile`).update({photo, name, userInfo})
        return {name, photo, userInfo, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async updateBack({dispatch, commit}, {back}) {
      try {
        const uid = await dispatch('getUid')
        const info = await firebase.database().ref(`/users/${uid}/profile`).update({back})
        return {back, id: info.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    
  },
  getters: {
    info: s => s.info,
    users: s => s.users,
  }
}