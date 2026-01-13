<script setup>
  import { ref, watch } from 'vue'
  const state=ref({count:0,age:20,name:'zhangsan'})
  const changeStateByCount=()=>{
    state.value.count++
  }
  const changeAge=()=>{
    state.value.age++
  }
  const changeName=()=>{
    state.value.name='lisi'
  }
  //侦听具体属性
  //deep存在性能损耗，进来那个不开启deep
  watch(
    ()=>state.value.age,
    ()=>{
      console.log('age变化');
      
    }
  )
</script>

<template>
  <div>
    {{ state.count }}
  </div>
  <div>
    {{ state.age }}
  </div>
  <div>
    {{ state.name }}
  </div>
  <div>
    <button @click="changeStateByCount">修改count</button>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>