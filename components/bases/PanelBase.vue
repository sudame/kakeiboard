<template>
  <div class="panel-base">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PanelBase extends Vue {}
</script>

<style lang="scss" scoped>
.panel-base {
  background-color: $background-light;
  @include elevation();

  & .panel-child {
    padding: 6px 12px;
  }
}
</style>
