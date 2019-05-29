<template >
  <button-base class="button">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="label">
      <slot name="label"></slot>
    </div>
  </button-base>
</template>

<script>
import ButtonBase from "./bases/ButtonBase";

export default {
  components: {
    ButtonBase
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: $white;
  padding: 6px 24px;
  @include elevation();
}

.icon,
.label {
  display: inline-block;
}

.icon {
  margin-right: 3px;
}
</style>
