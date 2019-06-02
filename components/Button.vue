<template >
  <button-base class="button" :danger="danger">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="label">
      <slot name="label"></slot>
    </div>
  </button-base>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ButtonBase from "./bases/ButtonBase.vue";

@Component({
  components: {
    ButtonBase
  }
})
export default class KButton extends Vue {
  @Prop(Boolean) readonly danger!: boolean;
}
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
