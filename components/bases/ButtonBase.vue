<template>
  <div class="button-base" :class="{danger}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ButtonBase extends Vue {
  @Prop(Boolean) readonly danger!: boolean;
}
</script>

<style lang="scss" scoped>
.button-base {
  border-radius: 5px;
  padding: 6px 12px;
  background-color: $corp-2;

  &.danger {
    background-color: $red;
  }
}
</style>
