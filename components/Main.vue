<template>
  <main class="main">
    <panel class="main__panel">
      <template slot="header">欲しい</template>
      <div slot="body">
        <card v-for="item in want" :key="item.id" :item="item"></card>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買う</template>
      <div slot="body">
        <card v-for="item in will" :key="item.id" :item="item"></card>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買った</template>
    </panel>
    <panel class="main__panel">
      <template slot="header">統計</template>
    </panel>
  </main>
</template>

<script>
import Panel from "./Panel";
import Card from "./Card";

export default {
  components: {
    Panel,
    Card
  },
  data() {
    return {
      want: [
        {
          id: 1,
          title: "title",
          price: 1000
        },
        {
          id: 2,
          title: "title2",
          price: 2000
        }
      ],
      will: [
        {
          id: 3,
          title: "title3",
          price: 3000
        }
      ],
      done: []
    };
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
