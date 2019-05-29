<template>
  <div>
    <top-bar>
      <template slot="label">kakeiboard</template>
      <my-button slot="action">
        <div slot="icon">
          <i class="fas fa-user"></i>
        </div>
        <div slot="label">須田幹大 様</div>
      </my-button>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import MyButton from "../components/Button";

export default {
  components: {
    TopBar,
    MyButton
  }
};
</script>

<style>
</style>
