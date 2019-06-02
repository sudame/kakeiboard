<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardBase extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  @include elevation();
  background-color: $white;
  width: 100%;
  min-width: 50px;

  & .card-element {
    padding: 12px;
  }
}
</style>
