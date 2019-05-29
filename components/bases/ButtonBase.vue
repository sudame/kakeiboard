<template>
  <div class="button-base">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-base {
  border-radius: 5px;
  padding: 6px 12px;
  background-color: $corp-2;
}
</style>
