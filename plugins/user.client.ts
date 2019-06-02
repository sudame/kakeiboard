import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import listener from '~/plugins/firestore';

import firebase from '~/plugins/firebase';
import userModule, { User } from '~/store/user';
import itemModule from '~/store/items';
import { isNullOrUndefined } from 'util';


export default ({ store }: { store: Store<any> }) => {
  const userStore = getModule(userModule, store);
  const itemStore = getModule(itemModule, store);
  let unsubscribe: firebase.Unsubscribe;

  firebase.auth().onAuthStateChanged(async (user: firebase.User | null) => {
    if (user !== null) {
      userStore.setUser(new User(
        user.displayName || '',
        user.uid,
        user.email || '',
      ));
      itemStore.setUID(user.uid);
      unsubscribe = await listener(store, user.uid);
    }
    else {
      if (!isNullOrUndefined(unsubscribe)) unsubscribe();
      userStore.setUser(null);
      itemStore.resetAll();
    }
  }, (error: firebase.auth.Error) => {
    console.log(error);
  })
}
