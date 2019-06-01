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
  items: Array<Item> = [
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
    },
    {
      id: 3,
      title: "title3",
      price: 3000,
      state: ItemState.WILL
    }
  ];

  @Mutation
  update({ name, items }: { name: string, items: Array<Item> }) {
    this[name] = items;
  }

  @Mutation
  editMutation({ target, item }: { target: Item, item: Item }) {
    target = item;
  }

  @Mutation
  updateState({ target, state }: { target: Item, state: ItemState }) {
    console.log(target, state);
    this.items.filter(item => item.id === target.id)[0].state = state;
  }

  @Action({
    commit: 'editMutation'
  })
  editItem(item: Item) {
    let target: Item | undefined;
    target = this.will.filter(item => item.id == item.id)[0];
    if (typeof target == undefined) target = this.want.filter(item => item.id == item.id)[0];
    if (typeof target == undefined) target = this.done.filter(item => item.id == item.id)[0];
    if (typeof target == undefined) throw Error('cannot find item.');
    else {
      return {
        target,
        item,
      }
    }
  }

  get want(): Array<Item> {
    return this.items.filter(item => item.state === ItemState.WANT);
  }

  get will(): Array<Item> {
    return this.items.filter(item => item.state === ItemState.WILL);
  }

  get done(): Array<Item> {
    return this.items.filter(item => item.state === ItemState.DONE);
  }

  get prices(): Prices {
    // getterからクラスインスタンスのメソッドにアクセスできない
    // おそらくvuex-module-decorators依存のバグだと思うが……
    function _getPrice(items: Array<Item>): number {
      let sum = 0;
      items.forEach(item => {
        sum += item.price;
      });
      return sum;
    }

    return {
      want: _getPrice(this.want),
      will: _getPrice(this.will),
      done: _getPrice(this.done),
    }
  }
}
