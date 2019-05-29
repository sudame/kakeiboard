<template>
  <div class="panel-base">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-base {
  background-color: $background-light;
  @include elevation();

  & .panel-child {
    padding: 12px 24px;
  }
}
</style>
