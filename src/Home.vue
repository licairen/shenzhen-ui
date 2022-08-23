<!--
 * @Autor: 李建鹏
 * @Date: 2022-08-17 00:16:58
 * @LastEditTime: 2022-08-17 00:21:00
 * @Description: 
-->

<template>
    <div>{{ msg }}</div>
    <button @click="quit">跳转login</button>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'
const msg = ref("home")
let router = useRouter();
function quit() {
    router.push('/login')
    // console.log(useRouter())
    // useRouter().push('/logout')
}
</script>



