<template>
<h3>组合式api</h3>
<p ref="msg">组合式api-模版引用</p>
</template>
<script setup>
import { ref,onMounted } from 'vue';
const msg=ref(null);

onMounted(()=>{
    console.log(msg);
    msg.value.innerHTML='组合式api-模版引用-修改'
})

</script>