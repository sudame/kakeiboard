<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  @include elevation();
  background-color: $white;
  width: 100%;
  min-width: 50px;

  & .card-element {
    padding: 3px 12px;
  }
}
</style>
