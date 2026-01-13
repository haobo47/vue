<template>
<div v-bind:id="id" v-bind:class="dynamicClass">
aaaaa
</div>
<button :disabled="isButtonDisabled">按钮</button>
<div v-bind="objectOfAttri">bbb</div>

</template>

<script>

export default{
    data(){
        return{
            dynamicClass:"active",
            id:'appId',
            isButtonDisabled:false,
            objectOfAttri:{
                class:"active",
                id:'appId',
            }
         }
    }
}
</script>
<style>
.active{
    color: red;
    font-size: 30px;
}
</style>