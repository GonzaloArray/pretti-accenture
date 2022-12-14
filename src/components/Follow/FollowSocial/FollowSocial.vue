<script setup>

</script>

<template>
    <div class="d-flex justify-content-center g-2 text-light mb-4">
        <button class="opacity bg__pretti text-light d-flex justify-content-center align-items-center rounded-pill border-0 py-1 w-100">
            <span class="material-icons-outlined mx-2 rotate fs-6">
                send
            </span>
            <p class="mb-0">Message</p>
        </button>
        <p class="bg-dark fs-7 rounded-1 px-2 position-absolute start-0 me-3 rotate_comming opacity__comming">Comming Soon</p>
    </div>
</template>

<style scoped>
.bg__pretti{
    background-color: #317AC7;
}
.rotate{
    transform: rotate(-30deg) translateY(-3px);
}
.opacity{
    opacity: .4;
}

.rotate_comming{
    transform: rotate(-8deg) translateY(-3px);
}
</style>