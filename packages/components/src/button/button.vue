<!--
 * @Autor: 李建鹏
 * @Date: 2022-08-18 23:39:14
 * @LastEditTime: 2022-08-23 22:55:37
 * @Description: 
-->
<template>
    <button class="test">测试按钮---{{ a }}</button>
</template>
<script setup>
import { ref } from "vue"
const a = ref('shenzhen')
</script>

<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}
.test {
    border: none;
    padding: 10px;
    margin: 10px;
    color: #f1f;
}
</style>
