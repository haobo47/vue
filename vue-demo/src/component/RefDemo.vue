<template>
<div ref="container" class="container">{{ content }}</div>
<input type="text" ref="username">
<button @click="getElementHandle">获取元素</button>
</template>
<script>
export default{
    data(){
        return{
            content:'内容'
        }
    },
    methods:{
        getElementHandle(){
            this.$refs.container.innerHTML='好好好';
            console.log(this.$refs.username.value);
                       
        }
    }
}
</script>