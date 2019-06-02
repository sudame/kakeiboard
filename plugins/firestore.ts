import { Store } from 'vuex';

import { getModule } from "vuex-module-decorators";
import ItemModule, { ItemState, Item } from '~/store/items';

import firebase from '~/plugins/firebase'

export default async (store: Store<any>, uid: string) => {
  console.log('[UID]', uid);
  console.log('[CURRENT USER]', (firebase.auth().currentUser as firebase.User).uid);
  const itemStore = getModule(ItemModule, store);
  const db = firebase.firestore().collection('items').doc(uid);

  // 存在チェック(初回に必要)
  await checkExist(db);

  return db.onSnapshot((dSnap) => {
    const data = dSnap.data();
    if (!data) return;

    data[ItemState.WANT].forEach((item) => {
      item.timestamp = item.timestamp ? (item.timestamp as firebase.firestore.Timestamp).toDate() : null;
    });

    data[ItemState.WILL].forEach((item) => {
      item.timestamp = item.timestamp ? (item.timestamp as firebase.firestore.Timestamp).toDate() : null;
    });

    data[ItemState.DONE].forEach((item) => {
      item.timestamp = item.timestamp ? (item.timestamp as firebase.firestore.Timestamp).toDate() : null;
    });


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

const checkExist = async (db: firebase.firestore.DocumentReference) => {
  return new Promise((resolve, reject) => {
    let counter: number = 0;
    const timeout: NodeJS.Timeout = setInterval(() => {
      db.get().then((q) => {
        console.log(q.exists);
        if (q.exists) {
          clearInterval(timeout);
          resolve();
        }
      }).catch((e) => {
        console.log(e.code);
        console.log(counter);
        if (++counter > 10) {
          reject();
          clearInterval(timeout);
        }
      });
    }, 500);
  });
}
