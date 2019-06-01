import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

export enum ItemState {
  WANT, WILL, DONE,
}
export interface Item {
  id: number;
  title: string;
  price: number;
  state: ItemState;
}

export interface Prices {
  want: number;
  will: number;
  done: number;
}

@Module({ name: 'items', stateFactory: true, namespaced: true })
export default class ItemsStore extends VuexModule {
  [ItemState.WANT]: Array<Item> = [
    {
      id: 1,
      title: "title",
      price: 1000,
      state: ItemState.WANT
    },
    {
      id: 2,
      title: "title2",
      price: 2000,
      state: ItemState.WANT
    }
  ];
  [ItemState.WILL]: Array<Item> = [
    {
      id: 3,
      title: "title3",
      price: 3000,
      state: ItemState.WILL
    }
  ];
  [ItemState.DONE]: Array<Item> = [];

  @Mutation
  update({ state, items }: { state: ItemState, items: Array<Item> }) {
    items.forEach(item => item.state = state);
    this[state] = items;
  }

  @Mutation
  editMutation({ target, item }: { target: Item, item: Item }) {
    target = item;
  }

  @Mutation
  editItem(item: Item) {
    const targetIdx: number = this[item.state].findIndex(el => el.id == item.id);
    console.log(this[item.state][targetIdx]);
    if (targetIdx === -1) return;

    const newItems: Item[] = this[item.state].slice();
    newItems[targetIdx] = Object.assign({}, item);
    this[item.state] = newItems;
  }

  @Mutation
  addItem(item: Item) {
    this[item.state] = this[item.state].concat(item);
  }

  @Mutation
  deleteItem(target: Item) {
    const idx: number = this[target.state].findIndex(item => item.id === target.id);
    const temp: Item[] = [...this[target.state]];
    temp.splice(idx, 1);
    this[target.state] = [...temp];
  }

  get prices(): Prices {

    // getterからクラスインスタンスのメソッドにアクセスできない
    // おそらくvuex-module-decorators依存のバグだと思うが……
    function _getPrice(items: Array<Item>): number {
      let sum: number = 0;
      items.forEach(item => {
        sum += item.price;
      });
      return sum;
    }

    return {
      want: _getPrice(this[ItemState.WANT]),
      will: _getPrice(this[ItemState.WILL]),
      done: _getPrice(this[ItemState.DONE]),
    }
  }

  get nextID(): number {
    const items = this[ItemState.WANT].concat(this[ItemState.WILL]).concat(this[ItemState.DONE]);
    let max: number = -1;
    items.forEach(item => {
      if (item.id > max) max = item.id;
    });
    return max + 1;
  }
}
