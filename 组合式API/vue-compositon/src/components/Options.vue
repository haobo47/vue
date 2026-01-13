<template>
    <button @click="increment">count is :{{ count }}</button>
</template>
<script>
export default{
    data(){
        return{
            count:0
        }
    },
    methods:{
        increment(){
            this.count++
        }
    },
    mounted(){
        console.log(`count初始化值: ${this.count}`)
    }
}
</script>