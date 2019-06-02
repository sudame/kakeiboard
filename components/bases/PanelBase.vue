<template>
  <div class="panel-base" :class="{summary}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PanelBase extends Vue {
  @Prop({ default: false }) summary!: boolean;
}
</script>

<style lang="scss" scoped>
.panel-base {
  background-color: $background-light;
  @include elevation();

  &.summary {
    background-color: $corp-2;
  }

  & .panel-child {
    padding: 6px 12px;
  }
}
</style>
