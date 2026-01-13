<template>
<p :style="{color:activeColor, fontSize:fontSize }">style绑定1</p>
<p :style="styleObject ">style绑定2</p>
</template>
<script>

export default{
    data(){
        return{
            activeColor:'green',
            fontSize:'40px',
            styleObject:{
                color:'red',
                fontSize:'30px'
            }
        }
    }
}
</script>