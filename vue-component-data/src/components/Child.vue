<template>
<h3>Child</h3>
<p>{{ msg }}</p>
<p>{{ globaldata }}</p>
</template>
<script>
export default{
    inject:["msg","globaldata"],
}
</script>