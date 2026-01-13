<!-- <script setup>
  import SonCom from './son-com.vue'
  import { ref } from 'vue'
  const count=ref(100)
  setTimeout(()=>{
    count.value=200
  },3000)
</script>

<template>
  <div class="father">
    <h2>父组件App</h2>
    <SonCom :count="count" msg="father msg"/>
  </div>
</template> -->

<script setup>
    import SonCom from './son-com.vue'
    const getMessage=(msg)=>{
        console.log(msg)
    }
</script>

<template>
    <div class="father">
        <h2>父组件App</h2>
        <SonCom @get-message="getMessage" />
    </div>
</template>