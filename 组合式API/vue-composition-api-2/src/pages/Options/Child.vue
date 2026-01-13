<template>
    <h3>选项式API-child</h3>
    <p>{{ title }}</p>
    <button @click="sendMsgHandle">发送数据</button>
</template>
<script>
export default{
    props:{
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            msg:'child数据'
        }
    },
    methods:{
        sendMsgHandle(){
            this.$emit("onSomeEvent",this.msg)
        }
    }
}
</script>