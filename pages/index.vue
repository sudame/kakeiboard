<template>
  <div class="global">
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

<script>
import TopBar from "../components/TopBar";
import MyButton from "../components/Button";
import MainPanel from "../components/Main";

export default {
  components: {
    TopBar,
    MyButton,
    MainPanel
  }
};
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
