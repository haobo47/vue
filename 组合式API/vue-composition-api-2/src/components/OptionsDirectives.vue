<template>
    <h3>选项式API自定义指令</h3>
    <p v-author>哈哈哈哈</p>
</template>
<script>
export default{
    directives:{
        author:{
            mounted(element){
                console.log(element);
                element.innerHTML=element.innerHTML+' - zhangsan'
            }
        }
    }
}
</script>