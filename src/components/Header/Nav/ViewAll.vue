<template>
    <li class="dropdown-header">
        You have 4 new {{msj}}
        <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
    </li>
</template>
<script>
export default {
    props: ["msj"]
}
</script>
<style scoped>
    
</style>