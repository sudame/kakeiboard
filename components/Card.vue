<template>
  <card-base class="card">
    <div class="card__container">
      <card-header class="card-element" :itemId="item.id" @item-edit="itemEdit">
        <template>{{ item.title }}</template>
      </card-header>
      <div class="card__body">{{ item.price }}円</div>
    </div>
  </card-base>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import ItemModule, { Item } from "~/store/items";
import EditorModule from "~/store/editor";

import CardHeader from "./bases/CardHeader.vue";
import CardBase from "./bases/CardBase.vue";

@Component({
  components: {
    CardBase,
    CardHeader
  }
})
export default class Card extends Vue {
  protected itemStore = getModule(ItemModule, this.$store);
  protected editorStore = getModule(EditorModule, this.$store);

  @Prop(undefined) readonly item!: Item;

  itemEdit() {
    this.editorStore.setEditingItem(this.item);
    this.editorStore.toggleEditing();
  }
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
