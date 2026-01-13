<template>
<h3>组合式API简约写法</h3>
<p>{{ msg }}</p>
<p>{{ userInfo.name }}</p>
<p>{{ reverse }}</p>
</template>
<script setup>
import{ref,reactive,computed}from 'vue'
const msg=ref('组合式API简约')
const userInfo=reactive({
    name:'zhangsan'
})
const reverse=computed(()=>{
    return msg.value.split("").reverse().join("")
})
</script>