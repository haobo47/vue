<template>
<button @click="increment">Count is:{{ Count }}</button>
</template>
<script setup>
import {ref,onMounted} from 'vue'
const count=ref(0)
function increment(){
    count.value++
}
onMounted(()=>{
    console.log(`initial count is ${count.value}.`);
    
})
</script>