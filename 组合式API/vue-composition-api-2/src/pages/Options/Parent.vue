<template>
    <h3>选项式API-parent</h3>
    <Child title="传递数据" @onSomeEvent="getMsgHandle"/>
    <p>{{ msg }}</p>
</template>
<script>
import Child from './Child.vue';
export default{
    components:{
        Child
    },
    data(){
        return{
            msg:''
        }
    },
    methods:{
        getMsgHandle(data){
            this.msg=data
        }
    }
}
</script>