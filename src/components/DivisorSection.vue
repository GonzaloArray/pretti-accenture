<script setup>
    const props = defineProps({
        title: String,
        subTitle: String,
    })
</script>
<template>
    <div class="col-12">
        <h2 class="fs-7 fw-bold mb-3"><span>Home</span> / {{subTitle}}</h2>
    </div>
</template>
<style scoped>

</style>