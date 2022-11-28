<script setup>
const props = defineProps({
    title: String,
    information: String,
    img: String,
})
</script>
<template>
    <section class="d-flex bg-success text-white p-3 shadow">
        <div>
            <h2 class="fs-5">{{title}}</h2>
            <p>{{information}}</p>
        </div>
        <img class="landing" :src="img" alt="Blog de pretti">
    </section>
</template>
<style scoped>
.landing{
    width: 6rem;
}

</style>