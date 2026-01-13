<template>
    <h3>事件获取对象</h3>
    <button @click="addCount">add</button>
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
        addCount(e){            
            this.count++;
            e.target.innerHTML='add'+this.count;

        }
    }
}
</script>