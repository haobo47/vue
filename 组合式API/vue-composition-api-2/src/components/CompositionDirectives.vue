<template>
    <h3>组合式API自定义指令</h3>
    <p v-author>hhhha</p>
</template>
<script setup>
const vAuthor={
    mounted:(element)=>{
        console.log(element);
        element.innerHTML=element.innerHTML+'  --zhangsan'
    }
}
</script>