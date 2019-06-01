<template>
  <div class="card-header">
    <div class="header">
      <h3>
        <slot></slot>
      </h3>
      <div class="space"></div>
      <div @click="edit()">
        <i class="fas fa-pen"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class CardHeader extends Vue {
  @Prop(Number) readonly itemId!: number;

  @Emit("item-edit")
  edit() {
    return;
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  background-color: $corp-2;
  border-radius: 5px 5px 0 0;
  color: $white;
}

div.header {
  font-size: 14px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  h3 {
    margin: 0;
    padding: 0;
  }

  .space {
    flex: 1;
  }
}
</style>
