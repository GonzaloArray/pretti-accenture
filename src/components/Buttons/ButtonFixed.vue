<script setup>
const props = defineProps({
    icon: String,
    href: String,
})
</script>
<template>
    <div class="col-3">
        <router-link class="btn bg-negro border btn-sm px-4 shadow p-2" :to="'/'+href">
            <span class="material-icons-outlined text-dark fs-1 m-0 ">
                {{icon}}
            </span>
        </router-link>
    </div>
</template>
<style scoped>
    .bg-negro{
        background-color: transparent!important;;
    }
    .router-link-active.border{
        border-top: 3px solid #317AC7!important;;
        transition: .3s ease-in-out;
    }
</style>