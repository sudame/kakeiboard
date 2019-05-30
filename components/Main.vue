<template>
  <main class="main">
    <panel class="main__panel">
      <template slot="header">欲しい</template>
      <div slot="body">
        <draggable v-model="want" group="items">
          <card v-for="item in want" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買う</template>
      <div slot="body">
        <draggable v-model="will" group="items">
          <card v-for="item in will" :key="item.id" :item="item"></card>
        </draggable>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買った</template>
      <div slot="body">
        <draggable v-model="done" group="items">
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
              <td>{{ wantPrice }}円</td>
            </tr>
            <tr>
              <td>買うもの合計:</td>
              <td>{{ willPrice }}円</td>
            </tr>
            <tr>
              <td>買ったもの合計:</td>
              <td>{{ donePrice }}円</td>
            </tr>
          </tbody>
        </table>
      </div>
    </panel>
  </main>
</template>

<script>
import Draggable from "vuedraggable";

import Panel from "./Panel";
import Card from "./Card";

export default {
  components: {
    Draggable,
    Panel,
    Card
  },
  computed: {
    want: {
      get() {
        return this.$store.state.items.want;
      },
      set(value) {
        this.$store.commit("items/update", { name: "want", items: value });
      }
    },
    will: {
      get() {
        return this.$store.state.items.will;
      },
      set(value) {
        this.$store.commit("items/update", { name: "will", items: value });
      }
    },
    done: {
      get() {
        return this.$store.state.items.done;
      },
      set(value) {
        this.$store.commit("items/update", { name: "done", items: value });
      }
    },
    wantPrice() {
      return this.$store.getters["items/getPrice"]("want");
    },
    willPrice() {
      return this.$store.getters["items/getPrice"]("will");
    },
    donePrice() {
      return this.$store.getters["items/getPrice"]("done");
    }
  }
};
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
