<template>
  <div class="top-bar-base">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBarBase extends Vue {}
</script>


<style lang="scss" scoped>
.top-bar-base {
  height: 75px;
  padding: 12px 24px;
  border-bottom: 1px solid $background;
}
</style>
