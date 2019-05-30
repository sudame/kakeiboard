<template>
  <div class="button-base">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ButtonBase extends Vue {}
</script>

<style lang="scss" scoped>
.button-base {
  border-radius: 5px;
  padding: 6px 12px;
  background-color: $corp-2;
}
</style>
