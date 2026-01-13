<template>
    <h3>key属性添加到v-for中</h3>
    <p v-for="(value,index) in names" :key="index">{{ value }}</p>
</template>
<script>
    export default{
        data(){
            return{
                names:['zhangsan','lisi','wangwu'],
            }
        }
    }
</script>