<template>
    <h3>ComponentA</h3>
    <p>{{ msg }}</p>
    <ComponentB title="标题" :onEvent="dataFn"/>

</template>
<script>
import ComponentB from './ComponentB.vue';
export default{
    data(){
        return{
            msg:''
        }
    },
    components:{
        ComponentB,
    },
    methods:{
        dataFn(data){
            console.log(data);
            this.msg=data;
        }
    }
}
</script>