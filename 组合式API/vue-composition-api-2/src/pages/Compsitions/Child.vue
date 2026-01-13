<template>
    <h3>组合式API-child</h3>
    <p>{{ title }}</p>
    <button @click="sendMsgHandle">发送数据</button>
</template>
<script setup>
import { ref } from 'vue';
const msg=ref("child数据")
const emit=defineEmits(['onSomeEvent'])
const props=defineProps({
    title:{
        type:String,
        default:''
    }
})
function sendMsgHandle(){
        emit('onSomeEvent',msg.value)
}
</script>