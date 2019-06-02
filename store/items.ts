import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import firebase from '~/plugins/firebase';

const db = firebase.firestore().collection('items');

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
  [ItemState.WANT]: Array<Item> = [];
  [ItemState.WILL]: Array<Item> = [];
  [ItemState.DONE]: Array<Item> = [];

  private uid: string | null = null;

  @Mutation
  update({ state, items }: { state: ItemState, items: Array<Item> }) {
    items.forEach(item => item.state = state);
    if (this.uid !== null) {
      db.doc(this.uid as string).update({
        [state]: items,
      });
    }
  }

  @Mutation
  loadFromFirestore({ state, items }: { state: ItemState, items: Item[] }) {
    this[state] = items;
  }

  @Mutation
  editItem(item: Item) {
    const targetIdx: number = this[item.state].findIndex(el => el.id == item.id);
    console.log(this[item.state][targetIdx]);
    if (targetIdx === -1) return;
    const newItems: Item[] = this[item.state].slice();
    newItems[targetIdx] = Object.assign({}, item);

    console.log({
      [item.state]: newItems
    });
    db.doc(this.uid as string).update({
      [item.state]: newItems
    });
  }

  @Mutation
  addItem(item: Item) {
    db.doc(this.uid as string).update({
      [item.state]: this[item.state].concat(item),
    });
  }

  @Mutation
  deleteItem(target: Item) {
    const idx: number = this[target.state].findIndex(item => item.id === target.id);
    const temp: Item[] = [...this[target.state]];
    temp.splice(idx, 1);
    db.doc(this.uid as string).update({
      [target.state]: [...temp],
    });
  }

  @Mutation
  setUID(uid: string) {
    this.uid = uid;
  }

  get prices(): Prices {

    // getterからクラスインスタンスのメソッドにアクセスできない
    // おそらくvuex-module-decorators依存のバグだと思うが……
    function _getPrice(items: Array<Item>): number {
      let sum: number = 0;
      items.forEach(item => {
        sum += new Number(item.price) as number;
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
