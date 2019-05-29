<template>
  <div class="top-bar-base">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.top-bar-base {
  height: 75px;
  padding: 12px 24px;
  border-bottom: 1px solid $background;
}
</style>
