<template>
    <h3>列表渲染</h3>
    <p v-for="(item,index) in names">{{ item }}-{{ index }}</p>
    <div>
        <p v-for="(value,key,index) in userInfo">{{ value }}-{{ key }}-{{ index }}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                names:['zhangsan','lisi','wangwu'],
                userInfo:{
                    name:'zhangsan',
                    age:'20',
                    gender:'male',
                }
            }
        }
    }
</script>