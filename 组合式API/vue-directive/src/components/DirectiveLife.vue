<template>
    <h3>自定义指令的钩子函数</h3>
    <p v-red v-if="flag">{{ msg }}</p>
    <button @click="updateHandle">修改文本</button>
    <button @click="delHandle">删除</button>
</template>
<script setup>
import { onBeforeUpdate,ref } from 'vue';
const msg=ref('红色效果')
const flag=ref(true)
function updateHandle(){
    msg.value='修改 红色效果'
}
function delHandle(){
    flag.value=false
}
const vRed={
    created(el,binding,vnode,prevVnode){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');  
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('breforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    },
}
</script>