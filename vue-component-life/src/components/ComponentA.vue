<template>
<h3>ComponentA</h3>
<p>{{ msg }}</p>
<button @click="updateHandle">更新数据</button>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hahaha'
            }
        },
        beforeUnmount(){
            console.log('组件卸载前 ');
        },
        unmounted(){
            console.log('组件被卸载');
            
        },
        methods:{
            updateHandle(){
                this.msg='新数据'
            }
        }
    }
</script>