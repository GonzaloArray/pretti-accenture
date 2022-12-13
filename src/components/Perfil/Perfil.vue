<script setup>
    import { useUserStore } from "../../store/user";

    const store = useUserStore();
</script>
<template>
    <section class="d-flex justify-content-center align-items-center py-3 text-light">
        <img :src="store.usuario.photoURL" :alt="store.usuario.displayName" class="rounded-pill mb-3 me-2">
        <div class="d-flex flex-column">
            <h2 @dblclick="handleEditar" class="text-start">@{{store.usuario.displayName}}</h2>
            <p>{{store.usuario.email}}</p>
        </div>
    </section>
</template>
<style scoped>

</style>