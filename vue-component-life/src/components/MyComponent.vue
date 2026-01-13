<template>
<h3>组件生命周期</h3>
<p>{{ msg }}</p>
<button @click="updateHandle">更新</button>
</template>
<script>
export default{
    data(){
        return{
            msg:'2333'
        }
    },
    methods:{
        updateHandle(){
            this.msg='更新后';
        }
    },
    beforeCreate(){
        console.log('创建之前');
    },
    created(){
        console.log('创建后');
    },
    beforeMount(){
        console.log('渲染前');
    },
    mounted(){
        console.log('渲染后');
    },
    beforeUpdate(){
        console.log('更新前');
        
    },
    updated(){
        console.log('更新后');
        
    },
    beforeUnmount(){
        console.log('卸载前');
        
    },
    unmounted(){
        console.log('卸载后');
        
    },

}
</script>