import { Module, VuexModule, Mutation } from "vuex-module-decorators";

export interface Item {
  id: number;
  title: string;
  price: number;
}

export interface Prices {
  want: number;
  will: number;
  done: number;
}

@Module({ name: 'items', stateFactory: true, namespaced: true })
export default class ItemsStore extends VuexModule {
  want: Array<Item> = [
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
  ];
  will: Array<Item> = [
    {
      id: 3,
      title: "title3",
      price: 3000
    }
  ];
  done: Array<Item> = [];

  @Mutation
  update({ name, items }: { name: string, items: Array<Item> }) {
    this[name] = items;
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
