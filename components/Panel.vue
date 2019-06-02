<template>
  <panel-base :summary="summary">
    <div id="panel-content" :class="{summary}">
      <div class="panel-child panel__header">
        <h2>
          <slot name="header"></slot>
        </h2>
        <div v-if="!summary" class="panel__header__icon" @click="clicked">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
      <div class="panel-child panel__body">
        <slot name="body"></slot>
      </div>
    </div>
  </panel-base>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import PanelBase from "./bases/PanelBase.vue";
import EditorModule from "~/store/editor";

@Component({
  components: {
    PanelBase
  }
})
export default class Panel extends Vue {
  private editorStore = getModule(EditorModule, this.$store);

  @Prop(Boolean) readonly summary!: boolean;

  @Emit("add-item")
  clicked(): void {
    return;
  }
}
</script>

<style lang="scss" scoped>
#panel-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.panel__body {
  flex: 1;
}

.panel__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid $background;
  height: 58px;

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

#panel-content.summary {
  color: $white;
}
</style>
