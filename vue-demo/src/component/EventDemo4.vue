<template>
    <h3>事件参数传递参数</h3>
    <button @click="addCount('hello',$event)">add</button>
    <p>{{ count }}</p>
</template>
<script>
export default{
    data(){
        return{
            count:0,
        }
    },
    methods:{
        addCount(msg,e){            
            this.count++;
            console.log(msg);
            console.log(e);
            
            // e.target.innerHTML='add'+this.count;

        }
    }
}
</script>