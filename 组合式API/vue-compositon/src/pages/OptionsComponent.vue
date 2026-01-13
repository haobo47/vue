<template>
<p>{{ msg }}</p>
<p>{{ reverse }}</p>
</template>
<script>
export default{
    data(){
        return{
            msg:'选项式API'
        }
    },
    computed:{
        reverse(){
            return this.msg.split("").reverse().join("")
        }
    }
}
</script>