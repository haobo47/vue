<template>
<!-- <SlotsBase>
  <div>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </div>
</SlotsBase> -->
<!-- <Slots2>
  <template #header>
    <h3>{{ msg }}</h3>
  </template>
  <template #main>
    <p>内容</p>
  </template>
</Slots2> -->
<SlotsAttri>
  <template #header="SlotProps">
     <h3>{{ currentTest }}-{{ SlotProps.msg }}</h3> 
  </template>
  <template #main="SlotProps">
    <h3>{{ SlotProps.job }}</h3>
  </template>
</SlotsAttri>
</template>
<script>
import SlotsBase from './components/SlotsBase.vue';
import Slots2 from './components/Slots2.vue';
import SlotsAttri from './components/SlotsAttri.vue';
export default{
  data(){
    return{
      msg:'2333333',
      currentTest:'测试内容'
    }
  },
  components:{
    SlotsBase,
    Slots2,
    SlotsAttri,
  }
}
</script>
<style>

</style>