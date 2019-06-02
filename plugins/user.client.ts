import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import firebase from '~/plugins/firebase';
import userModule, { User } from '~/store/user';
import itemModule from '~/store/items';


export default ({ store }: { store: Store<any> }) => {
  const userStore = getModule(userModule, store);
  const itemStore = getModule(itemModule, store);

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user !== null) {
      userStore.setUser(new User(
        user.displayName || '',
        user.uid,
        user.email || '',
      ));
      itemStore.setUID(user.uid);
    }
    else {
      userStore.setUser(null);
      itemStore.setUID('');
    }
  }, (error: firebase.auth.Error) => {
    console.log(error);
  })
}
