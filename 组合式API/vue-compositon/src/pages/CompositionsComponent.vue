<template>
<p>{{ msg }}</p>
<p>{{ userInfo.name }}</p>
</template>
<script>
import{ref,reactive,computed}from 'vue'
export default{
    setup(){
        const msg=ref('组合式API')
        const userInfo=reactive({
            name:'zhangsan'
        })
        return{
            msg,
            userInfo
        }
    }
}
</script>