import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Item, ItemState } from './items';

@Module({ name: 'editor', stateFactory: true, namespaced: true })
export default class RootStore extends VuexModule {
  isEditing: boolean = false;
  editingItem: Item = {
    id: 0,
    price: 0,
    state: ItemState.WANT,
    title: '',
  }


  @Mutation
  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  @Mutation
  setEditingItem(item: Item) {
    this.editingItem = Object.assign({}, item);
  }

  @Mutation
  resetEditingItem() {
    this.editingItem = Object.assign({}, {
      id: 0,
      price: 0,
      state: ItemState.WANT,
      title: '',
    });
  }
}
