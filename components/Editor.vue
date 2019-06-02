<template>
  <div id="editor" @keydown.esc="close">
    <div class="editor__panel">
      <div class="editor__header">
        <h3 v-if="isNew">新規({{ itemStore.nextID }})</h3>
        <h3 v-else>編集</h3>
        <div class="spacer"></div>
        <div class="editor__header__icon close" @click="close">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="field">
        <label for="title" class="label">品目</label>
        <input type="text" name="title" id="title" class="input text" v-model="title">
      </div>
      <div class="field">
        <label for="price" class="label">価格</label>
        <input type="number" name="price" id="price" class="input text" v-model="price">
      </div>
      <div class="field right">
        <button v-if="isNew" class="input button" @click="addItem">作成</button>
        <div class="buttons" v-else>
          <button class="input button danger" @click="deleteItem">削除</button>
          <button class="input button" @click="editItem">更新</button>
        </div>
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

  get isNew(): boolean {
    return this.editorStore.isNewItem;
  }

  editItem() {
    this.itemStore.editItem({
      id: this.item.id,
      title: this.title,
      price: new Number(this.price) as number,
      state: this.item.state
    });
    this.editorStore.toggleEditing();
  }

  addItem() {
    this.itemStore.addItem({
      id: this.itemStore.nextID,
      title: this.title,
      price: new Number(this.price) as number,
      state: this.item.state
    });
    this.editorStore.toggleEditing();
  }

  deleteItem() {
    this.itemStore.deleteItem(this.item);
    this.editorStore.toggleEditing();
  }

  close() {
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

  .editor__header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .editor__header__icon {
      font-size: 20px;
      color: $black-1;
    }

    .spacer {
      flex: 1;
    }
  }
}

/* フォームのスタイルは main.scss に統合 */
</style>
