import { Store } from 'vuex';

import { getModule } from "vuex-module-decorators";
import ItemModule, { ItemState } from '~/store/items';

import firebase from '~/plugins/firebase'

export default (store: Store<any>, uid: string) => {
  const itemStore = getModule(ItemModule, store);
  const db = firebase.firestore().collection('items').doc(uid);

  db.onSnapshot((dSnap) => {
    const data = dSnap.data();
    if (!data) return;
    itemStore.loadFromFirestore({
      items: data[ItemState.WANT],
      state: ItemState.WANT
    });
    itemStore.loadFromFirestore({
      items: data[ItemState.WILL],
      state: ItemState.WILL
    });
    itemStore.loadFromFirestore({
      items: data[ItemState.DONE],
      state: ItemState.DONE
    });
  })
};
