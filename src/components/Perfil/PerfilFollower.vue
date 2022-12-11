<script setup>
const props = defineProps({
    email: String,
    photo: String,
    name: String
})
</script>

<template>
    <section class="d-flex p-2 justify-content-center align-items-center flex-column">
        <img class="width" :src="photo" :alt="name">
        <h2 class="fw-bold fs-1 text-light">{{name}}</h2>
        <h3 class="fs-6 text-light">{{email}}</h3>  
    </section>
</template>

<style>
    .width{
        width: 5rem;
    }
</style>