<script setup>
const props = defineProps({
    icon: String,
})

</script>
<template>
    <button class="btn btn-sm mt-1 ">
        <span class="material-icons-outlined fs-6">
            {{icon}}
        </span>
    </button>
</template>