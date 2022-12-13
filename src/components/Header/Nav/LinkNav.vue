<script setup>
import { RouterLink } from "vue-router"


const props = defineProps({
    title: String,
    icon: String,
    href: String
})

</script>
<template>
    <div>
        <li>
            <RouterLink :to="'/'+href" class="dropdown-item d-flex align-items-center">
                <span class="material-icons-outlined opacity me-2">
                    {{icon}}
                </span>
                <span>{{title}}</span>
            </RouterLink>
        </li>
        <li>
            <hr class="dropdown-divider">
        </li>
    </div>
</template>

<style scoped>

.dropdown-menu .dropdown-divider {
    color: #a5c5fe;
    margin: 0;
}

.dropdown-menu .dropdown-item {
    font-size: 14px;
    padding: 10px 15px;
    transition: 0.3s;
}

</style>