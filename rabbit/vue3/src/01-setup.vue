<script setup>

    const msg='this is msg'
    const logMsg=()=>{
      console.log(msg);
      
    }
</script>

<template>
  <div>
    {{msg}}
    <button @click="logMsg">log</button>
  </div>
</template>