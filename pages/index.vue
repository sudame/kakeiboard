<template>
  <div class="global">
    <editor v-if="isEditing"></editor>
    <top-bar class="global__topbar">
      <template slot="label">kakeiboard</template>
      <my-button slot="action">
        <div slot="icon">
          <i class="fas fa-user"></i>
        </div>
        <div slot="label">須田幹大 様</div>
      </my-button>
    </top-bar>
    <main-panel class="global__main"></main-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import editorModule from "~/store/editor";
import TopBar from "../components/TopBar.vue";
import MyButton from "../components/Button.vue";
import MainPanel from "../components/Main.vue";
import Editor from "~/components/Editor.vue";

@Component({
  components: {
    TopBar,
    MyButton,
    MainPanel,
    Editor
  }
})
export default class Index extends Vue {
  private editorStore = getModule(editorModule, this.$store);

  get isEditing(): boolean {
    return this.editorStore.isEditing;
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
</style>
