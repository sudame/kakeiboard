import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import _ from 'lodash';

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

  isReady: boolean = true;

  @Mutation
  setUser(user: User | null) {
    this.user = user;
  }

  @Mutation
  resetUser() {
    this.user = null;
  }

  @Mutation
  finishReady() {
    this.isReady = false;
  }

  get isLogined(): boolean {
    return this.user !== null;
  }
}
