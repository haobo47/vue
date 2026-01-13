<script setup>
import RoomMsgItem from './room-msg-item.vue'
import { provide,ref } from 'vue'
provide('data-key','this is room data')

const count=ref(0)
const setCount=()=>{
  count.value=count.value+10
}
provide('count-key',count)
provide('setCount-key',setCount)
setTimeout(()=>{
  count.value=count.value+10
},1000)
</script>

<template>
  <div class="page">
    顶层组件
    <RoomMsgItem />
    {{ count }}
  </div>
</template>