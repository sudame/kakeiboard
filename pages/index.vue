<template>
  <div class="global">
    <editor v-if="isEditing"></editor>
    <loading></loading>
    <top-bar class="global__topbar">
      <template slot="label">kakeiboard</template>
      <template slot="action">
        <my-button class="my-button">
          <div slot="icon">
            <i class="fas fa-user"></i>
          </div>
          <div slot="label">
            <template v-if="user">{{user.name}} 様</template>
          </div>
        </my-button>
        <my-button @click.native="logout" class="my-button" danger>
          <div slot="icon">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <div slot="label">
            <template v-if="user">ログアウト</template>
          </div>
        </my-button>
      </template>
    </top-bar>
    <main-panel class="global__main"></main-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import _ from "lodash";

import firebase from "~/plugins/firebase";

import editorModule from "~/store/editor";
import userModule, { User } from "~/store/user";

import TopBar from "../components/TopBar.vue";
import MyButton from "../components/Button.vue";
import MainPanel from "../components/Main.vue";
import Editor from "~/components/Editor.vue";
import Loading from "~/components/Loading.vue";

@Component({
  components: {
    TopBar,
    MyButton,
    MainPanel,
    Editor,
    Loading
  }
})
export default class Index extends Vue {
  private editorStore = getModule(editorModule, this.$store);
  private userStore = getModule(userModule, this.$store);

  logout() {
    console.log("logout!");
    firebase.auth().signOut();
  }

  get isEditing(): boolean {
    return this.editorStore.isEditing;
  }

  get user(): User | null {
    return this.userStore.user;
  }

  @Watch("user", { immediate: true })
  onUserChanged(crr: User | null | {}, prev: User | null | {}) {
    if (_.isEmpty(crr)) {
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
.global {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.global__main {
  flex: 1;
}

.my-button {
  margin-right: 6px;

  &:last-child {
    margin-right: auto;
  }
}
</style>
