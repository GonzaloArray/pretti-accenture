<script setup>
    const props = defineProps({
        button: String
    });
</script>
<template>
    <input class="shawdon fw-bold bg-button fs-7 mb-2" type="submit" :value="button">

</template>
<style scoped>
.bg-button{
    background-color: #317AC7!important;
    color: #ffffff;
    border-radius: .9rem;
    transition: .3s;
    font-size: 17px;
    padding: .6rem 0;
}
.bg-button:hover{
    background-color: #317AC7!important;
}
.shawdon{
    box-shadow:inset 4px 4px 5px #0e5eb5;
}
</style>