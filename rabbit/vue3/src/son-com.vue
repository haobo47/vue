<!-- <script setup>
    //defineProps接收器
    const props=defineProps({
        msg: String,
        count:Number
    })
    console.log(props);
    
</script>

<template>
    <div class="son">
        <h3>子组件Son</h3>
        <div>
            父组件传入 {{ msg }}-{{ count }}
        </div>
    </div>
</template>

<style scoped>

</style> -->

<script setup>
    const emit=defineEmits(['get-message'])
    const sendMsg=()=>{
        emit('get-message', 'this is son message')
    }
</script>

<template>
    <div class="son">
        <div>子组件Son</div>
        <button @click="sendMsg">触发自定义事件</button>
    </div>
</template>