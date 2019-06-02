import createPersistedState from 'vuex-persistedstate'

declare global {
  interface Window { onNuxtReady: any }
}

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState()(store)
  })
}
