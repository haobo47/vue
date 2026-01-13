<template>
    <h3>ComponentB</h3>
    <p>{{title}}</p>
    <p>{{age}}</p>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        },
        props:{
            title:{
                type:[String,Number,Array,Object]
            },
            age:{
                type:Number,
                default:0
            }
        }
    }
</script>
<style>

</style>