<template>
  <div>
    <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :router="router" v-bind="$attrs">
      <template v-for="(item, index) in data">
        <el-menu-item :key="index" :index="item.index" v-if="!item.children || !item.children.length">
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{ item.name }}</span>
        </el-menu-item>

        <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
          <template #title>
            <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item1.index">
            <component v-if="item1.icon" :is="`el-icon-${toLine(item1.icon)}`"></component>
            <span>{{ item1.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { MenuItem } from "./type";
import { toLine } from "../../../utils";

let props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: "",
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
});

console.log("props", props.data);
</script>

<style scoped lang="scss">
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
