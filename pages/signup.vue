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
      <div class="field">
        <label for="password-conf" class="label">パスワード(確認)</label>
        <input
          type="password"
          class="input text"
          id="password-conf"
          name="password-conf"
          v-model="passwordconf"
        >
      </div>
      <div class="field">
        <label for="username" class="label">お名前</label>
        <input type="text" class="input text" id="username" name="username" v-model="username">
      </div>
      <div class="field right">
        <button class="input button" @click="signup">登録</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "~/plugins/firebase";
import { getModule } from "vuex-module-decorators";
import _ from "lodash";

import userModule, { User } from "~/store/user";

@Component
export default class Login extends Vue {
  private email: string = "";
  private password: string = "";
  private passwordconf: string = "";
  private username: string = "";

  private passwordsNotMatch: boolean = false;

  private userStore = getModule(userModule, this.$store);

  async signup() {
    if (this.password !== this.passwordconf) {
      this.passwordsNotMatch = true;
      return;
    }
    this.passwordsNotMatch = false;

    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password);
    const user = res.user;
    if (user === null) return;
    await user.updateProfile({
      displayName: this.username
    });
    if (!_.isEmpty(user)) {
      this.userStore.setUser(
        new User(user.displayName || "", user.uid, user.email || "")
      );
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
