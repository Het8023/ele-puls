<template>
    <el-form :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
        <template v-for="(item, index) in options" :key="index">

            <!-- 没有children -->
            <el-form-item v-if="!item.children || !item.children!.length" :prop="item.prop" :label="item.label">
                <component v-bind="item.attrs" :placeholder="item.placeholder" v-model="model[item.prop!]"
                    :is="`el-${item.type}`"></component>
            </el-form-item>

            <!-- 有children -->
            <el-form-item v-if="item.children && item.children.length" :prop="item.prop" :label="item.label">
                <component v-bind="item.attrs" v-model="model[item.prop!]" :placeholder="item.placeholder"
                    :is="`el-${item.type}`">
                    <component v-for="(child, i) in item.children" :key="i" :is="`el-${child.type}`"
                        :label="child.label" :value="child.value"></component>
                </component>
            </el-form-item>
        </template>
    </el-form>
</template>

<script lang="ts" setup>
import { ref, type PropType, onMounted } from "vue";
import type { FormOptions } from "./types/types";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true,
    },
});

// 表单数据
let model = ref<any>({});
let rules = ref<any>({});

// dom加载时
onMounted(() => {
    let m: any = {};
    let r: any = {};

    props.options.map((item: FormOptions) => {
        m[item.prop!] = item.value;
        r[item.prop!] = item.rules;
    });

    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
});
</script>

<style scoped lang="scss"></style>