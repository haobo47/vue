<template>
    <UseComponent/>
    <KeepAlive>
        <component :is="tabComponent"></component>
    </KeepAlive>
    
    <button @click="changeHandle">切换</button>
</template>
<script>
    import { defineAsyncComponent } from 'vue';
    import UseComponent from './components/UseComponent.vue';
    import ComponentA from './components/ComponentA.vue';
    // import ComponentB from './components/ComponentB.vue';
    // 异步加载组件
    const ComponentB=defineAsyncComponent(()=>
        import("./components/ComponentB.vue")
)
    export default{
        data(){
            return{
           tabComponent:'ComponentA'
            }
 
        },
        components:{
            UseComponent,
            ComponentA,
            ComponentB,
        },
        methods:{
            changeHandle(){
                this.tabComponent=this.tabComponent=="ComponentA"?"ComponentB":"ComponentA"
            }
        }
    }
</script>