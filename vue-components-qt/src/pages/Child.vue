<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p>{{ msg }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item,index) in names" :key="index">{{ item }}</li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            mes:'abcdefg'
        }
    },
    props:['title','demo','msg','age','names']
}
</script>
<style>

</style> 