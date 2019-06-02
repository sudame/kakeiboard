import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Item, ItemState } from './items';

@Module({ name: 'editor', stateFactory: true, namespaced: true })
export default class RootStore extends VuexModule {
  isNewItem: boolean = false;
  isEditing: boolean = false;
  editingItem: Item = {
    id: 0,
    price: 0,
    timestamp: new Date(),
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
      timestamp: new Date(),
      state: ItemState.WANT,
      title: '',
    });
  }

  @Mutation
  setIsNewItem(isNewItem: boolean) {
    this.isNewItem = isNewItem;
  }

  @Mutation
  setItemState(state: ItemState) {
    this.editingItem.state = state;
  }
}
