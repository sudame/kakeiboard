<template>
  <div class="card-header">
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-header {
  background-color: $corp-2;
  border-radius: 5px 5px 0 0;
  color: $white;
}

h3 {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>
