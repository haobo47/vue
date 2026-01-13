<template>
    <h3>ComponentA</h3>
    <ComponentB :title='title'/>
</template>
<script>
    import ComponentB from './ComponentB.vue';
    export default{
        data(){
            return{
                title:'标题'
            }
        },
        components:{
            ComponentB,
        }
    }
</script>
<style>

</style>