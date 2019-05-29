<template>
  <panel-base>
    <div>
      <div class="panel-child panel__header">
        <h2>
          <slot name="header"></slot>
        </h2>
        <div class="panel__header__icon">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
      <div class="panel-child panel__body">
        <slot name="body"></slot>
      </div>
    </div>
  </panel-base>
</template>

<script>
import PanelBase from "./bases/PanelBase";

export default {
  components: {
    PanelBase
  }
};
</script>

<style lang="scss" scoped>
.panel__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid $background;

  h2 {
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  .panel__header__icon {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    color: $corp-2;
    font-size: 30px;
  }
}
</style>
