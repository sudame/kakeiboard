<template>
  <div>
    <top-bar-base>
      <div class="top-bar">
        <h1>
          <slot name="label"></slot>
        </h1>
        <div class="space"></div>
        <div>
          <slot name="action"></slot>
        </div>
      </div>
    </top-bar-base>
  </div>
</template>

<script>
import TopBarBase from "./bases/TopBarBase";

export default {
  components: {
    TopBarBase
  }
};
</script>

<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
  color: $corp-2;
  font-size: 25px;
  line-height: 51px;
}

.top-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.space {
  flex: 1;
}
</style>
