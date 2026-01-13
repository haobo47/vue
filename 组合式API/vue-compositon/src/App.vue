<template>
  <h3>选项式API与组合式API区别</h3>
  <!-- <Options/>
  <Composition/> -->
  <OptionsComponent/>
  <CompositionsComponent/>
  <CompositionComponents/>
</template>
<script>
import Options from './components/Options.vue';
import Composition from './components/Composition.vue';
import OptionsComponent from './pages/OptionsComponent.vue';
import CompositionsComponent from './pages/CompositionsComponent.vue';
import CompositionComponents from './pages/CompositionComponents.vue';
export default{
  components:{
    Options,
    Composition,
    OptionsComponent,
    CompositionsComponent,
    CompositionComponents
  },
  data(){
    return{

    }
  }
}
</script>