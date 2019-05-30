<template>
  <div>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>


<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
