import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import _ from 'lodash';
import firebsae, { FirebaseError } from 'firebase';

export class User {
  name: string;
  uid: string;
  email: string;

  constructor(name: string, uid: string, email: string) {
    this.name = name;
    this.uid = uid;
    this.email = email;
  }
}

@Module({ name: 'user', namespaced: true, stateFactory: true })
export default class UserModule extends VuexModule {
  user: User | null = null;

  @Mutation
  setUser(user: User | null) {
    this.user = user;
  }

  @Mutation
  resetUser() {
    this.user = null;
  }

  get isLogined(): boolean {
    return this.user !== null;
  }
}
