<template>
<h3>祖宗</h3>
<Parent/>
</template>
<script>
import Parent from './components/Parent.vue';
  export default{
    components:{
      Parent
    },
    // provide:{
    //   msg:'祖宗财产2'
    // },
    data(){
      return{
        msg:'祖宗财产34'
      }
    },
    provide(){
      return{
        msg:this.msg
      }
    }
  }
</script>