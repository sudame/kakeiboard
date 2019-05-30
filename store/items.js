export const state = () => ({
  want: [
    {
      id: 1,
      title: "title",
      price: 1000
    },
    {
      id: 2,
      title: "title2",
      price: 2000
    }
  ],
  will: [
    {
      id: 3,
      title: "title3",
      price: 3000
    }
  ],
  done: []
})

export const mutations = {
  update(state, { name, items }) {
    state[name] = items;
  },
}

export const getters = {
  getPrice: (state) => (name) => {
    const items = state[name];
    let res = 0;
    items.forEach(item => {
      res += item.price;
    });
    return res;
  }
}
