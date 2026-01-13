<template>
    <h3>组合式api</h3>
    <p>{{ count }}</p>
    <button @click="addCountHandle">add</button>
</template>
<script setup>
import { ref,watch,onMounted } from 'vue';
import { watchCount } from '../utils/countUtil.js'
const count=ref(0);
function addCountHandle(){
    count.value++;
}
// watch(count,(newValue,oldValue)=>{
//     console.log(newValue,oldValue);
    
// })

watchCount(count)

onMounted(()=>{
    console.log('组件渲染后');
    
})
</script>