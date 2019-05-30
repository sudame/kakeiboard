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

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Item } from "~/store/items";

import CardHeader from "./bases/CardHeader.vue";
import CardBase from "./bases/CardBase.vue";

@Component({
  components: {
    CardBase,
    CardHeader
  }
})
export default class Card extends Vue {
  @Prop(undefined) readonly item!: Item;
}
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
