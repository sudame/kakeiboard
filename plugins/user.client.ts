import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import firebase from '~/plugins/firebase';
import userModule, { User } from '~/store/user';


export default ({ store }: { store: Store<any> }) => {
  const userStore = getModule(userModule, store);

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user !== null) userStore.setUser(new User(
      user.displayName || '',
      user.uid,
      user.email || '',
    ));
    else userStore.setUser(null);
  }, (error: firebase.auth.Error) => {
    console.log(error);
  })
}
