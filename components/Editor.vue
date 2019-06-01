<template>
  <div id="editor">
    <div class="editor__panel">
      <h3>編集</h3>
      <div class="field">
        <label for="title" class="label">品目</label>
        <input type="text" name="title" id="title" class="input text" v-model="title">
      </div>
      <div class="field">
        <label for="price" class="label">価格</label>
        <input type="number" name="price" id="price" class="input text" v-model="price">
      </div>
      <div class="field right">
        <button class="input button" @click="submitItem">更新</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import editorModule from "~/store/editor";
import itemModule, { Item } from "~/store/items";

@Component
export default class Editor extends Vue {
  private editorStore = getModule(editorModule, this.$store);
  private itemStore = getModule(itemModule, this.$store);

  private title: string = this.item.title;
  private price: number = this.item.price;

  get item(): Item {
    return this.editorStore.editingItem;
  }

  submitItem() {
    this.itemStore.editItem({
      id: this.item.id,
      title: this.title,
      price: new Number(this.price) as number,
      state: this.item.state
    });
    this.editorStore.toggleEditing();
  }
}
</script>

<style lang="scss" scoped>
#editor {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #000c;
  height: 100vh;
  width: 100vw;

  .editor__panel {
    padding: 24px;
    border-radius: 5px;
    background-color: $white;
    min-height: 300px;
    min-width: 500px;

    h3 {
      padding: 0;
      margin: 0;
    }
  }
}

.field {
  margin: 12px auto;

  .label {
    display: block;
    font-size: 16px;
    font-weight: bolder;
  }

  .input.text {
    border: 1px solid $background;
    line-height: 2em;
    height: 4em;
    width: 100%;
    border-radius: 5px;
    padding: 0.5em;
    font-size: 14px;
  }

  .input.button {
    display: block;
    padding: 6px 12px;
    background-color: $corp-2;
    color: white;
    border: none;
    font-size: 14px;
    text-indent: 1.5px;
    letter-spacing: 3px;
    border-radius: 5px;
  }

  &.right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
