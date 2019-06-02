<template>
  <main class="main">
    <panel class="main__panel" @add-item="addItem(0)">
      <template slot="header">欲しい</template>
      <div slot="body">
        <draggable v-model="want" group="items">
          <card v-for="item in want" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel" @add-item="addItem(1)">
      <template slot="header">買う</template>
      <div slot="body">
        <draggable v-model="will" group="items">
          <card v-for="item in will" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel" @add-item="addItem(2)">
      <template slot="header">買った</template>
      <div slot="body">
        <draggable v-model="done" group="items">
          <card v-for="item in done" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel" summary>
      <template slot="header">サマリー</template>
      <div slot="body" class="summary-panel-content">
        <div class="total-card">
          <div class="total-card__title">欲しいもの</div>
          <div class="total-card__price">{{ prices.want }}円</div>
        </div>
        <div class="total-card">
          <div class="total-card__title">買うもの</div>
          <div class="total-card__price">{{ prices.will }}円</div>
        </div>
        <div class="total-card">
          <div class="total-card__title">買ったもの</div>
          <div class="total-card__price">{{ prices.done }}円</div>
        </div>
        <div class="spacer"></div>
        <div class="total-card all">
          <div class="total-card__title">合計</div>
          <div class="total-card__price">{{ prices.want + prices.will + prices.done }}円</div>
        </div>
      </div>
    </panel>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import ItemsModule, { Item, Prices, ItemState } from "~/store/items";
import editorModule from "~/store/editor";

import Draggable from "vuedraggable";

import Panel from "./Panel.vue";
import Card from "./Card.vue";

@Component({
  components: {
    Draggable,
    Panel,
    Card
  }
})
export default class Main extends Vue {
  private itemStore = getModule(ItemsModule, this.$store);
  private editorStore = getModule(editorModule, this.$store);

  addItem(state: ItemState) {
    this.editorStore.resetEditingItem();
    this.editorStore.setIsNewItem(true);
    this.editorStore.setItemState(state);
    this.editorStore.toggleEditing();
  }

  get want(): Array<Item> {
    return this.itemStore[ItemState.WANT];
  }

  set want(value: Array<Item>) {
    this.itemStore.update({ state: ItemState.WANT, items: value });
  }

  get will(): Array<Item> {
    return this.itemStore[ItemState.WILL];
  }

  set will(value: Array<Item>) {
    this.itemStore.update({ state: ItemState.WILL, items: value });
  }

  get done(): Array<Item> {
    return this.itemStore[ItemState.DONE];
  }

  set done(value: Array<Item>) {
    this.itemStore.update({ state: ItemState.DONE, items: value });
  }

  get prices(): Prices {
    return this.itemStore.prices;
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.main__panel {
  width: calc(25% - 72px / 4);
}

.summary-panel-content {
  height: 100%;
  display: flex;
  flex-direction: column;

  .spacer {
    flex: 1;
  }

  .total-card {
    border-bottom: 1px solid $background;
    padding: 12px 0;

    &.all {
      border-bottom: none;
      border-top: 1px solid $background;

      .total-card__title {
        font-size: 24px;
        font-weight: normal;
      }

      .total-card__price {
        font-size: 48px;
      }
    }

    .total-card__title {
      font-size: 14px;
      font-weight: bolder;
    }

    .total-card__price {
      font-size: 30px;
      text-align: right;
    }
  }
}
</style>
