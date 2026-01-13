<template>
<h3>自定义指令的钩子函数</h3>
<p v-myShow:abc="flag">{{ msg }}</p>
<button @click="updateHandle">切换显示</button>
</template>
<script setup>
// 模拟v-show指令
import { ref } from 'vue';
const msg=ref('模拟v-show指令')
const flag=ref(true)
function updateHandle(){
    flag.value=flag.value===true?flag.value=false:flag.value=true
}
const vMyShow={
    beforeUpdate(el,binding,vNode,prevVnode){
        console.log(el);
        console.log(binding);
        console.log(vNode);
        console.log(prevVnode);
        binding.value===true?el.style.display='block':el.style.display='none'
    }
}
</script>