<script setup>
    const props = defineProps({
        button: String
    });
</script>
<template>
    <input class="shawdon fw-bold bg-button py-2 px-3 fs-7 mb-2" type="submit" :value="button">

</template>
<style scoped>
.bg-button{
    background-color: #FCF9BF!important;
    color: #656464;
    border-radius: .9rem;
    transition: .3s;
}
.bg-button:hover{
    background-color: #e5e2b7!important;
}
.shawdon{
    box-shadow: 4px 2px 2px 1px rgba(0, 0, 0, 0.361);
}
</style>