
<template>
    <h3>模版语法</h3>
    <p>{{ msg }}</p>
    <p>{{ num+1 }}</p>
    <p>{{ ok?'yes':'no' }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <p>{{ a===2 }}</p>
    <p>{{ rawHTML }}</p>
    <p v-html="rawHTML"></p>
</template>

<script>
export default{
  data(){
    return{
       msg:'abc',
       num:10,
       ok:true,
       message:'hello',
       a:1,
       rawHTML:'<a href="https://baidu.com">baidu</a>'
    }
  }
}
</script>

