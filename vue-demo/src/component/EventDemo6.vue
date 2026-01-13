<template>
<h3>事件修饰符</h3>
<a @click.prevent='clickHandle' href="https://baidu.com">百度</a>
<div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
</div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        clickHandle(e){
            console.log('click');
        },
        clickDiv(){
            console.log('clickDiv');
        },
        clickP(){
            console.log('clickP');
        }
    }
}
</script>