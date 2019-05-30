export const state = () => ({
  counter: 0
})

export const mutations = {
  update(state) {
    state.counter++
  }
}
