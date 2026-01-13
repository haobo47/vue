<script setup>
  import {ref,watch}from 'vue'
  const count=ref(0)
  const name=ref('cp')
  const setCount=()=>{
    count.value++
  }
  const setName=()=>{
    name.value='pc'
  }
  //watch侦听单个数据源
  //ref对象不需要加.value
  watch([count,name],
  (
    [newCount,newName],
    [oldCount,oldName]
  )=>{
    console.log('count或name变化了',[newCount,newName],
    [oldCount,oldName]);
  },{
    immediate:true
  })
</script>

<template>
  <div>
    <button @click="setCount">+{{ count }}</button>
  </div>
  <div>
    <button @click="setName">{{ name }}</button>
  </div>
</template>