<template>
  <card-base class="card">
    <div class="card__container">
      <card-header class="card-element">
        <template>{{ item.title }}</template>
      </card-header>
      <div class="card__body">{{ item.price }}円</div>
    </div>
  </card-base>
</template>

<script>
import CardHeader from "./bases/CardHeader";
import CardBase from "./bases/CardBase";
export default {
  props: ["item"],
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
  padding: 6px;
}
</style>
