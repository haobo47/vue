<template>
    <h3>组件事件</h3>
    <Child @someEvent="getHandle"/> 
    <p>父元素：{{ msg }}</p>
</template>
<script>
    import Child from './Child.vue';
    export default{
        data(){
            return{
            msg:""
            }
        },  
        components:{
            Child
        },
        methods:{
            getHandle(data){
                // console.log('23333',data);
                this.msg=data;
            }
        }
    }
</script>