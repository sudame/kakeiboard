<template>
  <div>
    <top-bar-base>
      <div class="top-bar">
        <h1 class="logo">
          <slot name="label"></slot>
        </h1>
        <div class="space"></div>
        <div class="topbar__actions">
          <slot name="action"></slot>
        </div>
      </div>
    </top-bar-base>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TopBarBase from "./bases/TopBarBase.vue";

@Component({
  components: {
    TopBarBase
  }
})
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
  color: $corp-2;
  font-size: 40px;
  line-height: 51px;
}

.top-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.topbar__actions {
  display: flex;
  flex-direction: row;
}

.space {
  flex: 1;
}
</style>
