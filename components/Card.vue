<template>
  <card-base class="card">
    <div class="card__container">
      <card-header class="card-element">
        <template>kakeiboard</template>
      </card-header>
      <div class="card__body"></div>
    </div>
  </card-base>
</template>

<script>
import CardHeader from "./bases/CardHeader";
import CardBase from "./bases/CardBase";
export default {
  components: {
    CardBase,
    CardHeader
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 12px auto;
}

.card__body {
  min-height: 5rem;
}
</style>