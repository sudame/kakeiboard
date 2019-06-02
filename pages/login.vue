<template>
  <div id="login-page">
    <h1>kakeiboard</h1>
    <div class="login-panel">
      <div class="field">
        <label for="email" class="label">メールアドレス</label>
        <input type="email" class="input text" id="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password" class="label">パスワード</label>
        <input type="password" class="input text" id="password" name="password" v-model="password">
      </div>
      <div class="field right">
        <button class="input button" @click="login">ログイン</button>
      </div>
      <div class="field center">
        <nuxt-link to="/signup">新規登録</nuxt-link>
        <a href="#">パスワードを忘れた場合</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import firebase from "~/plugins/firebase";
import { getModule } from "vuex-module-decorators";

import userModule, { User } from "~/store/user";

import _ from "lodash";

@Component
export default class Login extends Vue {
  private email: string = "";
  private password: string = "";

  private userStore = getModule(userModule, this.$store);

  async login() {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password);
    const user = res.user;
    if (!_.isEmpty(user)) {
      this.$router.push("/");
    }
  }

  get user() {
    return this.userStore.user;
  }

  @Watch("user", { immediate: true })
  onUserChanged(crr: User | null | {}, prev: User | null | {}) {
    if (!_.isEmpty(crr)) {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped>
#login-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $corp-2;
}

.login-panel {
  background-color: $white;
  padding: 24px;
  border-radius: 5px;
  min-width: 500px;
  @include elevation();
}

h1 {
  color: $white;
  margin: 24px auto;
  padding: 0;
}

h2 {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
</style>
