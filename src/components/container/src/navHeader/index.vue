<template>
    <div class="header">
        <span @click="toggle">
            <!-- 收缩时,显示展开图标 -->
            <el-icon-expand v-if="collapse"></el-icon-expand>
            <!-- 展开时.显示收缩图标 -->
            <el-icon-fold v-else></el-icon-fold>
        </span>
    </div>
</template>
<script setup lang='ts'>

let props = defineProps<{
    collapse: boolean,
}>()

let emits = defineEmits(['update:collapse'])


// 点击收起展开菜单
const toggle = () => {
    emits('update:collapse', !props.collapse)
}
</script>
<style lang='scss' scoped>
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
</style>