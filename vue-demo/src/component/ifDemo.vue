<template>
    <h3>条件渲染</h3>
    <div v-if="flag">can you see?</div>
    <div v-else>see see me else</div>
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>not a/b/c</div>
    <div v-show="flag">v-show</div>
    <div v-show="flag2">v-show2</div>
</template>
<script>

export default{
    data(){
        return{
            flag:true,
            flag2:true,
            type:'B',
        }
    }
}
</script>