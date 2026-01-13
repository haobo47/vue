<template>
<h3>选项式api</h3>
<p ref="msg">选项式api模版引用</p>
</template>
<script>
export default{
    mounted(){
        this.$refs.msg.innerHTML='选项式api模版引用-修改'
    }
}
</script>