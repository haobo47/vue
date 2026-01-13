<script setup>
    import { ref } from 'vue'
    const name=ref('test name')
    const setname=()=>{
        name.value='test new name'
    }
    defineExpose({
        name,setname
    })
</script>

<template>
    <h3>我是test组件</h3>
</template>