<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <!-- 侧边栏 -->
                <NavSide :collapse="isCollapse"></NavSide>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 顶部 -->
                    <NavHeader v-model:collapse="isCollapse"></NavHeader>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang='ts'>
import { ref } from "vue";

import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";




// 展开收起菜单变量
const isCollapse = ref(false);

// // 点击收起展开菜单
// const toggle = () => {
//     isCollapse.value = !isCollapse.value
// }

</script>
<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}
</style>