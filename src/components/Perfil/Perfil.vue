<script setup>
    import { useUserStore } from "../../store/user";

    const store = useUserStore();
    console.log(store)
</script>
<template>
    <section class="d-flex flex-column align-items-center py-3">
        <img :src="store.usuario.photoURL" :alt="store.usuario.displayName" class="rounded-pill mb-3">
        <h2 @dblclick="handleEditar" class="text-center">@{{store.usuario.displayName}}</h2>
        <p>{{store.usuario.displayName}}</p>
    </section>
</template>
<style scoped>

</style>