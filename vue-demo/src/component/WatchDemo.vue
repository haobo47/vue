<template>
<h3>侦听器</h3>
<p>{{ msg }}</p>
<button @click="updateHandle">修改数据</button>
</template>
<script>
export default{
    data(){
        return{
            msg:'hello',
        }
    },
    methods:{
        updateHandle(){
            this.msg='world'
        }
    },
    watch:{
        msg(newValue,oldValue){
            console.log(newValue);
            console.log(oldValue);
            
        }
    }
}
</script>