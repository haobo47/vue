<template>
<!-- <Option/>
<Composition/>
<Optionsref/>
<Compositionref/> -->
<!-- <OptionsParent/>
<CompositionParent/> -->
<OptionsDirectives/>
<CompositionDirectives/>
</template>
<script>
import Option from './components/Option.vue';
import Composition from './components/Composition.vue';
import Optionsref from './components/Optionsref.vue';
import Compositionref from './components/Compositionref.vue';
import OptionsParent from './pages/Options/Parent.vue';
import CompositionParent from './pages/Compsitions/Parent.vue';
import OptionsDirectives from './components/OptionsDirectives.vue';
import CompositionDirectives from './components/CompositionDirectives.vue';
export default{
components:{
  Option,
  Composition,
  Optionsref,
  Compositionref,
  OptionsParent,
  CompositionParent,
  OptionsDirectives,
  CompositionDirectives
}
}
</script>