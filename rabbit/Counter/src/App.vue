<script setup>
  import { ref } from 'vue'
  const count = ref(0)
  const addCount = () => count.value++
</script>

<template>
  <button @click="addCount">{{ count }}</button>
</template>

<style scoped></style>
