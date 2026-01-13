<template>
    <h3>Slots再续集</h3>
    <slot name="header" :msg="childMsg"></slot>
    <slot name="main" :job="jobMsg"></slot>
</template>
<script>
    export default{
        data(){
            return{
                childMsg:'子组件数据',
                jobMsg:'doctor'
            }
        }
    }
</script>