<script setup>
import { useUserStore } from "../../store/user"

const store = useUserStore();

const props = defineProps({
    title: String,
    icon: String,
    href: String,
})
</script>
<template>
    <div class="col-2">
        <router-link class="btn bg-negro border-0 border btn-sm py-2 px-2" :to="'/'+href">

            <span class="notification-link material-icons-outlined fs-1 m-0 ">
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
        border-radius: 0!important;
        transition: .2s ease-in-out;
        color: #317AC7!important;
    }
</style>