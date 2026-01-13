<template>
<h3>选项式api</h3>
<p>{{ count }}</p>
<button @click="clickAddHandle">add事件</button>
</template>
<script>
export default{
data(){
    return{
        count:0,
    }
},
methods:{
    clickAddHandle(){
        this.count++;
    }
},
watch:{
    count(newValue,oldValue){
        console.log(newValue,oldValue);
        
    }
}
}
</script>