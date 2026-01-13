<template>
    <h3>组合式API-parent</h3>
    <Child title="传递数据2" @onSomeEvent="getMsgHandle"/>
    <p>{{ msg }}</p>
</template>
<script setup>
import { ref } from 'vue';
import Child from './Child.vue';
const msg=ref('')
function getMsgHandle(data){
    console.log(data);
    msg.value=data
}
</script>