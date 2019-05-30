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
import { Component, Vue } from "vue-property-decorator";
import ButtonBase from "./bases/ButtonBase";

@Component({
  components: {
    ButtonBase
  }
})
export default class KButton extends Vue {}
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
