<script setup>
    const props = defineProps({
        comment: String,
        id: String
    })

    console.log(props)
</script>
<template>
    <li class="my-4 bg-white rounded-1 shadow post">
        <div class="py-1 px-3">
            <h2 class="fs-5">{{comment}}</h2>
        </div>
    </li>
</template>


<style scoped>

</style>>
