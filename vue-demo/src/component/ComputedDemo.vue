<template>
    <h3>{{ person.name }}</h3>
    <p>{{ personClass }}</p>
</template>
<script>
export default{
    data(){
        return{
            person:{
            name:'zhangsan',
            class:['语文','english','math'],
            }
        }
    },
    computed:{
        personClass(){
            return this.person.class.length > 0 ? 'yes' : 'no'
        }
    }
}
</script>