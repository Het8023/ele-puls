<template>
  <div>
    <mChooseArea @change="changeArea"></mChooseArea>
  </div>
</template>
<script setup lang="ts">
import { Data } from "../../components/chooseArea/src/index";

let changeArea = (val: Data) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
