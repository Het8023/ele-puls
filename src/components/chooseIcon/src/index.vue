<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>

  <el-dialog :title="title" v-model="dialogVisible">
    <div class="container">
      <div
        class="item"
        @click="clickItem(item)"
        :key="index"
        v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
      >
        <div class="text">
          <component :is="`el-icon-${toLine(item)}`"></component>
        </div>

        <div class="icon">{{ item }}</div>
      </div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
// 引入element plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "../../../utils/index";
import { watch, ref } from "vue";
import { useCopy } from "../../../hooks/useCopy/index.ts";
const props = defineProps<{
  // 弹出框的标题
  title: string;
  // 控制弹出框的显示与隐藏
  visible: boolean;
}>();
const emits = defineEmits(["update:visible"]);

const dialogVisible = ref<boolean>(props.visible);

const handleClick = () => {
  emits("update:visible", !props.visible);
};

// 点击图标
const clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};

// 监听visible的变化，只能监听第一次
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);

// 监听组件内部dialogVisible的变化
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 70px;
}

.text {
  font-size: 14px;
}

.icon {
  flex: 1;
}

svg {
  width: 2em;
  height: 2em;
}
</style>
