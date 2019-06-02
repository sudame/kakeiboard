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
        <button class="input button">ログイン</button>
      </div>
      <div class="field center">
        <a href="#">新規登録</a>
        <a href="#">パスワードを忘れた場合</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private email: string = "";
  private password: string = "";
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
