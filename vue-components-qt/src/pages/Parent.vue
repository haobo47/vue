<template>
    <h3>Parent</h3>
    <Child title="Parent data" demo='test' :msg="msg2" :age="age" :names="names"/>
</template>
<script>
import Child from './Child.vue';
export default{
    components:{
        Child
    },  
    data(){
        return{
            msg2:'ahhhhhhh',
            age:20,
            names:['zhansan','lasi','wangwu'],
        }
    }
}
</script>
<style>

</style>