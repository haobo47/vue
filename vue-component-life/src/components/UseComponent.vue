<template>
    <h3>组件生命周期函数应用</h3>
    <p ref="name">张三</p>
</template>
<script>
    export default{
        beforeMount(){
            console.log(this.$refs.name);
            
        },
        mounted(){
            console.log(this.$refs.name);
            
        }
    }
</script>