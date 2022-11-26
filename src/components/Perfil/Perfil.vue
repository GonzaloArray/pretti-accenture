<script setup>
const props = defineProps({
    user: Object
})
</script>
<template>
    <section class="d-flex flex-column align-items-center py-3">
        <img src="../../assets/perfil.png" :alt="user.userName">
        <h2 @dblclick="handleEditar" class="text-center">@{{user.userName}}</h2>
        <p>{{user.city}}</p>
    </section>
</template>
<style scoped>

</style>