<template>
  <main class="main">
    <panel class="main__panel">
      <template slot="header">欲しい</template>
      <div slot="body">
        <draggable v-model="want" group="items" @change="changed($event, 'want')">
          <card v-for="item in want" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買う</template>
      <div slot="body">
        <draggable v-model="will" group="items" @change="changed($event, 'will')">
          <card v-for="item in will" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買った</template>
      <div slot="body">
        <draggable v-model="done" group="items" @change="changed($event, 'done')">
          <card v-for="item in done" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">統計</template>
      <div slot="body">
        <table>
          <tbody>
            <tr>
              <td>欲しいもの合計:</td>
              <td>{{ prices.want }}円</td>
            </tr>
            <tr>
              <td>買うもの合計:</td>
              <td>{{ prices.will }}円</td>
            </tr>
            <tr>
              <td>買ったもの合計:</td>
              <td>{{ prices.done }}円</td>
            </tr>
          </tbody>
        </table>
      </div>
    </panel>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import ItemsModule, { Item, Prices, ItemState } from "~/store/items";

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
  itemsStore = getModule(ItemsModule, this.$store);

  get want(): Array<Item> {
    return this.itemsStore.want;
  }

  get will(): Array<Item> {
    return this.itemsStore.will;
  }

  get done(): Array<Item> {
    return this.itemsStore.done;
  }

  get prices(): Prices {
    return this.itemsStore.prices;
  }

  // changeイベントをlistenしてstoreにmutationを飛ばす
  changed(e, newState: string) {
    const conv = {
      want: ItemState.WANT,
      will: ItemState.WILL,
      done: ItemState.DONE
    };

    if (e.added !== undefined) {
      this.itemsStore.updateState({
        target: e.added.element,
        state: conv[newState]
      });
    }
  }

  // setterでは何もしない
  set want(v) {
    return;
  }
  set will(v) {
    return;
  }
  set done(v) {
    return;
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
</style>
