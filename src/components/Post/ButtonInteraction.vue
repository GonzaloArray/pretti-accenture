<script setup>
const props = defineProps({
    icon: String
})
</script>
<template>
    <div class="col-2">
        <span class="material-icons-outlined">
            {{icon}}
        </span>
    </div>
</template>


<style scoped>

</style>