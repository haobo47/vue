<template>
<h3>Child</h3>
<button @click="clickEventHandle">传递数据</button>
</template>
<script>
export default{
    methods:{
        clickEventHandle(){
           this.$emit("someEvent",'childData')
        }
    }
}
</script>