<template>
  <div>
    <mChooseIcon title="选择图标" v-model:visible="visible"
      >选择图标</mChooseIcon
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const visible = ref<boolean>(false);
</script>
<style lang="scss" scoped></style>
