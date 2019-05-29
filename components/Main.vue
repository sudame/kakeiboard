<template>
  <main class="main">
    <panel class="main__panel">
      <template slot="header">欲しい</template>
      <div slot="body">
        <card></card>
        <card></card>
      </div>
    </panel>
    <panel class="main__panel">
      <template slot="header">買う</template>
      <div slot="body">
        <card></card>
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
